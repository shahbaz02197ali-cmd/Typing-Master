insert into public.lessons(id,title,level,sequence,description,published) values
('home-row','Home row basics','Beginner',1,'Learn home-row placement and finger return.',true),
('left-top','Top row — left hand','Beginner',2,'Practice Q, W, E, R and T.',true),
('right-top','Top row — right hand','Beginner',3,'Practice Y, U, I, O and P.',true),
('bottom-row','Bottom row','Beginner',4,'Practice Z, X, C, V, B, N and M.',true),
('all-letters','All letters','Beginner',5,'Combine all letters into short sentences.',true),
('capitals','Capital letters','Intermediate',6,'Practice Shift and capital letters.',true),
('punctuation','Punctuation','Intermediate',7,'Practice punctuation marks.',true),
('numbers','Numbers and symbols','Intermediate',8,'Practice numbers and symbols.',true),
('office-email','Office email practice','Advanced',9,'Practice workplace writing.',true),
('data-entry','Data entry practice','Advanced',10,'Practice structured data accurately.',true)
on conflict(id) do update set title=excluded.title,level=excluded.level,sequence=excluded.sequence,description=excluded.description,published=excluded.published;

insert into public.typing_content(title,body,language,category,difficulty,source_type,published) values
('Home row drill','asdf jkl; asdf jkl; fj fj dk dk sl sl','en','letters','beginner','curated',true),
('All letters','Quick brown foxes jump over lazy dogs. Practice makes progress.','en','sentences','beginner','curated',true),
('Business email','Hello team, please review the attached report and share your feedback by Friday. Thank you.','en','business','advanced','curated',true)
on conflict do nothing;

insert into public.achievements(id,name,description,criteria) values
('first-test','First Test','Complete your first typing test.','{"tests_completed":1}'),
('accuracy-90','Accuracy Builder','Reach at least 90% accuracy in a test.','{"accuracy":90}'),
('marathon-finish','Marathon Finisher','Complete the 10,000-word marathon.','{"marathon_words":10000}')
on conflict(id) do nothing;
