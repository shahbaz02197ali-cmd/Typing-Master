-- Typing Master initial schema. Apply to a fresh Supabase project.
create extension if not exists pgcrypto;

create table if not exists public.guest_profiles (
  id uuid primary key default gen_random_uuid(),
  display_name text not null check (char_length(display_name) between 2 and 24),
  created_at timestamptz not null default now(),
  status text not null default 'active' check (status in ('active','blocked','deleted'))
);
create table if not exists public.lessons (
  id text primary key,
  title text not null,
  level text not null,
  sequence integer not null unique,
  description text not null default '',
  published boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.typing_content (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  language text not null default 'en',
  category text not null default 'general',
  difficulty text not null default 'beginner',
  source_type text not null default 'curated' check (source_type in ('curated','generated','user')),
  published boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.lesson_exercises (
  id uuid primary key default gen_random_uuid(),
  lesson_id text not null references public.lessons(id) on delete cascade,
  content_id uuid references public.typing_content(id) on delete set null,
  exercise_type text not null default 'passage',
  target_accuracy numeric(5,2) not null default 90 check (target_accuracy between 0 and 100)
);
create table if not exists public.test_sessions (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid references public.guest_profiles(id) on delete set null,
  mode text not null,
  duration_seconds integer not null default 60 check (duration_seconds >= 0),
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  status text not null default 'started' check (status in ('started','completed','abandoned'))
);
create table if not exists public.test_results (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null unique references public.test_sessions(id) on delete cascade,
  gross_wpm numeric(8,2) not null default 0,
  net_wpm numeric(8,2) not null default 0,
  accuracy numeric(5,2) not null default 0,
  errors integer not null default 0,
  completed_words integer not null default 0,
  verified boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references public.guest_profiles(id) on delete cascade,
  lesson_id text not null references public.lessons(id) on delete cascade,
  best_accuracy numeric(5,2) not null default 0,
  attempts integer not null default 0,
  completed_at timestamptz,
  unique(guest_id,lesson_id)
);
create table if not exists public.marathon_checkpoints (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid references public.guest_profiles(id) on delete cascade,
  passage_version text not null,
  typed_text text not null default '',
  elapsed_seconds integer not null default 0,
  status text not null default 'in_progress' check (status in ('in_progress','paused','completed','abandoned')),
  updated_at timestamptz not null default now()
);
create table if not exists public.race_rooms (
  id uuid primary key default gen_random_uuid(),
  room_code text not null unique,
  status text not null default 'waiting' check (status in ('waiting','countdown','racing','completed','cancelled')),
  content_id uuid references public.typing_content(id),
  capacity integer not null default 4 check (capacity between 2 and 4),
  created_at timestamptz not null default now(),
  start_at timestamptz,
  ended_at timestamptz
);
create table if not exists public.race_participants (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.race_rooms(id) on delete cascade,
  guest_id uuid references public.guest_profiles(id) on delete set null,
  display_name text not null,
  participant_type text not null default 'human' check (participant_type in ('human','bot')),
  ready boolean not null default false,
  progress_chars integer not null default 0 check (progress_chars >= 0),
  finish_at timestamptz,
  connected boolean not null default true,
  joined_at timestamptz not null default now()
);
create table if not exists public.race_results (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.race_rooms(id) on delete cascade,
  participant_id uuid not null references public.race_participants(id) on delete cascade,
  rank integer not null,
  wpm numeric(8,2) not null default 0,
  accuracy numeric(5,2) not null default 0,
  verified boolean not null default false,
  created_at timestamptz not null default now(),
  unique(room_id,participant_id),
  unique(room_id,rank,participant_id)
);
create table if not exists public.achievements (
  id text primary key,
  name text not null,
  description text not null,
  criteria jsonb not null default '{}'::jsonb
);
create table if not exists public.guest_achievements (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references public.guest_profiles(id) on delete cascade,
  achievement_id text not null references public.achievements(id) on delete cascade,
  earned_at timestamptz not null default now(),
  unique(guest_id,achievement_id)
);
create table if not exists public.daily_challenges (
  id uuid primary key default gen_random_uuid(),
  challenge_date date not null unique,
  content_id uuid references public.typing_content(id),
  rules jsonb not null default '{}'::jsonb,
  status text not null default 'draft' check (status in ('draft','published','closed'))
);
create table if not exists public.challenge_results (
  id uuid primary key default gen_random_uuid(),
  challenge_id uuid not null references public.daily_challenges(id) on delete cascade,
  guest_id uuid not null references public.guest_profiles(id) on delete cascade,
  result_id uuid references public.test_results(id) on delete set null,
  completed_at timestamptz not null default now(),
  unique(challenge_id,guest_id)
);
create table if not exists public.seasons (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  start_at timestamptz not null,
  end_at timestamptz not null,
  status text not null default 'scheduled' check (status in ('scheduled','active','completed')),
  check (end_at > start_at)
);
create table if not exists public.season_scores (
  id uuid primary key default gen_random_uuid(),
  season_id uuid not null references public.seasons(id) on delete cascade,
  guest_id uuid not null references public.guest_profiles(id) on delete cascade,
  points integer not null default 0 check (points >= 0),
  updated_at timestamptz not null default now(),
  unique(season_id,guest_id)
);
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references public.guest_profiles(id) on delete cascade,
  certificate_type text not null,
  verification_code text not null unique default upper(encode(gen_random_bytes(8),'hex')),
  issued_at timestamptz not null default now()
);
create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid not null unique,
  role text not null check (role in ('admin','editor','moderator')),
  status text not null default 'active' check (status in ('active','disabled'))
);
create table if not exists public.admin_audit_logs (
  id uuid primary key default gen_random_uuid(),
  admin_id uuid references public.admin_users(id) on delete set null,
  action text not null,
  target_id text,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_test_sessions_guest_date on public.test_sessions(guest_id,started_at desc);
create index if not exists idx_test_results_rank on public.test_results(net_wpm desc,accuracy desc) where verified=true;
create index if not exists idx_race_rooms_status_date on public.race_rooms(status,created_at desc);
create index if not exists idx_race_participants_room on public.race_participants(room_id);
create index if not exists idx_marathon_guest_updated on public.marathon_checkpoints(guest_id,updated_at desc);
create index if not exists idx_season_scores_rank on public.season_scores(season_id,points desc);

-- Conservative defaults: no public direct writes. Server-side routes should validate and use
-- the anon key with carefully scoped policies or a server-only service key. Do not expose service key.
alter table public.guest_profiles enable row level security;
alter table public.lessons enable row level security;
alter table public.typing_content enable row level security;
alter table public.lesson_exercises enable row level security;
alter table public.test_sessions enable row level security;
alter table public.test_results enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.marathon_checkpoints enable row level security;
alter table public.race_rooms enable row level security;
alter table public.race_participants enable row level security;
alter table public.race_results enable row level security;
alter table public.achievements enable row level security;
alter table public.guest_achievements enable row level security;
alter table public.daily_challenges enable row level security;
alter table public.challenge_results enable row level security;
alter table public.seasons enable row level security;
alter table public.season_scores enable row level security;
alter table public.certificates enable row level security;
alter table public.admin_users enable row level security;
alter table public.admin_audit_logs enable row level security;

-- Public may read published curriculum and public competition metadata only.
create policy "published lessons are readable" on public.lessons for select using (published=true);
create policy "published content is readable" on public.typing_content for select using (published=true);
create policy "published exercises are readable" on public.lesson_exercises for select
  using (exists(select 1 from public.lessons l where l.id=lesson_id and l.published=true));
create policy "achievement definitions are readable" on public.achievements for select using (true);
create policy "published challenges are readable" on public.daily_challenges for select using (status='published');
create policy "season metadata is readable" on public.seasons for select using (status in ('active','completed'));
-- All writes and guest-specific reads remain server-mediated until a secure guest token/RPC policy is implemented.
