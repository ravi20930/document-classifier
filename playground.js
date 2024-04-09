const data = [
  {
    text: "Just got back from a hiking trip in the mountains. The views were breathtaking!",
    label: "Travel & Leisure",
  },
  {
    text: "Yesterday, I attended a seminar on personal finance management. It was really informative.",
    label: "Financial & Legal",
  },
  {
    text: "Spent the weekend binge-watching my favorite TV series. It was so relaxing!",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the doctor for my annual check-up. Thankfully, everything looks good!",
    label: "Health & Medical",
  },
  {
    text: "Started reading a new novel last night. Can't wait to see how the story unfolds.",
    label: "Entertainment & Media",
  },
  {
    text: "Just signed the lease agreement for my new apartment. Moving in next week!",
    label: "Financial & Legal",
  },
  {
    text: "Attended a yoga class this morning. Feeling refreshed and energized.",
    label: "Health & Medical",
  },
  {
    text: "Received a promotion at work today! Hard work pays off.",
    label: "Work & Business",
  },
  {
    text: "Planning a trip to Europe next summer. So excited to explore new cultures!",
    label: "Travel & Leisure",
  },
  {
    text: "Started learning Spanish online. ¡Vamos a hablar español!",
    label: "Education & Learning",
  },
  {
    text: "Celebrated my birthday with friends last night. Had a blast!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Reviewed my investment portfolio with my financial advisor. Making some adjustments for better returns.",
    label: "Financial & Legal",
  },
  {
    text: "Watched a documentary about space exploration. It was mind-blowing!",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the dentist for a routine check-up. No cavities, yay!",
    label: "Health & Medical",
  },
  {
    text: "Attended a workshop on digital marketing strategies. Lots of valuable insights.",
    label: "Work & Business",
  },
  {
    text: "Booked tickets for a music concert next month. Can't wait to see my favorite band live!",
    label: "Entertainment & Media",
  },
  {
    text: "Started a new fitness routine. Feeling motivated to get in shape.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed my budget for the month. Time to cut back on unnecessary expenses.",
    label: "Financial & Legal",
  },
  {
    text: "Explored a new hiking trail over the weekend. Nature never fails to impress!",
    label: "Travel & Leisure",
  },
  {
    text: "Took an online course on web development. Learning new skills is always exciting.",
    label: "Education & Learning",
  },
  {
    text: "Spent the day at the beach with family. Perfect way to unwind.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to discuss estate planning. Important decisions to be made.",
    label: "Financial & Legal",
  },
  {
    text: "Went to see a Broadway musical with friends. The performances were outstanding!",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the gym for a workout session. Feeling sore but accomplished.",
    label: "Health & Medical",
  },
  {
    text: "Attended a networking event for professionals in my industry. Made some valuable connections.",
    label: "Work & Business",
  },
  {
    text: "Watched the latest blockbuster movie at the cinema. Popcorn and entertainment, what more could I ask for?",
    label: "Entertainment & Media",
  },
  {
    text: "Started a new diet plan to improve my health. Fingers crossed for results!",
    label: "Health & Medical",
  },
  {
    text: "Reviewed my insurance policies to ensure adequate coverage. Safety first!",
    label: "Financial & Legal",
  },
  {
    text: "Planning a road trip with friends for the upcoming holiday weekend. Can't wait for the adventure!",
    label: "Travel & Leisure",
  },
  {
    text: "Enrolled in a photography course to pursue my passion. Excited to learn new techniques!",
    label: "Education & Learning",
  },
  {
    text: "Spent the weekend decluttering and organizing my living space. Feels refreshing!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Consulted with a tax accountant to file my annual taxes. Making sure everything is in order.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a live concert by my favorite band. The energy in the crowd was electrifying!",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the doctor for a routine health check-up. All good, just need to watch my cholesterol.",
    label: "Health & Medical",
  },
  {
    text: "Presented a project proposal to my team at work. Excited to see it come to fruition.",
    label: "Work & Business",
  },
  {
    text: "Binged a new series on Netflix over the weekend. The plot twists kept me on the edge of my seat!",
    label: "Entertainment & Media",
  },
  {
    text: "Started a new fitness program at the gym. Determined to reach my fitness goals!",
    label: "Health & Medical",
  },
  {
    text: "Consulted with a financial advisor to plan for retirement. It's never too early to start planning.",
    label: "Financial & Legal",
  },
  {
    text: "Booked a spontaneous weekend getaway to a nearby town. Sometimes you just need a change of scenery!",
    label: "Travel & Leisure",
  },
  {
    text: "Took an online course on graphic design fundamentals. Excited to enhance my skills!",
    label: "Education & Learning",
  },
  {
    text: "Hosted a dinner party for friends at my place. Good food, good company, good times!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to draft a will. Important to plan for the future.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a film festival screening. So many amazing indie films!",
    label: "Entertainment & Media",
  },
  {
    text: "Scheduled a check-up with my primary care physician. Health is wealth!",
    label: "Health & Medical",
  },
  {
    text: "Participated in a team-building workshop at work. Strengthened bonds with colleagues.",
    label: "Work & Business",
  },
  {
    text: "Marathoned a TV series over the weekend. Couldn't stop watching!",
    label: "Entertainment & Media",
  },
  {
    text: "Started a new diet and exercise regimen. Feeling motivated to get healthy!",
    label: "Health & Medical",
  },
  {
    text: "Consulted with a lawyer to update my estate plan. Important to keep it current.",
    label: "Financial & Legal",
  },
  {
    text: "Planned a solo backpacking trip through Europe. Excited for the adventure!",
    label: "Travel & Leisure",
  },
  {
    text: "Took an online course on coding. Learning new skills to advance my career.",
    label: "Education & Learning",
  },
  {
    text: "Organized a picnic in the park with friends. Enjoyed the sunshine and good food!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Finished reading a legal document regarding intellectual property rights. Important information to consider.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a workshop on financial planning strategies. Learning how to manage money effectively.",
    label: "Financial & Legal",
  },
  {
    text: "Visited the doctor for a routine check-up. Health is wealth!",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the latest research paper on artificial intelligence. Fascinating insights into cutting-edge technology.",
    label: "Education & Learning",
  },
  {
    text: "Booked tickets for an upcoming vacation to Hawaii. Excited for some relaxation and adventure!",
    label: "Travel & Leisure",
  },
  {
    text: "Just received my annual performance review at work. Positive feedback and areas for improvement identified.",
    label: "Work & Business",
  },
  {
    text: "Started a new fitness routine at the gym. Determined to get in shape!",
    label: "Health & Medical",
  },
  {
    text: "Attended a legal seminar on environmental regulations. Understanding the impact of laws on business operations.",
    label: "Financial & Legal",
  },
  {
    text: "Visited the dentist for a routine cleaning. Maintaining oral health is important.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed my investment portfolio with my financial advisor. Making adjustments to maximize returns.",
    label: "Financial & Legal",
  },
  {
    text: "Started a blog to share travel experiences and tips. Excited to document my adventures!",
    label: "Travel & Leisure",
  },
  {
    text: "Participated in a charity fundraiser event. Giving back to the community.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to draft a business contract. Ensuring legal protection for all parties involved.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a medical conference on advancements in cancer treatment. Promising developments in the field.",
    label: "Health & Medical",
  },
  {
    text: "Scheduled a meeting with my academic advisor to discuss course selections. Planning for graduation.",
    label: "Education & Learning",
  },
  {
    text: "Booked tickets for a Broadway show next weekend. Looking forward to a night of entertainment!",
    label: "Entertainment & Media",
  },
  {
    text: "Started a new medication regimen prescribed by my doctor. Hoping for positive results.",
    label: "Health & Medical",
  },
  {
    text: "Consulted with a lawyer to create a will and estate plan. Planning for the future.",
    label: "Financial & Legal",
  },
  {
    text: "Planned a weekend getaway to a cozy cabin in the mountains. Excited for some relaxation and nature.",
    label: "Travel & Leisure",
  },
  {
    text: "Enrolled in an online course on digital marketing strategies. Enhancing professional skills.",
    label: "Education & Learning",
  },
  {
    text: "Hosted a movie night with friends. Popcorn, snacks, and great company!",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the gym for a workout session. Working towards fitness goals.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the terms and conditions of a new software license agreement. Understanding usage rights.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a travel photography workshop. Learning new techniques to capture memorable moments.",
    label: "Travel & Leisure",
  },
  {
    text: "Started a new semester at university. Excited for new learning opportunities.",
    label: "Education & Learning",
  },
  {
    text: "Celebrated a milestone anniversary with my partner. Reflecting on years of love and happiness.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to finalize adoption paperwork. Preparing to welcome a new family member.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a concert featuring my favorite band. Music and good vibes all around!",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the doctor for a follow-up appointment. Monitoring progress on treatment plan.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the company's annual financial report. Analyzing performance and projections.",
    label: "Financial & Legal",
  },
  {
    text: "Planned a weekend road trip to explore nearby towns. Adventure awaits!",
    label: "Travel & Leisure",
  },
  {
    text: "Enrolled in a language course to learn French. Bonjour to new opportunities!",
    label: "Education & Learning",
  },
  {
    text: "Hosted a themed costume party for Halloween. Spooky fun with friends!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Consulted with a lawyer to resolve a property dispute. Seeking legal advice for resolution.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a film festival showcasing independent movies. Appreciating cinematic artistry.",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the dentist for a tooth extraction. Taking steps to maintain oral health.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the company's marketing strategy for the upcoming quarter. Planning for growth.",
    label: "Financial & Legal",
  },
  {
    text: "Booked a cruise vacation to the Caribbean. Looking forward to sandy beaches and crystal-clear waters!",
    label: "Travel & Leisure",
  },
  {
    text: "Took an online course on graphic design principles. Exploring creativity in digital media.",
    label: "Education & Learning",
  },
  {
    text: "Organized a potluck dinner with friends. Sharing food and laughter!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to update my business contracts. Ensuring legal compliance and protection.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a live theater performance of Shakespeare's classic play. Immersed in the world of literature.",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the doctor for a flu shot. Protecting against seasonal illness.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the terms of a rental agreement for a vacation property. Planning accommodations for the trip.",
    label: "Travel & Leisure",
  },
  {
    text: "Completed an online course on project management fundamentals. Developing skills for career advancement.",
    label: "Education & Learning",
  },
  {
    text: "Celebrated a family member's graduation from college. Proud of their accomplishments!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to discuss business incorporation. Establishing legal structure for a startup.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a concert featuring a symphony orchestra. Mesmerized by the harmonious melodies.",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the doctor for an annual physical examination. Prioritizing preventive healthcare.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the company's budget for the upcoming fiscal year. Allocating resources strategically.",
    label: "Financial & Legal",
  },
  {
    text: "Booked a weekend getaway to a cozy bed and breakfast. Looking forward to relaxation and pampering!",
    label: "Travel & Leisure",
  },
  {
    text: "Enrolled in an online course on entrepreneurship. Exploring opportunities in business.",
    label: "Education & Learning",
  },
  {
    text: "Organized a barbecue party in the backyard. Grilling, games, and good times with friends!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to update my will and estate plan. Planning for future generations.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a ballet performance at the theater. Captivated by the grace and elegance of the dancers.",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the dentist for a dental cleaning. Maintaining oral hygiene for a healthy smile.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the terms of a loan agreement for a new car purchase. Understanding financial obligations.",
    label: "Financial & Legal",
  },
  {
    text: "Planned a camping trip with friends. Excited for outdoor adventures and stargazing!",
    label: "Travel & Leisure",
  },
  {
    text: "Completed an online course on digital photography techniques. Mastering the art of capturing moments.",
    label: "Education & Learning",
  },
  {
    text: "Hosted a game night with friends. Board games, snacks, and friendly competition!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to update my business contracts. Ensuring legal compliance and protection.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a live theater performance of Shakespeare's classic play. Immersed in the world of literature.",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the doctor for a flu shot. Protecting against seasonal illness.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the terms of a rental agreement for a vacation property. Planning accommodations for the trip.",
    label: "Travel & Leisure",
  },
  {
    text: "Completed an online course on project management fundamentals. Developing skills for career advancement.",
    label: "Education & Learning",
  },
  {
    text: "Celebrated a family member's graduation from college. Proud of their accomplishments!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to discuss business incorporation. Establishing legal structure for a startup.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a concert featuring a symphony orchestra. Mesmerized by the harmonious melodies.",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the doctor for an annual physical examination. Prioritizing preventive healthcare.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the company's budget for the upcoming fiscal year. Allocating resources strategically.",
    label: "Financial & Legal",
  },
  {
    text: "Booked a weekend getaway to a cozy bed and breakfast. Looking forward to relaxation and pampering!",
    label: "Travel & Leisure",
  },
  {
    text: "Enrolled in an online course on entrepreneurship. Exploring opportunities in business.",
    label: "Education & Learning",
  },
  {
    text: "Organized a barbecue party in the backyard. Grilling, games, and good times with friends!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Met with a lawyer to update my will and estate plan. Planning for future generations.",
    label: "Financial & Legal",
  },
  {
    text: "Attended a ballet performance at the theater. Captivated by the grace and elegance of the dancers.",
    label: "Entertainment & Media",
  },
  {
    text: "Visited the dentist for a dental cleaning. Maintaining oral hygiene for a healthy smile.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed the terms of a loan agreement for a new car purchase. Understanding financial obligations.",
    label: "Financial & Legal",
  },
  {
    text: "Planned a camping trip with friends. Excited for outdoor adventures and stargazing!",
    label: "Travel & Leisure",
  },
  {
    text: "Completed an online course on digital photography techniques. Mastering the art of capturing moments.",
    label: "Education & Learning",
  },
  {
    text: "Hosted a game night with friends. Board games, snacks, and friendly competition!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Updated my resume with recent achievements. Ready for new career opportunities.",
    label: "Work & Business",
  },
  {
    text: "Downloaded a recipe book app to try new dishes. Cooking up a storm in the kitchen!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Booked tickets for a virtual reality gaming experience. Ready for an immersive adventure!",
    label: "Entertainment & Media",
  },
  {
    text: "Organized digital photos into albums. Reliving cherished memories.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Checked email for important updates from work. Staying connected even on the go.",
    label: "Work & Business",
  },
  {
    text: "Listened to a podcast on personal development. Always striving to grow.",
    label: "Education & Learning",
  },
  {
    text: "Watched a TED talk on creativity and innovation. Inspired to think outside the box.",
    label: "Education & Learning",
  },
  {
    text: "Updated budget spreadsheet with monthly expenses. Keeping finances on track.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned important documents using a mobile scanner app. Digitizing paperwork for easy access.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Read an e-book on mindfulness meditation. Finding peace in the present moment.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Listened to a motivational audiobook during my commute. Starting the day on a positive note.",
    label: "Education & Learning",
  },
  {
    text: "Edited vacation photos using photo editing software. Enhancing memories captured.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Reviewed the latest market trends in the finance app. Tracking investments for better decisions.",
    label: "Financial & Legal",
  },
  {
    text: "Streamed a documentary on environmental conservation. Educating myself on global issues.",
    label: "Education & Learning",
  },
  {
    text: "Joined an online language exchange platform to practice Spanish. ¡Vamos a hablar español!",
    label: "Education & Learning",
  },
  {
    text: "Drafted a blog post about recent travel experiences. Sharing adventures with the world.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Completed an online course on digital marketing strategies. Expanding professional skills.",
    label: "Education & Learning",
  },
  {
    text: "Scheduled appointments using a calendar app. Managing time effectively.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Researched home improvement ideas on Pinterest. Planning for renovations.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Listened to a playlist of upbeat songs on a music streaming app. Boosting mood and energy.",
    label: "Entertainment & Media",
  },
  {
    text: "Reviewed lecture notes on quantum physics. Preparing for upcoming exams.",
    label: "Education & Learning",
  },
  {
    text: "Set reminders for upcoming deadlines and appointments. Staying organized with technology.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Used a finance tracker app to monitor expenses. Budgeting for financial goals.",
    label: "Financial & Legal",
  },
  {
    text: "Wrote a journal entry reflecting on personal growth. Self-reflection for inner peace.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Listened to a guided meditation podcast before bed. Relaxing the mind and body.",
    label: "Health & Medical",
  },
  {
    text: "Watched a tutorial video on DIY home decor projects. Getting creative with interior design.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Reviewed meeting notes from a business conference. Implementing key takeaways.",
    label: "Work & Business",
  },
  {
    text: "Downloaded a language learning app to brush up on French. Bonjour to new opportunities!",
    label: "Education & Learning",
  },
  {
    text: "Organized digital files into folders for better access. Decluttering digital space.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Watched a webinar on financial planning for retirement. Preparing for the future.",
    label: "Financial & Legal",
  },
  {
    text: "Listened to a true crime podcast during my workout. Entertaining and motivating.",
    label: "Entertainment & Media",
  },
  {
    text: "Researched travel destinations for upcoming vacation plans. Dreaming of new adventures.",
    label: "Travel & Leisure",
  },
  {
    text: "Used a meditation app to practice mindfulness. Cultivating inner peace and clarity.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed recipes on a cooking website for dinner inspiration. Trying new flavors in the kitchen.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Streamed a live concert from my favorite artist. Bringing the concert experience home.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned receipts using a receipt scanning app. Organizing expenses for tax season.",
    label: "Financial & Legal",
  },
  {
    text: "Watched a tutorial video on coding basics. Learning new skills for career growth.",
    label: "Education & Learning",
  },
  {
    text: "Listened to a podcast on personal finance tips. Investing in financial literacy.",
    label: "Financial & Legal",
  },
  {
    text: "Researched DIY skincare recipes on a beauty blog. Pampering skin with natural ingredients.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Used a workout app to track fitness progress. Setting and achieving fitness goals.",
    label: "Health & Medical",
  },
  {
    text: "Reviewed project proposals in preparation for a meeting. Planning for business success.",
    label: "Work & Business",
  },
  {
    text: "Downloaded a productivity app to organize tasks. Maximizing efficiency and productivity.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Streamed a documentary on space exploration. Discovering the wonders of the universe.",
    label: "Education & Learning",
  },
  {
    text: "Listened to a podcast on mindfulness during my commute. Cultivating peace amidst chaos.",
    label: "Health & Medical",
  },
  {
    text: "Researched investment opportunities on financial websites. Building wealth through informed decisions.",
    label: "Financial & Legal",
  },
  {
    text: "Used a language translation app while traveling abroad. Breaking down language barriers.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Reviewed notes from a digital marketing workshop. Implementing strategies for online success.",
    label: "Work & Business",
  },
  {
    text: "Downloaded a fitness tracker app to monitor workouts. Tracking progress towards fitness goals.",
    label: "Health & Medical",
  },
  {
    text: "Streamed a live cooking class on social media. Mastering culinary skills from home.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Researched career opportunities on job search websites. Exploring new paths for professional growth.",
    label: "Work & Business",
  },
  {
    text: "Used a budgeting app to track expenses and savings. Working towards financial goals.",
    label: "Financial & Legal",
  },
  {
    text: "Listened to an audiobook on personal development. Investing in self-improvement.",
    label: "Education & Learning",
  },
  {
    text: "Reviewed travel itineraries for an upcoming vacation. Excited for new adventures!",
    label: "Travel & Leisure",
  },
  {
    text: "Downloaded a recipe app for meal planning. Exploring new culinary delights.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Streamed a webinar on entrepreneurship. Learning from successful business leaders.",
    label: "Work & Business",
  },
  {
    text: "Used a mindfulness app for meditation and relaxation. Finding peace in the present moment.",
    label: "Health & Medical",
  },
  {
    text: "Researched DIY home improvement projects on renovation blogs. Transforming living spaces.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Reviewed coding tutorials on programming websites. Building technical skills for career advancement.",
    label: "Education & Learning",
  },
  {
    text: "Downloaded a language learning app to study Mandarin. Embracing language diversity.",
    label: "Education & Learning",
  },
  {
    text: "Streamed a live performance of a Broadway musical. Bringing theater into the living room.",
    label: "Entertainment & Media",
  },
  {
    text: "Used a habit tracker app to establish daily routines. Cultivating healthy habits for success.",
    label: "Health & Medical",
  },
  {
    text: "Researched investment strategies on finance forums. Planning for financial security.",
    label: "Financial & Legal",
  },
  {
    text: "Reviewed study guides for an upcoming certification exam. Preparing for professional advancement.",
    label: "Education & Learning",
  },
  {
    text: "Downloaded a travel guide app for an upcoming trip. Exploring new destinations with ease.",
    label: "Travel & Leisure",
  },
  {
    text: "Streamed a documentary on environmental conservation efforts. Taking action for a greener planet.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Used a recipe app to try out new dessert recipes. Indulging in sweet treats.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Reviewed project management tutorials on a learning platform. Strengthening leadership skills.",
    label: "Work & Business",
  },
  {
    text: "Downloaded a budget planner app to manage finances. Setting financial goals for the future.",
    label: "Financial & Legal",
  },
  {
    text: "Streamed a live fitness class for a home workout. Staying active and healthy.",
    label: "Health & Medical",
  },
  {
    text: "Researched freelance opportunities on gig economy websites. Exploring flexible work options.",
    label: "Work & Business",
  },
  {
    text: "Used a meditation app for stress relief and relaxation. Finding calm amidst chaos.",
    label: "Health & Medical",
  },
  {
    text: "Scanned a receipt from yesterday's grocery shopping. Tracking expenses for budgeting purposes.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical prescription for allergy medication. Ensuring access to necessary healthcare.",
    label: "Health & Medical",
  },
  {
    text: "Saved a contract agreement for a freelance project. Establishing terms and conditions.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of vaccination records for travel purposes. Ensuring compliance with health regulations.",
    label: "Health & Medical",
  },
  {
    text: "Stored a utility bill for electricity consumption. Monitoring household expenses.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a travel itinerary for an upcoming vacation. Planning logistics for a smooth trip.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a lease agreement for a new apartment. Reviewing rental terms and conditions.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a bank statement for monthly account reconciliation. Tracking financial transactions.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school report card for academic records. Monitoring educational progress.",
    label: "Education & Learning",
  },
  {
    text: "Stored a menu from a favorite restaurant for future orders. Craving delicious cuisine!",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a boarding pass for a flight reservation. Confirming travel arrangements.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a gym membership card for access to fitness facilities. Prioritizing physical health.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of car insurance policy for vehicle coverage details. Ensuring legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a warranty card for a newly purchased electronic device. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a medical lab report for blood test results. Monitoring health indicators.",
    label: "Health & Medical",
  },
  {
    text: "Saved a tax invoice for business expenses. Ensuring accurate accounting records.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a credit card statement for billing verification. Monitoring financial transactions.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a school ID card for student identification. Accessing campus facilities.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Saved a product manual for troubleshooting instructions. Resolving technical issues.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a job offer letter for employment details. Confirming terms of employment.",
    label: "Work & Business",
  },
  {
    text: "Stored a passport copy for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a medical insurance card for healthcare coverage details. Accessing medical services.",
    label: "Health & Medical",
  },
  {
    text: "Saved a rental agreement for housing arrangements. Establishing tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a diploma certificate for educational achievements. Recognizing academic success.",
    label: "Education & Learning",
  },
  {
    text: "Stored a user manual for household appliance instructions. Operating devices correctly.",
    label: "Technical",
  },
  {
    text: "Scanned a pet vaccination record for veterinary appointments. Ensuring pet health.",
    label: "Health & Medical",
  },
  {
    text: "Saved a subscription receipt for digital services. Tracking recurring payments.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal notice for documentation purposes. Resolving legal matters.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a recipe for a favorite dish for cooking inspiration. Exploring culinary creativity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a car registration certificate for vehicle ownership proof. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a diploma transcript for academic records. Documenting educational qualifications.",
    label: "Education & Learning",
  },
  {
    text: "Kept a copy of a rental receipt for proof of payment. Maintaining financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event admission. Enjoying live entertainment.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's note for medical leave authorization. Communicating health status.",
    label: "Health & Medical",
  },
  {
    text: "Saved a business card for contact information. Networking for professional connections.",
    label: "Work & Business",
  },
  {
    text: "Kept a copy of a passport photo for visa applications. Completing travel documentation.",
    label: "Travel & Leisure",
  },
  {
    text: "Stored a pet adoption certificate for ownership proof. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical prescription for medication refills. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Stored a user manual for software installation instructions. Setting up digital tools.",
    label: "Technical",
  },
  {
    text: "Scanned a voter registration card for election participation. Exercising civic duty.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Saved a concert ticket for souvenir purposes. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Kept a copy of a lease agreement for rental property details. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Scanned a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring creditworthiness.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a birth certificate for identification purposes. Establishing identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Stored a manual for electronic device troubleshooting. Resolving technical issues.",
    label: "Technical",
  },
  {
    text: "Scanned a marriage certificate for legal documentation. Establishing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Saved a concert poster for memorabilia. Cherishing musical memories.",
    label: "Entertainment & Media",
  },
  {
    text: "Kept a copy of a utility bill for address verification. Establishing residency.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical appointment card for healthcare scheduling. Managing doctor visits.",
    label: "Health & Medical",
  },
  {
    text: "Scanned a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a marriage license for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Stored a user guide for smartphone features. Maximizing device functionality.",
    label: "Technical",
  },
  {
    text: "Scanned a pet adoption contract for ownership terms. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Kept a copy of a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Scanned a lease agreement for rental property terms. Reviewing tenancy conditions.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Kept a copy of a vehicle registration card for ownership proof. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical test report for doctor consultation. Monitoring health conditions.",
    label: "Health & Medical",
  },
  {
    text: "Scanned a diploma certificate for academic achievements. Recognizing educational success.",
    label: "Education & Learning",
  },
  {
    text: "Saved a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  // Personal & Lifestyle
  {
    text: "Drafting email to Sarah about my birthday party this weekend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Grocery list: Milk, eggs, bread, avocados, spinach.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Reminder: Yoga class at 6pm on Wednesday.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Apartment hunting notes: 2-bedroom in quiet neighborhood, balcony a plus.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Journal entry: Feeling grateful for my friends and family today.",
    label: "Personal & Lifestyle",
  },
  {
    text: "My recipe for Mom's chocolate chip cookies.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Inspirational quotes to get me through tough days.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Wishlist: New headphones, comfy sweater, plant for my living room.",
    label: "Personal & Lifestyle",
  },
  { text: "Notes from my therapy session.", label: "Personal & Lifestyle" },
  { text: "Ideas for redecorating my bedroom.", label: "Personal & Lifestyle" },

  // Work & Business
  {
    text: "Drafting a sales proposal for Acme Corp.",
    label: "Work & Business",
  },
  {
    text: "Meeting notes from project status update.",
    label: "Work & Business",
  },
  {
    text: "Employee performance review for team member.",
    label: "Work & Business",
  },
  {
    text: "Email to client regarding project timeline adjustment.",
    label: "Work & Business",
  },
  { text: "Company quarterly financial report.", label: "Work & Business" },
  {
    text: "Marketing strategy presentation for new product launch.",
    label: "Work & Business",
  },
  { text: "Contract draft for a new vendor.", label: "Work & Business" },
  {
    text: "Notes for my 1:1 meeting with my manager.",
    label: "Work & Business",
  },
  {
    text: "To-do list: Call clients, finish report, schedule team meeting.",
    label: "Work & Business",
  },
  { text: "Industry news and competitor analysis.", label: "Work & Business" },

  // Education & Learning
  {
    text: "Research paper on the history of artificial intelligence.",
    label: "Education & Learning",
  },
  {
    text: "Chemistry lab report on acid-base reactions.",
    label: "Education & Learning",
  },
  {
    text: "Essay outline for my literature class.",
    label: "Education & Learning",
  },
  { text: "Spanish vocabulary flashcards.", label: "Education & Learning" },
  {
    text: "Notes from a lecture on climate change.",
    label: "Education & Learning",
  },
  {
    text: "Outline for a group project presentation.",
    label: "Education & Learning",
  },
  {
    text: "Practice problems for my calculus exam.",
    label: "Education & Learning",
  },
  {
    text: "Annotated bibliography for research.",
    label: "Education & Learning",
  },
  { text: "Book review for my English class.", label: "Education & Learning" },
  {
    text: "Mind map summarizing key concepts in molecular biology.",
    label: "Education & Learning",
  },

  // Financial & Legal
  { text: "Monthly budget spreadsheet.", label: "Financial & Legal" },
  {
    text: "Bank statement showing recent transactions.",
    label: "Financial & Legal",
  },
  { text: "Tax return documents and receipts.", label: "Financial & Legal" },
  { text: "Copy of my lease agreement.", label: "Financial & Legal" },
  { text: "Investment portfolio overview.", label: "Financial & Legal" },
  { text: "Insurance policy documents.", label: "Financial & Legal" },
  { text: "Draft of my will.", label: "Financial & Legal" },
  { text: "Credit card statement.", label: "Financial & Legal" },
  { text: "Loan agreement documents.", label: "Financial & Legal" },
  { text: "Receipts for business expenses.", label: "Financial & Legal" },

  // Health & Medical
  {
    text: "Fitness tracker data (steps, heart rate, sleep).",
    label: "Health & Medical",
  },
  { text: "Food diary and calorie log.", label: "Health & Medical" },
  { text: "Medication list and dosage schedule.", label: "Health & Medical" },
  {
    text: "Doctor's appointment notes & follow-up instructions.",
    label: "Health & Medical",
  },
  {
    text: "Research on a specific medical condition.",
    label: "Health & Medical",
  },
  { text: "Symptom tracker.", label: "Health & Medical" },
  { text: "Mental health self-assessment results.", label: "Health & Medical" },
  { text: "Emergency contact information.", label: "Health & Medical" },
  { text: "Vaccination records.", label: "Health & Medical" },
  {
    text: "Blood pressure and blood sugar readings log.",
    label: "Health & Medical",
  },

  // Travel & Leisure
  {
    text: "Travel itinerary with flight and hotel bookings.",
    label: "Travel & Leisure",
  },
  { text: "Packing list for an upcoming trip.", label: "Travel & Leisure" },
  {
    text: "Restaurant recommendations for a vacation destination.",
    label: "Travel & Leisure",
  },
  { text: "List of tourist attractions to visit.", label: "Travel & Leisure" },
  { text: "Travel photos and videos.", label: "Travel & Leisure" },
  { text: "Travel journal.", label: "Travel & Leisure" },
  { text: "Foreign language phrasebook.", label: "Travel & Leisure" },
  { text: "Currency exchange calculations.", label: "Travel & Leisure" },
  { text: "Bucket list of places to travel.", label: "Travel & Leisure" },
  {
    text: "Notes on cultural etiquette for different countries.",
    label: "Travel & Leisure",
  },

  // Entertainment & Media
  { text: "Playlist of favorite songs.", label: "Entertainment & Media" },
  { text: "Movie watchlist.", label: "Entertainment & Media" },
  { text: "Reviews of books I've read.", label: "Entertainment & Media" },
  { text: "List of podcasts I subscribe to.", label: "Entertainment & Media" },
  { text: "Game scores and progress.", label: "Entertainment & Media" },
  {
    text: "Collection of funny memes or videos.",
    label: "Entertainment & Media",
  },
  { text: "Fanfiction or creative writing.", label: "Entertainment & Media" },
  { text: "Digital artwork or sketches.", label: "Entertainment & Media" },
  {
    text: "Wishlist of movies or TV shows to watch.",
    label: "Entertainment & Media",
  },
  {
    text: "List of actors or musicians I follow.",
    label: "Entertainment & Media",
  },

  // Utilities & Miscellaneous
  {
    text: "Home utility bills (electricity, gas, water).",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Vehicle maintenance records and service schedule.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "To-do list for errands and chores.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Passwords and login information (stored securely).",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Contact list for friends, family, colleagues.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Shopping lists for various needs.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Recipes or cooking instructions.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Home improvement project plans.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Gift ideas for birthdays and holidays.",
    label: "Utilities & Miscellaneous",
  },
  { text: "Random notes and ideas.", label: "Utilities & Miscellaneous" },
  // Personal & Lifestyle
  {
    text: "Drafting a thank you note for a recent gift.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Itinerary for a weekend getaway with friends.",
    label: "Personal & Lifestyle",
  },
  { text: "Meal planning ideas for the week.", label: "Personal & Lifestyle" },
  {
    text: "Notes on home organization projects.",
    label: "Personal & Lifestyle",
  },
  { text: "Gratitude list.", label: "Personal & Lifestyle" },
  {
    text: "Instructions on how to make a favorite cocktail.",
    label: "Personal & Lifestyle",
  },
  {
    text: "A draft of a letter to an old friend.",
    label: "Personal & Lifestyle",
  },
  { text: "Ideas for a themed party.", label: "Personal & Lifestyle" },
  {
    text: "Researching charities to donate to.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Birthday or holiday card message drafts",
    label: "Personal & Lifestyle",
  },

  // Work & Business
  { text: "Project timeline and task breakdown.", label: "Work & Business" },
  { text: "Sales performance data and targets.", label: "Work & Business" },
  { text: "Website analytics report.", label: "Work & Business" },
  { text: "Client onboarding presentation.", label: "Work & Business" },
  { text: "Market research findings.", label: "Work & Business" },
  { text: "Budget proposal for a new initiative.", label: "Work & Business" },
  {
    text: "Meeting agenda for an upcoming brainstorming session.",
    label: "Work & Business",
  },
  {
    text: "Email templates for common customer inquiries.",
    label: "Work & Business",
  },
  {
    text: "Notes from an industry conference or webinar.",
    label: "Work & Business",
  },
  { text: "Professional development goals.", label: "Work & Business" },

  // Education & Learning
  { text: "Flashcards for history exam.", label: "Education & Learning" },
  {
    text: "Literature analysis for a classic novel.",
    label: "Education & Learning",
  },
  { text: "Mathematical formulas cheat sheet.", label: "Education & Learning" },
  { text: "Notes from a documentary.", label: "Education & Learning" },
  {
    text: "Scientific experiment procedure and hypothesis.",
    label: "Education & Learning",
  },
  {
    text: "Programming code snippets and examples.",
    label: "Education & Learning",
  },
  { text: "Foreign language grammar notes.", label: "Education & Learning" },
  { text: "Timeline of historical events.", label: "Education & Learning" },
  { text: "Draft of a persuasive essay.", label: "Education & Learning" },
  { text: "Sources for a research paper.", label: "Education & Learning" },

  // Financial & Legal
  { text: "Savings goal tracker.", label: "Financial & Legal" },
  {
    text: "List of recurring bills and subscriptions.",
    label: "Financial & Legal",
  },
  {
    text: "Comparison of different insurance plans.",
    label: "Financial & Legal",
  },
  { text: "Investment research notes.", label: "Financial & Legal" },
  { text: "Retirement planning calculations.", label: "Financial & Legal" },
  { text: "Notes on tax deductions or credits.", label: "Financial & Legal" },
  { text: "Power of attorney document.", label: "Financial & Legal" },
  { text: "Receipts for charitable donations.", label: "Financial & Legal" },
  {
    text: "Warranty information for appliances or electronics.",
    label: "Financial & Legal",
  },
  {
    text: "Contract for freelance work or services.",
    label: "Financial & Legal",
  },

  // Health & Medical
  { text: "Mindfulness meditation script.", label: "Health & Medical" },
  {
    text: "List of questions to ask my doctor at my next appointment.",
    label: "Health & Medical",
  },
  { text: "Log of allergy symptoms.", label: "Health & Medical" },
  { text: "Workout routine and exercise plan.", label: "Health & Medical" },
  { text: "Healthy recipe ideas.", label: "Health & Medical" },
  {
    text: "Comparison of different healthcare providers.",
    label: "Health & Medical",
  },
  { text: "Period or menstrual cycle tracker.", label: "Health & Medical" },
  {
    text: "Resources for managing a chronic condition.",
    label: "Health & Medical",
  },
  { text: "Sleep log and analysis.", label: "Health & Medical" },
  { text: "List of supplements and their uses.", label: "Health & Medical" },

  // Travel & Leisure
  { text: "Detailed budget for a trip.", label: "Travel & Leisure" },
  { text: "Reviews of hotels or accommodations.", label: "Travel & Leisure" },
  { text: "Travel blog post drafts.", label: "Travel & Leisure" },
  {
    text: "Language learning resources for an upcoming trip.",
    label: "Travel & Leisure",
  },
  {
    text: "List of local dishes to try when traveling.",
    label: "Travel & Leisure",
  },
  { text: "Ideas for souvenirs to bring back.", label: "Travel & Leisure" },
  { text: "Outdoor adventure activity planning.", label: "Travel & Leisure" },
  {
    text: "Packing checklist tailored to a specific trip.",
    label: "Travel & Leisure",
  },
  {
    text: "List of must-see museums or cultural sites.",
    label: "Travel & Leisure",
  },
  { text: "Flight or train ticket confirmations.", label: "Travel & Leisure" },

  // Entertainment & Media
  {
    text: "Quotes from a favorite movie or TV show.",
    label: "Entertainment & Media",
  },
  {
    text: "Video game walkthrough or cheat codes.",
    label: "Entertainment & Media",
  },
  {
    text: "List of recommended books in a specific genre.",
    label: "Entertainment & Media",
  },
  {
    text: "Ideas for a creative project (painting, writing, etc.).",
    label: "Entertainment & Media",
  },
  { text: "Concert ticket stubs or wishlist.", label: "Entertainment & Media" },
  {
    text: "Online course notes on a hobby or interest.",
    label: "Entertainment & Media",
  },
  {
    text: "Sports team statistics and analysis.",
    label: "Entertainment & Media",
  },
  {
    text: "Character sketches or plot outlines for a story.",
    label: "Entertainment & Media",
  },
  { text: "Wishlist of board games to try.", label: "Entertainment & Media" },
  { text: "Reviews of restaurants or bars.", label: "Entertainment & Media" },

  // Utilities & Miscellaneous
  {
    text: "Home inventory list (for insurance purposes).",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Important dates and reminders (birthdays, anniversaries).",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Troubleshooting notes for common household problems.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Website or app login information.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Pet care instructions & vet records.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Gardening notes and plant care schedules.",
    label: "Utilities & Miscellaneous",
  },
  { text: "DIY project instructions.", label: "Utilities & Miscellaneous" },
  {
    text: "Notes on local services (plumbers, electricians, etc.).",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Frequently used phone numbers and addresses.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Random facts or trivia I've learned.",
    label: "Utilities & Miscellaneous",
  },
  // Personal & Lifestyle
  {
    text: "A draft of an online dating profile.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Notes on redecorating plans for a specific room.",
    label: "Personal & Lifestyle",
  },
  { text: "Dream journal entries.", label: "Personal & Lifestyle" },
  {
    text: "Astrology chart or horoscope readings.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Ideas for a self-care routine or relaxing activities.",
    label: "Personal & Lifestyle",
  },
  {
    text: "A collaborative playlist with friends or family.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Fashion inspiration or outfit ideas.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Photos of sentimental objects or keepsakes.",
    label: "Personal & Lifestyle",
  },
  { text: "A list of goals or resolutions.", label: "Personal & Lifestyle" },
  {
    text: "Document outlining my pet's favorite things.",
    label: "Personal & Lifestyle",
  },

  // Work & Business
  { text: "Notes from a networking event.", label: "Work & Business" },
  { text: "Professional resume or CV.", label: "Work & Business" },
  {
    text: "Script for a presentation or sales pitch.",
    label: "Work & Business",
  },
  {
    text: "Ideas for improving workflow or processes.",
    label: "Work & Business",
  },
  { text: "Customer feedback or testimonials.", label: "Work & Business" },
  { text: "SWOT analysis of a competitor", label: "Work & Business" },
  {
    text: "Log of billable hours for freelance work.",
    label: "Work & Business",
  },
  { text: "Website or app design mockups.", label: "Work & Business" },
  {
    text: "List of potential mentors or contacts in my field.",
    label: "Work & Business",
  },
  {
    text: "Job search notes and applications tracker.",
    label: "Work & Business",
  },

  // Education & Learning
  {
    text: "Lecture slides or presentation materials.",
    label: "Education & Learning",
  },
  { text: "Study guide for an upcoming exam.", label: "Education & Learning" },
  {
    text: "Glossary of terms for a specific subject.",
    label: "Education & Learning",
  },
  { text: "Research notes for a term paper.", label: "Education & Learning" },
  {
    text: "Inspirational figures or role models in my field.",
    label: "Education & Learning",
  },
  {
    text: "Online course certificates or transcripts.",
    label: "Education & Learning",
  },
  {
    text: "Foreign language practice dialogues.",
    label: "Education & Learning",
  },
  {
    text: "Questions to discuss with a professor or tutor.",
    label: "Education & Learning",
  },
  {
    text: "Educational podcast episode summaries.",
    label: "Education & Learning",
  },
  { text: "Project ideas or thesis proposals.", label: "Education & Learning" },

  // Financial & Legal
  { text: "Debt repayment plan.", label: "Financial & Legal" },
  { text: "Pay stubs or proof of income.", label: "Financial & Legal" },
  { text: "Comparison of credit card offers.", label: "Financial & Legal" },
  {
    text: "Notes on negotiating a salary or raise.",
    label: "Financial & Legal",
  },
  {
    text: "Rental car reservation and insurance information.",
    label: "Financial & Legal",
  },
  {
    text: "List of charitable organizations I support.",
    label: "Financial & Legal",
  },
  {
    text: "Documentation of a car accident or insurance claim.",
    label: "Financial & Legal",
  },
  {
    text: "Living will or advance healthcare directive.",
    label: "Financial & Legal",
  },
  { text: "Receipts for major purchases. ", label: "Financial & Legal" },
  { text: "Instructions for filing taxes.", label: "Financial & Legal" },

  // Health & Medical
  {
    text: "Progress photos or measurements for a fitness goal.",
    label: "Health & Medical",
  },
  {
    text: "List of medications with side effects noted.",
    label: "Health & Medical",
  },
  {
    text: "Before-and-after photos of a skin treatment.",
    label: "Health & Medical",
  },
  {
    text: "Results from lab tests or medical scans.",
    label: "Health & Medical",
  },
  {
    text: "Resources on a specific mental health topic.",
    label: "Health & Medical",
  },
  {
    text: "Questions to ask about a surgical procedure.",
    label: "Health & Medical",
  },
  { text: "Log of migraine triggers.", label: "Health & Medical" },
  {
    text: "Information on alternative therapies or holistic health.",
    label: "Health & Medical",
  },
  { text: "Postpartum recovery plan or resources.", label: "Health & Medical" },
  {
    text: "Pregnancy tracking or ovulation calendar.",
    label: "Health & Medical",
  },

  // Travel & Leisure
  { text: "Photos or videos from past trips.", label: "Travel & Leisure" },
  { text: "Offline maps for an area I'm visiting.", label: "Travel & Leisure" },
  { text: "Bucket list travel destinations.", label: "Travel & Leisure" },
  { text: "Virtual tours of museums or landmarks.", label: "Travel & Leisure" },
  { text: "Camping gear checklist.", label: "Travel & Leisure" },
  { text: "Foreign currency converter app notes.", label: "Travel & Leisure" },
  {
    text: "Ideas for a staycation or local activities.",
    label: "Travel & Leisure",
  },
  { text: "Road trip playlist or audiobooks.", label: "Travel & Leisure" },
  {
    text: "Theme park maps and wait time information.",
    label: "Travel & Leisure",
  },
  {
    text: "Documentation of passport or visa information.",
    label: "Travel & Leisure",
  },

  // Entertainment & Media
  { text: "Fan art or digital drawings.", label: "Entertainment & Media" },
  {
    text: "Spotify playlists organized by mood or activity.",
    label: "Entertainment & Media",
  },
  { text: "Sports statistics and analysis.", label: "Entertainment & Media" },
  {
    text: "Tickets for concerts or sporting events.",
    label: "Entertainment & Media",
  },
  { text: "Collection of favorite webcomics.", label: "Entertainment & Media" },
  {
    text: "Dance choreography notes or videos.",
    label: "Entertainment & Media",
  },
  { text: "Wishlist of video games to buy.", label: "Entertainment & Media" },
  {
    text: "Screenshots of funny online conversations.",
    label: "Entertainment & Media",
  },
  {
    text: "Photos of cosplaying outfits or conventions.",
    label: "Entertainment & Media",
  },

  // Utilities & Miscellaneous
  {
    text: "Manuals for appliances or electronics.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Photos of my home for renovation ideas.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "QR codes for coupons or loyalty programs.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Emergency preparedness checklist.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Screenshots of interesting online articles to read later.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Wifi network names and passwords.",
    label: "Utilities & Miscellaneous",
  },
  { text: "Voice memos or recordings.", label: "Utilities & Miscellaneous" },
  {
    text: "Document outlining my family tree.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Volunteer opportunities in my community.",
    label: "Utilities & Miscellaneous",
  },
  { text: "E-books or audiobooks.", label: "Utilities & Miscellaneous" },
  // Personal & Lifestyle
  { text: "A draft of a resignation letter.", label: "Personal & Lifestyle" },
  { text: "Mood tracker entries.", label: "Personal & Lifestyle" },
  { text: "Home workout video tutorials.", label: "Personal & Lifestyle" },
  {
    text: "Wedding planning checklist or guest list.",
    label: "Personal & Lifestyle",
  },
  { text: "Design inspiration for a tattoo.", label: "Personal & Lifestyle" },
  {
    text: "Adoption application forms or information.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Quotes that resonate with my values.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Photos of plants I want to buy for my house.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Recordings of myself singing or playing an instrument.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Notes documenting a significant life event.",
    label: "Personal & Lifestyle",
  },

  // Work & Business
  { text: "Templates for invoices or contracts.", label: "Work & Business" },
  { text: "Log of job search activities.", label: "Work & Business" },
  { text: "Elevator pitch for my business idea.", label: "Work & Business" },
  { text: "Recordings of important work meetings.", label: "Work & Business" },
  {
    text: "Positive feedback or testimonials from clients.",
    label: "Work & Business",
  },
  {
    text: "Performance improvement plan (personal or for an employee).",
    label: "Work & Business",
  },
  {
    text: "List of influential people to follow online in my industry.",
    label: "Work & Business",
  },
  { text: "Documentation of a workplace conflict.", label: "Work & Business" },
  {
    text: "Ideas for side hustles or passive income.",
    label: "Work & Business",
  },
  { text: "Professional portfolio of my work.", label: "Work & Business" },

  // Education & Learning
  {
    text: "Recordings of lectures or online lessons.",
    label: "Education & Learning",
  },
  { text: "Notes from a book club discussion.", label: "Education & Learning" },
  {
    text: "Practice problems and solutions for a difficult subject.",
    label: "Education & Learning",
  },
  {
    text: "Scholarship or grant application materials.",
    label: "Education & Learning",
  },
  {
    text: "List of online resources for continued learning.",
    label: "Education & Learning",
  },
  {
    text: "Questions to discuss with a mentor or advisor.",
    label: "Education & Learning",
  },
  {
    text: "Timeline of important deadlines for a course.",
    label: "Education & Learning",
  },
  {
    text: "Mind maps connecting concepts within a subject.",
    label: "Education & Learning",
  },
  { text: "Flashcards for memorization.", label: "Education & Learning" },
  {
    text: "Project proposals or research directions.",
    label: "Education & Learning",
  },

  // Financial & Legal
  {
    text: "Photos or documentation of valuables for insurance.",
    label: "Financial & Legal",
  },
  { text: "Spreadsheet tracking my net worth.", label: "Financial & Legal" },
  { text: "Donation receipts for tax purposes.", label: "Financial & Legal" },
  { text: "Loan payoff calculations.", label: "Financial & Legal" },
  {
    text: "Information on refinancing options (mortgage, loans).",
    label: "Financial & Legal",
  },
  {
    text: "Comparison of different bank accounts or services.",
    label: "Financial & Legal",
  },
  { text: "Notarized documents or affidavits.", label: "Financial & Legal" },
  {
    text: "Record of conversations with financial advisors.",
    label: "Financial & Legal",
  },
  {
    text: "Investment strategy notes and research.",
    label: "Financial & Legal",
  },
  {
    text: "Important legal case summaries (for law students).",
    label: "Financial & Legal",
  },

  // Health & Medical
  {
    text: "Before-and-after photos of a weight loss journey.",
    label: "Health & Medical",
  },
  {
    text: "List of food sensitivities or allergies.",
    label: "Health & Medical",
  },
  { text: "Questions to ask a nutritionist.", label: "Health & Medical" },
  { text: "Detailed sleep log.", label: "Health & Medical" },
  {
    text: "Information on managing a chronic condition.",
    label: "Health & Medical",
  },
  { text: "List of resources for new parents.", label: "Health & Medical" },
  { text: "Notes on physical therapy exercises.", label: "Health & Medical" },
  {
    text: "Alternative therapy methods and research.",
    label: "Health & Medical",
  },
  { text: "Vaccination records for my pet.", label: "Health & Medical" },
  { text: "Results of genetic testing.", label: "Health & Medical" },

  // Travel & Leisure
  { text: "Virtual reality tour of a destination", label: "Travel & Leisure" },
  {
    text: "List of quirky or unusual roadside attractions.",
    label: "Travel & Leisure",
  },
  {
    text: "Photos of street art or murals from a trip.",
    label: "Travel & Leisure",
  },
  {
    text: "Packing list for a specific type of trip (hiking, beach, etc.).",
    label: "Travel & Leisure",
  },
  { text: "Foreign language audio lessons.", label: "Travel & Leisure" },
  {
    text: "List of local food specialties to try when traveling.",
    label: "Travel & Leisure",
  },
  { text: "Offline map data of a hiking trail.", label: "Travel & Leisure" },
  {
    text: "Blog posts documenting my travel adventures.",
    label: "Travel & Leisure",
  },
  {
    text: "Photos collected for a travel-themed scrapbook.",
    label: "Travel & Leisure",
  },
  {
    text: "Information on pet-friendly hotels or travel options.",
    label: "Travel & Leisure",
  },

  // Entertainment & Media
  { text: "Drafts of song lyrics or poetry.", label: "Entertainment & Media" },
  { text: "Reviews of podcasts I listen to.", label: "Entertainment & Media" },
  {
    text: "Photos or videos from concerts or events.",
    label: "Entertainment & Media",
  },
  { text: "Fanfiction I'm writing.", label: "Entertainment & Media" },
  {
    text: "Dance routines or choreography notes.",
    label: "Entertainment & Media",
  },
  { text: "Doodles or sketches.", label: "Entertainment & Media" },
  {
    text: "Recipes from cooking shows or videos.",
    label: "Entertainment & Media",
  },
  {
    text: "List of true crime podcasts or documentaries.",
    label: "Entertainment & Media",
  },
  {
    text: "Collection of inspiring home decor photos.",
    label: "Entertainment & Media",
  },
  {
    text: "Notes on my favorite board games or card games.",
    label: "Entertainment & Media",
  },

  // Utilities & Miscellaneous
  {
    text: "Digital copy of my driver's license or ID.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Barcode scans of items to price compare later.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Screenshots of gift ideas for friends and family.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Notes for when I give a public speech.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Rewards program point balances.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "How-to videos or instructions for fixing things.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Measurements for furniture to check if it fits in a room.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Documentation of items loaned or borrowed.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Screenshots of inspiring quotes or artwork.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Ideas for random acts of kindness.",
    label: "Utilities & Miscellaneous",
  },
  // Personal & Lifestyle
  {
    text: "A detailed house-cleaning checklist.",
    label: "Personal & Lifestyle",
  },
  {
    text: "A draft of a letter to reconnect with a long-lost friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Notes documenting my family ancestry and genealogy.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Vision board with images representing my goals.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Recipes passed down through my family.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned copies of old photographs or keepsakes.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Bucket list ideas for exciting experiences.",
    label: "Personal & Lifestyle",
  },
  {
    text: "List of skills or hobbies I want to learn.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Notes from a self-improvement seminar or workshop.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Dream home design plans or inspiration.",
    label: "Personal & Lifestyle",
  },

  // Work & Business
  {
    text: "Project risk assessment and mitigation plan.",
    label: "Work & Business",
  },
  { text: "Social media content calendar.", label: "Work & Business" },
  {
    text: "Employee onboarding or training materials.",
    label: "Work & Business",
  },
  {
    text: "Standard operating procedures (SOPs) for a business.",
    label: "Work & Business",
  },
  {
    text: "A long-term strategic plan for my company.",
    label: "Work & Business",
  },
  {
    text: "Notes on competitor products or strategies.",
    label: "Work & Business",
  },
  { text: "Slide deck for an investor pitch.", label: "Work & Business" },
  {
    text: "Documentation of software bugs and fixes.",
    label: "Work & Business",
  },
  {
    text: "Templates for recurring reports or updates.",
    label: "Work & Business",
  },
  {
    text: "Design mockups for a website or mobile app.",
    label: "Work & Business",
  },

  // Education & Learning
  {
    text: "Class syllabus for a course I'm teaching.",
    label: "Education & Learning",
  },
  {
    text: "Lesson plans for a specific subject.",
    label: "Education & Learning",
  },
  {
    text: "Annotated bibliography for a research project.",
    label: "Education & Learning",
  },
  {
    text: "My answers to a practice test or study guide.",
    label: "Education & Learning",
  },
  {
    text: "Presentation slides for a group project.",
    label: "Education & Learning",
  },
  {
    text: "Detailed notes from a documentary film.",
    label: "Education & Learning",
  },
  {
    text: "A recording of my own lecture on a specialized topic. ",
    label: "Education & Learning",
  },
  { text: "Experimental data and lab report.", label: "Education & Learning" },
  {
    text: "List of online courses or MOOCs I'm interested in.",
    label: "Education & Learning",
  },
  { text: "Educational games or simulations.", label: "Education & Learning" },

  // Financial & Legal
  {
    text: "Home maintenance records and receipts.",
    label: "Financial & Legal",
  },
  {
    text: "Spreadsheet tracking charitable donations.",
    label: "Financial & Legal",
  },
  { text: "A copy of my will or estate plan.", label: "Financial & Legal" },
  { text: "Notes on tax preparation.", label: "Financial & Legal" },
  { text: "A log of small business expenses.", label: "Financial & Legal" },
  {
    text: "Documentation of important deadlines (tax, bill payment).",
    label: "Financial & Legal",
  },
  { text: "Power of attorney document.", label: "Financial & Legal" },
  {
    text: "Scanned copies of birth certificates or passports.",
    label: "Financial & Legal",
  },
  {
    text: "Insurance policy documents (home, auto, health, etc.).",
    label: "Financial & Legal",
  },
  {
    text: "A log of investments and their performance.",
    label: "Financial & Legal",
  },

  // Health & Medical
  {
    text: "Scanned copies of medical records or test results.",
    label: "Health & Medical",
  },
  { text: "Exercise log and workout routines.", label: "Health & Medical" },
  {
    text: "List of alternative or complementary therapies explored.",
    label: "Health & Medical",
  },
  {
    text: "Detailed symptom tracker for a medical condition.",
    label: "Health & Medical",
  },
  {
    text: "Emergency contact information and medical directives.",
    label: "Health & Medical",
  },
  {
    text: "Questions to ask when choosing a healthcare provider.",
    label: "Health & Medical",
  },
  {
    text: "Information on a specific medical procedure.",
    label: "Health & Medical",
  },
  {
    text: "Mental health self-care strategies and resources.",
    label: "Health & Medical",
  },
  { text: "Period or fertility tracking.", label: "Health & Medical" },
  {
    text: "Log of vaccinations for myself or children.",
    label: "Health & Medical",
  },

  // Travel & Leisure
  { text: "Flight and hotel confirmation emails.", label: "Travel & Leisure" },
  {
    text: "Offline travel guides for a destination.",
    label: "Travel & Leisure",
  },
  { text: "Reviews of hotels or vacation rentals.", label: "Travel & Leisure" },
  { text: "Travel budget spreadsheet.", label: "Travel & Leisure" },
  { text: "Scanned copy of my passport or visa.", label: "Travel & Leisure" },
  {
    text: "Detailed itinerary and travel schedule.",
    label: "Travel & Leisure",
  },
  {
    text: "List of local dishes to try when traveling.",
    label: "Travel & Leisure",
  },
  { text: "Travel journal or blog entries.", label: "Travel & Leisure" },
  {
    text: "Foreign language phrasebook or translation notes.",
    label: "Travel & Leisure",
  },
  {
    text: "List of museums or cultural sites to visit.",
    label: "Travel & Leisure",
  },

  // Entertainment & Media
  {
    text: "Scripts for short films or videos.",
    label: "Entertainment & Media",
  },
  {
    text: "List of my all-time favorite books.",
    label: "Entertainment & Media",
  },
  { text: "Character designs or concept art.", label: "Entertainment & Media" },
  {
    text: "Video game walkthroughs or cheat codes.",
    label: "Entertainment & Media",
  },
  { text: "My personal music playlists.", label: "Entertainment & Media" },
  {
    text: "A collection of movie trailers I enjoyed.",
    label: "Entertainment & Media",
  },
  {
    text: "Dance choreography notes or videos.",
    label: "Entertainment & Media",
  },
  {
    text: "Reviews of restaurants or bars I've visited.",
    label: "Entertainment & Media",
  },
  {
    text: "My ratings and reviews of TV shows or movies.",
    label: "Entertainment & Media",
  },
  { text: "Costume designs or cosplay ideas.", label: "Entertainment & Media" },

  // Utilities & Miscellaneous
  {
    text: "Home inventory list with photos and valuations.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "A list of emergency contacts and procedures.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Manuals or warranty information for appliances.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Paint swatches or color samples for a room.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Troubleshooting notes for common tech issues.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Digital copies of certificates or rewards.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Gift wishlists shared with family or friends.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "List of local repair services (plumber, electrician).",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Scanned copies of vehicle registration or title.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Recipes for cleaning products or DIY solutions.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Saved a pet vaccination certificate for veterinary records. Maintaining pet health history.",
    label: "Health & Medical",
  },
  {
    text: "Scanned a lease agreement for rental property documentation. Understanding rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school report card for academic progress. Monitoring educational performance.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a medical insurance card for healthcare access. Ensuring medical coverage.",
    label: "Health & Medical",
  },
  {
    text: "Saved a bank transaction receipt for financial records. Tracking banking transactions.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a diploma certificate for educational achievements. Recognizing academic success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a medical prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Saved a utility bill for household expenses. Monitoring monthly expenditures.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a school identification card for student verification. Accessing campus facilities.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert poster for event memorabilia. Cherishing live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a medical lab report for health monitoring. Tracking medical conditions.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Scanned a vehicle registration card for ownership verification. Maintaining legal compliance.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a credit score report for financial assessment. Monitoring credit history.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a marriage certificate for legal documentation. Formalizing marital status.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a property deed for real estate ownership. Establishing property rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a medical appointment card for healthcare scheduling. Managing doctor appointments.",
    label: "Health & Medical",
  },
  {
    text: "Stored a warranty card for product warranty details. Protecting consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a legal will for estate planning. Designating beneficiaries and assets.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a tax receipt for tax filing purposes. Ensuring accurate tax returns.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event souvenir. Commemorating memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a utility bill for address verification. Establishing residency status.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a school diploma for graduation documentation. Celebrating academic achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a rental agreement for property rental documentation. Reviewing lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a doctor's prescription for medication refills. Managing ongoing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user guide for software installation instructions. Setting up digital applications.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a pet adoption certificate for ownership verification. Welcoming a new furry friend.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a concert ticket for event attendance. Enjoying live music performances.",
    label: "Entertainment & Media",
  },
  {
    text: "Saved a medical bill for insurance reimbursement. Managing healthcare expenses.",
    label: "Health & Medical",
  },
  {
    text: "Stored a user manual for appliance operation. Understanding device functions.",
    label: "Technical",
  },
  {
    text: "Kept a copy of a rental agreement for lease documentation. Reviewing rental terms.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a passport copy for travel identification. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a vehicle insurance card for coverage details. Ensuring automobile protection.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a medical report for specialist consultation. Seeking healthcare advice.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a diploma certificate for academic recognition. Celebrating educational success.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a utility bill for monthly expense tracking. Managing household finances.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a concert ticket for event memorabilia. Commemorating live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Scanned a doctor's prescription for medication details. Managing healthcare needs.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a passport for travel documentation. Ensuring international travel readiness.",
    label: "Travel & Leisure",
  },
  {
    text: "Saved a credit card statement for expense tracking. Managing personal finances.",
    label: "Financial & Legal",
  },
  {
    text: "Stored a user manual for electronic device operation. Understanding device features.",
    label: "Technical",
  },
  {
    text: "Scanned a tax document for financial reporting. Preparing for tax filing.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a warranty card for product protection. Ensuring consumer rights.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a concert ticket for event attendance. Enjoying live music experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a lease agreement for housing arrangements. Understanding tenancy terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job offer letter for employment confirmation. Reviewing job terms.",
    label: "Work & Business",
  },
  {
    text: "Scanned a rental receipt for rent payment verification. Ensuring financial records.",
    label: "Financial & Legal",
  },
  // Personal & Lifestyle
  {
    text: "A list of my favorite local coffee shops or cafes.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Notes on decluttering my home or wardrobe.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Volunteer opportunities or causes I care about.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Photos or videos from my wedding or a special anniversary.",
    label: "Personal & Lifestyle",
  },
  {
    text: "A draft of a letter of recommendation for a friend or colleague. ",
    label: "Personal & Lifestyle",
  },
  {
    text: "Handwritten letters or cards with sentimental value.",
    label: "Personal & Lifestyle",
  },
  { text: "Hair or makeup inspiration photos.", label: "Personal & Lifestyle" },
  {
    text: "Notes on planning a surprise event for someone.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Readings or poems for a wedding or special occasion.",
    label: "Personal & Lifestyle",
  },
  {
    text: "A log of my child's developmental milestones.",
    label: "Personal & Lifestyle",
  },

  // Work & Business
  {
    text: "Client communication logs (emails, call notes).",
    label: "Work & Business",
  },
  {
    text: "Business card scans or contact information.",
    label: "Work & Business",
  },
  { text: "A website wireframe or mockup.", label: "Work & Business" },
  {
    text: "Notes from a leadership or professional development book. ",
    label: "Work & Business",
  },
  {
    text: "Non-disclosure agreements (NDAs) or contracts.",
    label: "Work & Business",
  },
  {
    text: "A/B testing results for marketing campaigns.",
    label: "Work & Business",
  },
  {
    text: "Documentation of code changes or version history.",
    label: "Work & Business",
  },
  {
    text: "Job interview notes and questions to ask.",
    label: "Work & Business",
  },
  {
    text: "Industry-specific certifications or licenses.",
    label: "Work & Business",
  },
  {
    text: "Long-term career goals or a 5-year plan.",
    label: "Work & Business",
  },

  // Education & Learning
  {
    text: "Thesis proposal or dissertation outline.",
    label: "Education & Learning",
  },
  {
    text: "Study schedules or exam timetables.",
    label: "Education & Learning",
  },
  {
    text: "A draft of a scholarship application essay.",
    label: "Education & Learning",
  },
  {
    text: "Scanned copies of old school report cards.",
    label: "Education & Learning",
  },
  {
    text: "Educational podcasts or audiobooks.",
    label: "Education & Learning",
  },
  {
    text: "Research on potential graduate programs.",
    label: "Education & Learning",
  },
  {
    text: "Digital flashcards for a specific subject.",
    label: "Education & Learning",
  },
  {
    text: "Questions to ask a professor during office hours.",
    label: "Education & Learning",
  },
  {
    text: "Feedback and grades on assignments or exams.",
    label: "Education & Learning",
  },
  {
    text: "Notes from an educational conference or seminar.",
    label: "Education & Learning",
  },

  // Financial & Legal
  {
    text: "Spreadsheet tracking my retirement savings.",
    label: "Financial & Legal",
  },
  {
    text: "Comparison of different mortgage rates or lenders.",
    label: "Financial & Legal",
  },
  {
    text: "Receipts for big-ticket purchases (appliances, electronics).",
    label: "Financial & Legal",
  },
  {
    text: "Information on student loan repayment options.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned copies of vehicle registration and insurance.",
    label: "Financial & Legal",
  },
  {
    text: "Documentation of a loan or debt repayment plan.",
    label: "Financial & Legal",
  },
  {
    text: "A record of important financial account numbers.",
    label: "Financial & Legal",
  },
  {
    text: "Digital copy of my marriage certificate.",
    label: "Financial & Legal",
  },
  {
    text: "Instructions or deadlines for filing my taxes.",
    label: "Financial & Legal",
  },
  {
    text: "A log tracking my monthly bills and due dates.",
    label: "Financial & Legal",
  },

  // Health & Medical
  {
    text: "Post-surgery instructions and care plan.",
    label: "Health & Medical",
  },
  {
    text: "List of questions to ask at my child's pediatrician appointment.",
    label: "Health & Medical",
  },
  { text: "Detailed notes from a therapy session.", label: "Health & Medical" },
  {
    text: "Results from blood tests or health screenings.",
    label: "Health & Medical",
  },
  { text: "List of resources for support groups.", label: "Health & Medical" },
  {
    text: "Research notes on a specific disease or condition.",
    label: "Health & Medical",
  },
  {
    text: "Information on pregnancy or childbirth.",
    label: "Health & Medical",
  },
  {
    text: "A log of my child's immunization records.",
    label: "Health & Medical",
  },
  { text: "Sleep diary or sleep tracking data.", label: "Health & Medical" },
  {
    text: "Information on managing allergies or food sensitivities.",
    label: "Health & Medical",
  },

  // Travel & Leisure
  {
    text: "Photos or videos from a national park excursion.",
    label: "Travel & Leisure",
  },
  {
    text: "Reservations or tickets for concerts or festivals.",
    label: "Travel & Leisure",
  },
  { text: "Foreign currency exchange rates.", label: "Travel & Leisure" },
  {
    text: "Local restaurant recommendations for a trip.",
    label: "Travel & Leisure",
  },
  {
    text: "Detailed travel budget for a specific destination.",
    label: "Travel & Leisure",
  },
  {
    text: "List of 'must-see' attractions and landmarks.",
    label: "Travel & Leisure",
  },
  {
    text: "Airline or hotel loyalty program information.",
    label: "Travel & Leisure",
  },
  {
    text: "Offline maps or guidebooks for a remote area.",
    label: "Travel & Leisure",
  },
  {
    text: "Photos or reviews of dishes from a food tour.",
    label: "Travel & Leisure",
  },
  {
    text: "Scans of travel-related documents (passport, visa).",
    label: "Travel & Leisure",
  },

  // Entertainment & Media
  {
    text: "A list of TV show recommendations from friends.",
    label: "Entertainment & Media",
  },
  {
    text: "Digital ticket stubs from concerts or movies.",
    label: "Entertainment & Media",
  },
  { text: "Song lyrics or music notation.", label: "Entertainment & Media" },
  {
    text: "Photos or videos of a cosplay convention.",
    label: "Entertainment & Media",
  },
  {
    text: "Design patterns or color palettes.",
    label: "Entertainment & Media",
  },
  {
    text: "My personal ranking of movies within a franchise.",
    label: "Entertainment & Media",
  },
  {
    text: "Notes or ideas for a creative writing project.",
    label: "Entertainment & Media",
  },
  {
    text: "Fanfiction or online stories I'm reading.",
    label: "Entertainment & Media",
  },
  {
    text: "A collection of my favorite memes or humorous content. ",
    label: "Entertainment & Media",
  },
  {
    text: "Video game tutorials or speedrun guides.",
    label: "Entertainment & Media",
  },

  // Utilities & Miscellaneous
  {
    text: "Photos of items I want to sell online.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "A list of birthdays and important anniversaries to remember.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Measurements for furniture or rooms in my home.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Screenshots of potential items to buy online.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "List of local farmers' markets or community events.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Notes on troubleshooting a recurring problem.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Home improvement project plans and budgets.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "A 'Someday/Maybe' list of things to do or try.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Packing checklists for different types of trips.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Instructions on how to operate a new device.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Stored a vaccination record for health tracking. Maintaining immunization history.",
    label: "Health & Medical",
  },
  {
    text: "Kept a copy of a driver's license for identification purposes. Validating personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a utility bill for address verification. Confirming residence details.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a wedding invitation for event planning. Confirming attendance details.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Stored a lease agreement for rental terms. Understanding property rental conditions.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a college transcript for academic records. Recording educational achievements.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a medical insurance card for coverage details. Ensuring healthcare benefits.",
    label: "Health & Medical",
  },
  {
    text: "Saved a concert ticket for event memorabilia. Reliving memorable experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a vehicle title for ownership documentation. Confirming vehicle ownership.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a rental application for housing arrangements. Reviewing rental history.",
    label: "Financial & Legal",
  },
  {
    text: "Scanned a restaurant receipt for expense tracking. Managing dining expenditures.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a diploma certificate for academic achievements. Commemorating educational milestones.",
    label: "Education & Learning",
  },
  {
    text: "Stored a pet's vaccination record for health monitoring. Ensuring pet's wellness.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Kept a copy of a social security card for identification purposes. Ensuring social security benefits.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a bank statement for financial records. Monitoring account transactions.",
    label: "Financial & Legal",
  },
  {
    text: "Saved a flight itinerary for travel plans. Confirming flight details.",
    label: "Travel & Leisure",
  },
  {
    text: "Stored a lease agreement for rental property terms. Understanding lease conditions.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a high school diploma for academic verification. Recording educational attainment.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a prescription label for medication details. Managing prescription medications.",
    label: "Health & Medical",
  },
  {
    text: "Saved a ticket stub for a sporting event. Commemorating sporting experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a tax return document for financial records. Maintaining tax history.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a job contract for employment terms. Reviewing employment conditions.",
    label: "Work & Business",
  },
  {
    text: "Scanned a gym membership card for access details. Maintaining fitness membership.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Saved a diploma certificate for educational achievements. Commemorating academic success.",
    label: "Education & Learning",
  },
  {
    text: "Stored a homeowner's insurance policy for coverage details. Ensuring property protection.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a divorce decree for legal documentation. Formalizing marital dissolution.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a receipt for business expenses. Managing business finances.",
    label: "Work & Business",
  },
  {
    text: "Saved a boarding pass for travel documentation. Confirming flight details.",
    label: "Travel & Leisure",
  },
  {
    text: "Stored a rental agreement for housing arrangements. Understanding lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a college diploma for academic recognition. Celebrating educational accomplishments.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a medical prescription for medication details. Managing health prescriptions.",
    label: "Health & Medical",
  },
  {
    text: "Saved a ticket stub for a movie. Commemorating cinematic experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a vehicle registration for ownership verification. Maintaining vehicle documentation.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a utility bill for address verification. Confirming residence details.",
    label: "Financial & Legal",
  },
  {
    text: "Saved an invitation for a birthday party. Planning social events.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Stored a rental agreement for housing arrangements. Understanding lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a college diploma for academic recognition. Celebrating educational accomplishments.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a medical prescription for medication details. Managing health prescriptions.",
    label: "Health & Medical",
  },
  {
    text: "Saved a ticket stub for a movie. Commemorating cinematic experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a vehicle registration for ownership verification. Maintaining vehicle documentation.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a utility bill for address verification. Confirming residence details.",
    label: "Financial & Legal",
  },
  {
    text: "Saved an invitation for a birthday party. Planning social events.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Stored a rental agreement for housing arrangements. Understanding lease terms.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a college diploma for academic recognition. Celebrating educational accomplishments.",
    label: "Education & Learning",
  },
  {
    text: "Scanned a medical prescription for medication details. Managing health prescriptions.",
    label: "Health & Medical",
  },
  {
    text: "Saved a ticket stub for a movie. Commemorating cinematic experiences.",
    label: "Entertainment & Media",
  },
  {
    text: "Stored a vehicle registration for ownership verification. Maintaining vehicle documentation.",
    label: "Financial & Legal",
  },
  {
    text: "Kept a copy of a birth certificate for identification purposes. Establishing personal identity.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Scanned a utility bill for address verification. Confirming residence details.",
    label: "Financial & Legal",
  },
  {
    text: "Saved an invitation for a birthday party. Planning social events.",
    label: "Personal & Lifestyle",
  },
  // Personal & Lifestyle
  {
    text: "A draft of a letter to my future self.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Notes on a home brewing or fermentation project.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Astrology charts or readings based on my birth information.",
    label: "Personal & Lifestyle",
  },
  { text: "A detailed log of my dreams.", label: "Personal & Lifestyle" },
  {
    text: "A list of books I want to read or audiobooks to listen to.",
    label: "Personal & Lifestyle",
  },
  {
    text: "My personal workout and nutrition plans.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Ideas for a themed party or celebration.",
    label: "Personal & Lifestyle",
  },
  {
    text: "Notes on learning a new hobby or skill.",
    label: "Personal & Lifestyle",
  },
  { text: "A daily or weekly gratitude log.", label: "Personal & Lifestyle" },
  {
    text: "Handwritten recipes passed down through my family.",
    label: "Personal & Lifestyle",
  },

  // Work & Business
  { text: "Website or app analytics data.", label: "Work & Business" },
  {
    text: "Customer feedback form results or testimonials.",
    label: "Work & Business",
  },
  {
    text: "A log of time spent on different work tasks.",
    label: "Work & Business",
  },
  {
    text: "Market research findings on industry trends.",
    label: "Work & Business",
  },
  {
    text: "Style guide or branding guidelines for my business.",
    label: "Work & Business",
  },
  {
    text: "Presentation slides for pitching an idea to a team.",
    label: "Work & Business",
  },
  {
    text: "Email templates for common customer interactions.",
    label: "Work & Business",
  },
  {
    text: "Grant applications or proposals for funding.",
    label: "Work & Business",
  },
  { text: "Company policies and procedures manual.", label: "Work & Business" },
  {
    text: "Brainstorming notes or mind maps for a new project.",
    label: "Work & Business",
  },

  // Education & Learning
  {
    text: "My completed thesis or dissertation.",
    label: "Education & Learning",
  },
  {
    text: "Research paper on an obscure historical topic.",
    label: "Education & Learning",
  },
  { text: "Scanned copies of old yearbooks.", label: "Education & Learning" },
  {
    text: "Notes from an online course or educational workshop.",
    label: "Education & Learning",
  },
  {
    text: "Annotated bibliography for a research project. ",
    label: "Education & Learning",
  },
  {
    text: "Study plans and schedules for a specific subject.",
    label: "Education & Learning",
  },
  {
    text: "Foreign language vocabulary and grammar notes.",
    label: "Education & Learning",
  },
  {
    text: "My personal teaching philosophy statement.",
    label: "Education & Learning",
  },
  {
    text: "List of educational YouTube channels I follow.",
    label: "Education & Learning",
  },
  {
    text: "Experimental data and analysis from a science project.",
    label: "Education & Learning",
  },

  // Financial & Legal
  {
    text: "Spreadsheet tracking progress on financial goals.",
    label: "Financial & Legal",
  },
  {
    text: "Notes from a meeting with a financial advisor.",
    label: "Financial & Legal",
  },
  { text: "Comparison of different credit cards.", label: "Financial & Legal" },
  { text: "Paycheck stubs or proof of income.", label: "Financial & Legal" },
  {
    text: "Divorce decree or custody agreement documents.",
    label: "Financial & Legal",
  },
  {
    text: "Living will or advance healthcare directive.",
    label: "Financial & Legal",
  },
  {
    text: "Instructions on contesting a bill or charge.",
    label: "Financial & Legal",
  },
  {
    text: "Records of charitable donations for tax purposes.",
    label: "Financial & Legal",
  },
  { text: "A copy of a pet adoption agreement.", label: "Financial & Legal" },
  {
    text: "Documentation of car accident or insurance claim.",
    label: "Financial & Legal",
  },

  // Health & Medical
  {
    text: "Detailed food allergy or intolerance information.",
    label: "Health & Medical",
  },
  {
    text: "Before-and-after photos of a weight loss journey.",
    label: "Health & Medical",
  },
  {
    text: "Research papers on cutting-edge medical treatments.",
    label: "Health & Medical",
  },
  {
    text: "Detailed records of my headaches or migraines.",
    label: "Health & Medical",
  },
  {
    text: "Questions to ask when choosing a new doctor.",
    label: "Health & Medical",
  },
  {
    text: "Fitness test results or physical performance metrics.",
    label: "Health & Medical",
  },
  {
    text: "Physical therapy exercise plans and instructions.",
    label: "Health & Medical",
  },
  {
    text: "Research and comparison of different medications.",
    label: "Health & Medical",
  },
  {
    text: "Emergency contact information and medical directives.",
    label: "Health & Medical",
  },
  {
    text: "Before-and-after photos of dental work or procedures.",
    label: "Health & Medical",
  },

  // Travel & Leisure
  {
    text: "Packing checklists for different types of trips.",
    label: "Travel & Leisure",
  },
  {
    text: "Foreign language phrasebook or translation notes.",
    label: "Travel & Leisure",
  },
  {
    text: "Photos and videos of a scenic hike or nature exploration.",
    label: "Travel & Leisure",
  },
  {
    text: "Reviews of hotels, vacation rentals, or resorts.",
    label: "Travel & Leisure",
  },
  {
    text: "Offline maps for areas with limited cell service.",
    label: "Travel & Leisure",
  },
  {
    text: "List of restaurants or food markets I want to try while traveling.",
    label: "Travel & Leisure",
  },
  { text: "Souvenirs or mementos from past trips.", label: "Travel & Leisure" },
  {
    text: "Foreign currency exchange calculator app notes.",
    label: "Travel & Leisure",
  },
  {
    text: "Blog posts or social media updates from a trip.",
    label: "Travel & Leisure",
  },
  {
    text: "List of historical sites or museums I want to visit.",
    label: "Travel & Leisure",
  },

  // Entertainment & Media
  {
    text: "A log of movies or TV shows I've watched and my ratings.",
    label: "Entertainment & Media",
  },
  {
    text: "Artwork, sketches, or illustrations I've created.",
    label: "Entertainment & Media",
  },
  {
    text: "List of my favorite podcasts and episode recommendations.",
    label: "Entertainment & Media",
  },
  {
    text: "Screenshots or recordings of funny moments from video games.",
    label: "Entertainment & Media",
  },
  {
    text: "Video game reviews or walkthroughs I've written.",
    label: "Entertainment & Media",
  },
  {
    text: "Fanfiction or online stories I'm reading or writing.",
    label: "Entertainment & Media",
  },
  {
    text: "Playlist of relaxing music or ambient sounds.",
    label: "Entertainment & Media",
  },
  {
    text: "Board game rulebooks or strategy notes.",
    label: "Entertainment & Media",
  },
  {
    text: "A collection of my favorite recipes.",
    label: "Entertainment & Media",
  },
  {
    text: "Quotes that inspire or resonate with me.",
    label: "Entertainment & Media",
  },

  // Utilities & Miscellaneous
  {
    text: "Instructions on how to fix common household problems.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "A list of items I want to sell or donate.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Home inventory list (detailed, with photos)",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "My personal resume and cover letter templates.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "A list of my favorite local businesses to support.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Instructions on how to perform a specific task.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "My personal emergency preparedness plan and checklist.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Voice memos or recordings of myself practicing a speech.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Scanned copies of important certificates or awards.",
    label: "Utilities & Miscellaneous",
  },
  {
    text: "Screenshots of interesting news articles or online content.",
    label: "Utilities & Miscellaneous",
  },
];

const fs = require("fs");
const allowedLabels = [
  "Personal & Lifestyle",
  "Work & Business",
  "Education & Learning",
  "Financial & Legal",
  "Health & Medical",
  "Travel & Leisure",
  "Entertainment & Media",
  "Utilities & Miscellaneous",
];

// Function to convert array to CSV format
function convertToCSV(array) {
  const filteredData = array.filter((obj) => allowedLabels.includes(obj.label));
  if (filteredData.length === 0) return ""; // Return empty string if no valid data

  const header = Object.keys(filteredData[0]).join(",");
  const rows = filteredData.map((obj) =>
    Object.values(obj)
      .map((val) => `"${val}"`)
      .join(",")
  );
  return `${header}\n${rows.join("\n")}`;
}

// Generate CSV content
const csvContent = convertToCSV(data);

// Write CSV content to file
fs.writeFileSync("./datasets/8labels.csv", csvContent, "utf8");

console.log("CSV file generated successfully!");
