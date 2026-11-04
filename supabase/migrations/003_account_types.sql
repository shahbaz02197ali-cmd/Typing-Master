-- Phase 3: learner account types and profile foundations.
-- Existing accounts default to Student; new email signups may choose either supported type.

alter table public.user_profiles
  add column if not exists account_type text not null default 'student'
  check (account_type in ('student', 'college_student'));

create index if not exists idx_user_profiles_account_type
  on public.user_profiles(account_type);

create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  requested_type text;
begin
  requested_type := coalesce(new.raw_user_meta_data ->> 'account_type', 'student');
  if requested_type not in ('student', 'college_student') then
    requested_type := 'student';
  end if;

  insert into public.user_profiles (id, display_name, account_type)
  values (
    new.id,
    coalesce(
      nullif(left(trim(new.raw_user_meta_data ->> 'display_name'), 60), ''),
      nullif(left(trim(new.raw_user_meta_data ->> 'full_name'), 60), ''),
      nullif(split_part(new.email, '@', 1), ''),
      'Learner'
    ),
    requested_type
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Private learner data tables are introduced in subsequent migrations.
