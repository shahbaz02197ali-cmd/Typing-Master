export type TypingPack = {
  id: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  paragraphs: string[];
};

export const typingPacks: TypingPack[] = [
  {id:"adventure",title:"The Hidden Valley",category:"Adventure story",level:"Intermediate",description:"A journey into an unexplored mountain valley.",paragraphs:[
    "Mira found the old map inside a wooden box beneath the stairs. Its paper was yellow, its edges were torn, and a blue line crossed the mountains beyond her village. At the bottom, someone had written three words: follow the river.",
    "At sunrise she packed water, a notebook, a small compass, and enough food for two days. The village was quiet when she left. Beyond the last house, a narrow path entered the forest, where wet leaves shone in the morning light.",
    "The river became louder as the path climbed. She crossed a wooden bridge and discovered a stone marker covered with symbols. The marks matched those printed on the map, so she turned toward a valley hidden behind a wall of pine trees.",
    "By evening the clouds opened and sunlight reached the valley floor. A clear lake reflected the cliffs, and an abandoned cabin stood beside the water. Mira understood that the map was not a promise of treasure. It was an invitation to explore."
  ]},
  {id:"mystery",title:"The Clockmaker's Secret",category:"Mystery",level:"Advanced",description:"A quiet town, a stopped clock, and a missing letter.",paragraphs:[
    "Every clock in Bell Street stopped at exactly 8:17 on the night the clockmaker disappeared. The police called it a coincidence, but young Daniel noticed that the clock in the station had stopped too, even though it had been repaired that afternoon.",
    "He returned to the workshop after school. Dust covered the counter, yet one drawer was clean. Inside it lay a brass key, a photograph, and a letter addressed to a person whose name had been carefully scratched away.",
    "The key opened a narrow cabinet behind the largest clock. Daniel found a second mechanism connected to wires that ran beneath the floor. It was not designed to tell time. It was designed to make every clock in the street stop together.",
    "At the bottom of the cabinet was a note in the clockmaker's handwriting. It said that the town had been hiding one important hour for more than fifty years. Daniel heard footsteps outside and folded the note into his pocket."
  ]},
  {id:"scifi",title:"Beyond the Blue Planet",category:"Science fiction",level:"Advanced",description:"A space mission discovers a signal beyond the solar system.",paragraphs:[
    "The research vessel Aurora had travelled for eleven months before the signal appeared. It was a sequence of seven pulses, repeated every forty seconds, coming from a region of space where no planet had been recorded.",
    "Commander Imani asked the navigation team to verify the coordinates. The signal was too regular to be random, yet it contained a pattern that changed whenever the ship moved closer. Someone, or something, seemed to be responding to their approach.",
    "The crew sent a simple mathematical sequence. Three minutes later the receiver displayed the same sequence with one additional number. The message was not a warning or a greeting. It was a question about the distance between two stars.",
    "For the first time in human history, the crew had evidence of a conversation that did not begin on Earth. Imani opened the communication channel and prepared a reply that every person on the planet would one day read."
  ]},
  {id:"fantasy",title:"The Library of Lost Magic",category:"Fantasy",level:"Intermediate",description:"A young apprentice discovers a library that remembers its readers.",paragraphs:[
    "The library appeared only when the moon was full. Its doors stood between two ordinary shops, and its windows glowed with a soft golden light. Most people walked past without noticing it, but Elian could hear pages turning from the street.",
    "Inside, books moved slowly along shelves like birds resting on branches. A librarian with silver glasses explained that every book contained a memory someone had forgotten. The apprentice was warned never to open a volume with a black ribbon.",
    "Elian found a book with his own name on the cover. Its first page described a summer afternoon he could barely remember, when his grandmother had taught him to listen to the wind. The next page was blank.",
    "He placed the book back carefully. The library did not offer power or easy answers. It offered a chance to understand the stories that had shaped him, and the responsibility to protect them."
  ]},
  {id:"romance",title:"Letters by the Sea",category:"Romance",level:"Intermediate",description:"Two strangers exchange letters in a coastal town.",paragraphs:[
    "The first letter arrived in a bottle after a storm. It contained no address, only a short description of a quiet morning and a wish that someone somewhere would read it. Aisha placed a reply inside the same bottle and returned it to the water.",
    "A week later another letter appeared. The writer described a lighthouse, a favourite book, and the sound of rain against a window. The letters became a small ritual, each one carrying a thought that would have been difficult to say aloud.",
    "They finally agreed to meet beside the old pier at sunset. Aisha arrived early and watched the boats return. When a familiar blue umbrella appeared along the path, she recognised the person from the handwriting before seeing a face.",
    "They laughed about the bottle, the storm, and the many pages that had crossed the bay. Neither expected a perfect story. They were simply glad that two ordinary lives had found a new reason to look toward the sea."
  ]},
  {id:"poem",title:"Morning Light",category:"Poetry",level:"Beginner",description:"A calm free-verse poem about a new beginning.",paragraphs:[
    "The morning opens slowly,\nA quiet window filled with gold.\nThe city wakes beneath the sky,\nAnd yesterday releases its hold.",
    "A bird rehearses one clear note,\nThe leaves begin to move.\nA thousand little moments wait,\nFor someone brave enough to choose.",
    "Take one step and breathe again,\nLet patience guide the day.\nThe road is made of many steps,\nAnd every step can show the way.",
    "When evening paints the rooftops blue,\nRemember what you tried.\nA day is more than what you finish,\nIt is the courage found inside."
  ]},
  {id:"nature",title:"The Life of a Forest",category:"Nature article",level:"Beginner",description:"Explore the connected life of trees, soil, water and wildlife.",paragraphs:[
    "A forest is more than a collection of trees. It is a living community where plants, animals, fungi, insects, water, and soil depend on one another. Each part supports a balance that can take many years to develop.",
    "Tall trees create shade and protect the ground from strong sunlight. Their roots hold soil in place and help water move through the earth. Fallen leaves slowly become nutrients that support new growth.",
    "Birds carry seeds to distant places, while insects pollinate flowers and provide food for other animals. Fungi break down old wood and return useful materials to the soil. Even a fallen tree can become a home for many forms of life.",
    "Protecting forests means protecting these relationships. Careful planning, responsible use of resources, and restoration projects can help natural habitats remain healthy for future generations."
  ]},
  {id:"ocean",title:"The Deep Blue Ocean",category:"Science article",level:"Intermediate",description:"A readable journey through ocean zones and marine life.",paragraphs:[
    "The ocean covers most of the surface of Earth and contains an extraordinary variety of life. Near the shore, sunlight reaches the seabed and supports sea grasses, coral communities, and many small organisms.",
    "Farther from land, the water becomes deeper and darker. Some animals produce their own light, while others travel long distances in search of food. Their bodies have adapted to pressure, temperature, and a world where sunlight cannot reach.",
    "Ocean currents move heat around the planet and influence weather patterns. Tiny drifting organisms help form the foundation of marine food webs, connecting small fish to larger predators.",
    "Healthy oceans depend on responsible fishing, reduced pollution, and the protection of important habitats. Every river eventually carries its water toward the sea, which means choices made far inland can affect marine life."
  ]},
  {id:"history",title:"A Journey Through History",category:"History",level:"Intermediate",description:"How trade, ideas and inventions shaped human societies.",paragraphs:[
    "History is the study of people, places, decisions, and changes across time. It is built from written records, objects, buildings, oral traditions, and scientific discoveries that help us understand how earlier communities lived.",
    "Trade routes connected distant regions long before modern transport existed. Merchants carried cloth, metals, spices, tools, and stories. Along with goods, people exchanged languages, skills, beliefs, and new ways of solving problems.",
    "Inventions often changed daily life gradually. Better tools improved farming, printing helped ideas travel, and new forms of transport connected cities. Each development created opportunities as well as challenges.",
    "Studying history encourages careful questions. Evidence can be incomplete, and different people may describe the same event in different ways. Comparing sources helps us build a more balanced understanding of the past."
  ]},
  {id:"science",title:"How Science Changes the World",category:"Science",level:"Intermediate",description:"A practical introduction to observation, testing and discovery.",paragraphs:[
    "Science begins with curiosity. A person notices something, asks a question, and looks for evidence that may explain what is happening. A useful investigation is clear enough for another person to examine and repeat.",
    "Researchers make observations, form possible explanations, and design tests. Measurements help replace guesses with evidence, while careful records make it possible to compare results and identify mistakes.",
    "A single experiment rarely answers every question. New evidence may support an earlier explanation, improve it, or show that it was incomplete. Changing an idea when the evidence changes is a strength of scientific thinking.",
    "Science is a shared human effort. Teams across countries study health, climate, materials, energy, and space. Their discoveries become most valuable when knowledge is communicated clearly and used responsibly."
  ]},
  {id:"technology",title:"The Digital Future",category:"Technology",level:"Advanced",description:"Explore useful technology and responsible digital habits.",paragraphs:[
    "Digital technology has changed how people communicate, learn, work, and create. A message can travel across the world in seconds, while online tools allow teams to collaborate without sharing the same office or classroom.",
    "Convenience also brings responsibility. Strong passwords, software updates, privacy settings, and careful attention to suspicious links help protect personal information. Security works best when it becomes a regular habit.",
    "Artificial intelligence can assist with research, writing, translation, and analysis. Its results still require human review because automated systems can make mistakes or reflect incomplete information.",
    "The future of technology should be measured not only by speed, but also by usefulness, fairness, accessibility, and trust. Good design helps people understand what a tool does and gives them control over important decisions."
  ]},
  {id:"business",title:"The Professional Workplace",category:"Business writing",level:"Advanced",description:"Professional communication for modern office environments.",paragraphs:[
    "A productive workplace depends on clear goals, respectful communication, and reliable processes. Team members should understand their responsibilities and know where to find accurate information when a decision is required.",
    "Before sending a business email, review the recipient, subject, attachments, dates, and requested action. Short paragraphs make important information easier to scan, especially when readers are managing several tasks.",
    "Meetings are more useful when an agenda is shared in advance. Participants can prepare questions, discuss relevant evidence, and record decisions. Each action should have an owner and a realistic deadline.",
    "Professional growth comes from practice and feedback. Employees can improve by documenting processes, learning new tools, asking thoughtful questions, and reviewing completed work for accuracy."
  ]},
  {id:"finance",title:"Personal Finance Basics",category:"Finance article",level:"Intermediate",description:"Understand budgets, saving, planning and financial choices.",paragraphs:[
    "A personal budget is a plan for how money will be used. It begins with a clear picture of income, regular expenses, occasional costs, and financial priorities. Writing these numbers down can reveal patterns that are easy to overlook.",
    "Saving works best when it is connected to a specific purpose. An emergency fund can help manage unexpected costs, while a separate savings goal can support education, equipment, or a future project.",
    "Before borrowing money, compare the total repayment amount, fees, interest rate, and payment schedule. A low monthly payment does not always mean a low overall cost.",
    "Financial decisions are personal and depend on individual circumstances. Reliable information, realistic planning, and time to compare options can help people make choices with greater confidence."
  ]},
  {id:"travel",title:"Across the Silk Road",category:"Travel story",level:"Intermediate",description:"A travel journal through landscapes and historic cities.",paragraphs:[
    "The journey began before sunrise, when the station was filled with the sound of rolling bags and quiet conversations. Beyond the window, fields gave way to hills, and the changing landscape made the distance feel smaller.",
    "In the old city, narrow streets opened into a market filled with handmade objects, fresh bread, and bright fabrics. A local guide explained how generations of travellers had passed through the same square.",
    "The next morning brought a long road across a dry plain. The driver stopped near a small village where residents offered tea and directions. Their kindness became one of the strongest memories of the trip.",
    "Travel teaches attention. A map shows where a person is going, but conversations, unexpected delays, and unfamiliar routines reveal what a place means to the people who live there."
  ]},
  {id:"sports",title:"The Spirit of Teamwork",category:"Sports article",level:"Beginner",description:"Practice a motivating passage about sport and cooperation.",paragraphs:[
    "A team becomes stronger when every player understands the shared goal. Talent is important, but trust, preparation, and communication help people perform together when a match becomes difficult.",
    "Training is made of small improvements. Players repeat basic movements, study their decisions, and learn how to recover after a mistake. Consistent practice builds habits that remain useful under pressure.",
    "Good teammates encourage one another and accept responsibility. They celebrate progress without forgetting the work that made it possible, and they treat opponents with respect.",
    "Winning can be exciting, but sport also teaches patience, discipline, and resilience. The lessons learned during practice often matter long after the final score."
  ]},
  {id:"health",title:"Healthy Daily Habits",category:"Lifestyle article",level:"Beginner",description:"A general wellness passage about routines and balance.",paragraphs:[
    "A healthy routine is built from practical choices repeated over time. Regular movement, balanced meals, enough water, and a consistent sleep schedule can support everyday energy and concentration.",
    "Small goals are easier to maintain than sudden changes. A short walk, a planned meal, or a few minutes away from a screen can become part of a realistic daily routine.",
    "Rest is also productive. Breaks give the mind time to recover, while a calm evening routine can make it easier to prepare for the next day.",
    "There is no single routine that fits everyone. People have different schedules, needs, and responsibilities, so useful habits should be adjusted to personal circumstances."
  ]},
  {id:"education",title:"The Power of Education",category:"Essay",level:"Beginner",description:"An essay about learning, curiosity and opportunity.",paragraphs:[
    "Education gives people tools to understand the world and participate in their communities. It develops knowledge, communication, reasoning, and the confidence to ask questions about unfamiliar subjects.",
    "Learning does not happen only in a classroom. People gain skills through books, conversations, work, experiments, and practical projects. Each experience can connect new ideas with knowledge they already have.",
    "Teachers and mentors guide learners, but progress also depends on curiosity and regular effort. Reviewing a difficult topic, practising a skill, and learning from mistakes can produce lasting improvement.",
    "A strong education system makes learning accessible and encourages independent thought. Its purpose is not simply to memorise information, but to help people use knowledge wisely."
  ]},
  {id:"city",title:"A City That Never Sleeps",category:"Creative writing",level:"Intermediate",description:"A descriptive passage about city life after dark.",paragraphs:[
    "When evening arrives, the city changes its rhythm. Office windows grow dark while market signs brighten, buses fill with passengers, and small restaurants prepare for the final rush of the day.",
    "On a busy street, a fruit seller arranges oranges beneath a warm lamp. Across the road, a student waits for a ride while reading notes on a phone. Every window seems to hold a different story.",
    "The noise becomes softer after midnight. Street cleaners move along the pavement, delivery riders cross empty intersections, and a few late cafés remain open for people who work unusual hours.",
    "A city is more than its buildings and roads. It is a collection of routines, ambitions, memories, and people whose lives meet briefly before moving in different directions."
  ]},
  {id:"space",title:"Our Solar System",category:"Astronomy",level:"Intermediate",description:"A factual passage about planets, stars and exploration.",paragraphs:[
    "Our solar system formed around the Sun billions of years ago. It includes eight planets, dwarf planets, moons, asteroids, comets, and countless smaller objects moving through space under the influence of gravity.",
    "The inner planets are rocky worlds with solid surfaces. Farther out, giant planets contain thick atmospheres and have many moons. Each world has a different environment and offers clues about how planetary systems develop.",
    "Spacecraft allow scientists to study distant places using cameras, instruments, and robotic explorers. Some missions orbit planets, while others land on surfaces or travel beyond the outer planets.",
    "Exploration requires patience and careful engineering. Signals take time to cross enormous distances, and every instrument must work in an environment that humans cannot easily reach."
  ]},
  {id:"invention",title:"The Story of an Invention",category:"Biography",level:"Intermediate",description:"How persistence turns a practical problem into a useful idea.",paragraphs:[
    "Many inventions begin with an everyday problem. Someone notices that a task takes too long, wastes material, or creates unnecessary difficulty. The first idea may be simple, but testing it can reveal a better solution.",
    "Early prototypes are rarely perfect. A part may break, a measurement may be wrong, or a design may be difficult to use. Each failure provides information that can guide the next attempt.",
    "Inventors often work with other people who bring different skills. Designers, engineers, researchers, and users help identify weaknesses and improve the final product.",
    "An invention becomes meaningful when it solves a real need. Its success depends not only on originality, but also on safety, reliability, affordability, and the people who benefit from it."
  ]},
  {id:"garden",title:"The Secret Garden",category:"Children's story",level:"Beginner",description:"A gentle story about friendship and a forgotten garden.",paragraphs:[
    "At the back of the house, behind a wooden gate, there was a garden that nobody visited. Tall grass covered the path, and ivy climbed over the old stone wall. Lina wondered what might be growing beneath the leaves.",
    "She returned the next afternoon with a small pair of gloves and a watering can. Her neighbour Sami brought a packet of seeds. Together they cleared a corner and discovered tiny flowers hiding near the fence.",
    "Each day they worked for a little while. They planted vegetables, fixed the gate, and made a place where birds could find water. The garden slowly became brighter and easier to walk through.",
    "By the end of summer, the forgotten space had become a meeting place for neighbours. Lina learned that care does not need to be grand. A little attention, shared with others, can change an entire corner of the world."
  ]},
  {id:"detective",title:"The Case of the Missing Painting",category:"Detective fiction",level:"Advanced",description:"A detective follows clues through a museum after closing time.",paragraphs:[
    "The museum director discovered the empty frame at nine in the morning. The gallery had been locked overnight, the alarm showed no warning, and the painting was insured for more than the building itself.",
    "Detective Rao examined the room before speaking to the staff. A small patch of dust was missing from the windowsill, but the window was locked from inside. On the floor lay a thread of dark blue fabric.",
    "Security footage showed no visitor entering the gallery. However, the reflection in a glass cabinet revealed a figure carrying a long umbrella at 8:42. The umbrella had not appeared in the visitor log.",
    "Rao asked the conservator to inspect the frame. Behind its backing was a second label, older than the museum record. The painting had not been stolen last night; it had been replaced years earlier."
  ]},
  {id:"climate",title:"Understanding Climate Change",category:"Environment",level:"Advanced",description:"An accessible overview of climate systems and human choices.",paragraphs:[
    "Earth's climate is influenced by energy from the Sun, the atmosphere, oceans, land, and living systems. These parts interact over long periods, creating patterns that shape temperature, rainfall, winds, and seasons.",
    "Certain gases in the atmosphere trap some of the heat leaving Earth's surface. Human activities have increased the concentration of these gases, changing the planet's energy balance and contributing to long-term warming.",
    "The effects are not identical everywhere. Some regions experience more intense heat, others face changing rainfall, and coastal communities must prepare for rising sea levels and stronger risks from storms.",
    "Reducing emissions, improving energy efficiency, protecting ecosystems, and preparing communities can all contribute to climate action. Reliable measurements and cooperation help people choose responses that fit local conditions."
  ]},
  {id:"leadership",title:"Leadership and Responsibility",category:"Leadership",level:"Advanced",description:"A professional passage on decision-making and trust.",paragraphs:[
    "Leadership is not simply the authority to make decisions. It is the responsibility to understand a situation, listen to different perspectives, communicate a clear direction, and accept the consequences of a choice.",
    "Trust grows when actions match words. A reliable leader shares information honestly, gives credit to others, and addresses problems before they become larger. Consistency matters more than dramatic promises.",
    "Good decisions require evidence as well as judgement. Leaders should identify risks, compare possible outcomes, and explain why a particular path has been selected. When new facts appear, plans should be reviewed.",
    "A healthy team makes room for questions and disagreement. People contribute more effectively when they feel respected, understand their purpose, and know that their work matters."
  ]},
  {id:"journal",title:"A Day in My Journal",category:"Personal narrative",level:"Beginner",description:"A first-person diary-style passage for everyday typing.",paragraphs:[
    "I woke up early today because sunlight was coming through the curtains. The room was quiet, and for a few minutes I could hear birds outside. I made a simple breakfast and wrote down the three tasks I wanted to finish.",
    "The morning went better than expected. I completed the most difficult task first, answered a few messages, and took a short break before lunch. Writing a small plan helped me stay focused without feeling rushed.",
    "In the afternoon I went outside for a walk. The weather was pleasant, and the streets were busier than usual. I noticed a new shop near the corner and made a note to visit it later.",
    "Tonight I feel satisfied because I made steady progress. Not everything went exactly as planned, but I learned something useful and have a clearer idea of what to do tomorrow."
  ]},
  {id:"news",title:"Newsroom Report",category:"News report",level:"Advanced",description:"Practice clear, neutral news-style paragraphs.",paragraphs:[
    "A new community learning centre opened on Monday, offering free computer access, reading rooms, and practical workshops for residents. Organisers said the facility was designed to support students, job seekers, and small businesses.",
    "The centre includes internet-connected workstations, a quiet study area, and rooms for group training. Staff members will provide introductory sessions on digital safety, online research, and common office software.",
    "Local residents welcomed the project and asked organisers to publish a regular schedule of classes. The management team said feedback would be collected during the first three months before additional programmes are planned.",
    "The centre will operate six days a week. Registration is free, and visitors may use the facilities after completing a short orientation session."
  ]},
  {id:"manual",title:"Computer Skills Handbook",category:"Instructional text",level:"Intermediate",description:"A practical handbook passage for accurate technical typing.",paragraphs:[
    "Before using a computer, check that the workspace is clean and that cables are connected securely. Adjust the screen to a comfortable height and place the keyboard where your wrists can remain relaxed.",
    "Save important work regularly and use clear file names that describe the document. Organise related files into folders so they can be found quickly. Keep a separate backup of information that would be difficult to replace.",
    "Install updates from trusted sources and avoid opening unexpected attachments. If a message asks for a password or payment, verify the request through an independent channel before taking action.",
    "When a technical problem occurs, record the exact message and the steps that led to it. A clear description helps support teams identify the cause and recommend a safe solution."
  ]},
  {id:"exam",title:"Academic Essay Practice",category:"Academic essay",level:"Advanced",description:"Formal academic paragraphs with transitions and argument structure.",paragraphs:[
    "Effective communication is a foundational skill in education and professional life. It allows individuals to present evidence, explain complex ideas, and participate in discussions with clarity and respect.",
    "One important element of strong writing is organisation. A clear introduction establishes the subject, each body paragraph develops one central point, and a conclusion connects the evidence to the main argument.",
    "Revision is equally important. Writers should check whether examples support their claims, whether transitions guide the reader, and whether sentences communicate the intended meaning without unnecessary complexity.",
    "These habits apply beyond academic assignments. Reports, proposals, emails, and presentations all become more useful when information is accurate, structured, and adapted to the needs of the audience."
  ]},
  {id:"poem-seasons",title:"Four Seasons",category:"Poetry",level:"Beginner",description:"A four-part poem about changing seasons.",paragraphs:[
    "Spring brings a softer rain,\nAnd green returns to every tree.\nThe little streams begin to sing,\nThe world wakes up for you and me.",
    "Summer fills the open sky,\nWith golden light and longer days.\nThe fields are bright, the gardens grow,\nAnd warm winds travel through the haze.",
    "Autumn paints the leaves in gold,\nThe evening air turns crisp and clear.\nWe gather stories, close the doors,\nAnd welcome change as winter nears.",
    "Winter rests upon the land,\nThe quiet streets reflect the snow.\nA gentle light remains inside,\nAnd seeds prepare for spring to grow."
  ]},
  {id:"space-opera",title:"The Last Signal",category:"Space adventure",level:"Advanced",description:"A longer science-fiction adventure about a lost colony.",paragraphs:[
    "The signal had been travelling for three hundred years. It crossed empty space, passed through clouds of dust, and reached the listening station just as its final power cell began to fail. The message contained a map and a single instruction: do not land at the first beacon.",
    "Captain Noor studied the map while the navigation crew checked the ship's position. The first beacon was close enough to reach in two hours. The second was hidden behind a field of debris, and the third appeared to be moving.",
    "The crew voted to follow the second route. Their decision added a day to the journey, but it revealed a small station attached to an asteroid. Inside, the team found evidence that the original colony had survived by moving between safe locations.",
    "A final recording explained why the first beacon was dangerous. It had been designed to attract rescue ships toward an unstable orbit. Noor sent the warning back toward Earth and guided the vessel toward the distant lights of the colony."
  ]},
  {id:"startup",title:"Building a Small Business",category:"Entrepreneurship",level:"Advanced",description:"A practical story of testing an idea and serving customers.",paragraphs:[
    "A small business often begins with a simple observation: people need something that is difficult to find, expensive to access, or inconvenient to use. An idea becomes stronger when it is tested with real customers rather than assumptions.",
    "The first version should solve one clear problem. A simple service, a small product range, and direct conversations can reveal what customers value most. Feedback helps the owner improve before spending heavily.",
    "Cash flow matters as much as sales. Owners need to understand costs, payment timing, inventory, taxes, and the money required to keep operating. A business can be popular and still struggle if payments arrive too late.",
    "Long-term growth depends on trust. Clear prices, dependable service, honest marketing, and thoughtful support encourage customers to return and recommend the business to others."
  ]},
  {id:"ethics",title:"Digital Citizenship",category:"Digital literacy",level:"Intermediate",description:"How to behave responsibly and safely online.",paragraphs:[
    "Digital citizenship means using online spaces with care and respect. Every post, comment, image, and shared document can affect other people, so users should think about accuracy, privacy, and tone before publishing.",
    "A strong digital habit is to verify information before sharing it. Check the original source, compare reliable reports, and be cautious when a headline creates urgency or asks readers to react immediately.",
    "Respecting privacy includes asking before sharing someone else's photograph or personal details. Strong passwords and multi-factor authentication help protect accounts, while careful permissions limit unnecessary access.",
    "Online communities work better when disagreement remains respectful. People can challenge an idea without attacking the person who expressed it, and they can correct a mistake without turning it into a personal conflict."
  ]},
  {id:"classic",title:"The Quiet Art of Patience",category:"Reflective prose",level:"Intermediate",description:"A reflective literary passage about patience and steady work.",paragraphs:[
    "Patience is often mistaken for waiting without purpose. In reality, it is the ability to continue thoughtful work while accepting that some results take time. A skill grows through repetition long before progress becomes obvious.",
    "A gardener cannot pull a plant taller by touching its leaves. The gardener prepares the soil, provides water, removes weeds, and allows the seasons to do their work. Learning follows a similar rhythm.",
    "People sometimes compare their first steps with another person's finished achievement. Such comparisons hide the years of practice, mistakes, and support that may have come before success.",
    "The most reliable progress is often quiet. It appears in a clearer sentence, a more accurate keystroke, a better question, or the confidence to try again after a difficult day."
  ]}
];

export const WORD_LENGTHS = [
  {label:"200 words · Short practice",words:200},
  {label:"500 words · Extended passage",words:500},
  {label:"1,000 words · Long article",words:1000},
  {label:"2,000 words · Chapter",words:2000},
  {label:"5,000 words · Long chapter",words:5000},
  {label:"10,000 words · Mini book",words:10000},
  {label:"20,000 words · Full book",words:20000}
] as const;

export function buildTypingDocument(pack: TypingPack, wordLimit: number): string {
  const result: string[] = [];
  let count = 0;
  let paragraphIndex = 0;
  while (count < wordLimit) {
    const paragraph = pack.paragraphs[paragraphIndex % pack.paragraphs.length];
    const words = paragraph.trim().split(/\s+/);
    const remaining = wordLimit - count;
    const selected = words.slice(0, remaining);
    result.push(selected.join(" "));
    count += selected.length;
    paragraphIndex += 1;
  }
  return result.join("\n\n");
}
