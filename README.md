Project Name: RestoTrack

Project Members: Olivier Dounla

Version #: 1.0

Summary of Project:

RestoTrack is a restaurant finder App designed to streamline dining decisions by providing users with real-time recommendations based on preferences, budget, rankings and location. 
Tapping into Yelp's extensive database, the app offers trusted reviews and curated suggestions. With 92% of diners relying on online reviews before deciding where to eat (Forbes 2021),
RestoTrack simplifies the decision-making process and ensures that every meal aligns with user preferences.

Project Analysis:

Value Proposition:

The primary goal of RestoTrack is to reduce the time and frustration users experience whilechoosing a restaurant. By offering a fast and reliable recommendation system, the app ensures 
users find restaurants that meet their preferences, thus enhancing their dining experiences.

Target Audience:

The target audience includes Z-generation, tech-savy diners, aged 18-45, who frequently dine out and rely on digital platforms for decision-making. This demographic is chosen due to its high 
engagement with mobile technology and reliance on user reviews. The app will be promoted through social media, partnerships with food inluencers, and advertisements on relevant digital platforms.

Success Criteria:

Success will be measured by user satisfaction, with a target to achieve 4+ star rating in apps store, increased user engagement (tracked via app metrics such as session duration and return visits), 
and positive reviews. Additionally, success will be gauged by app downloads, with a goal of reaching 100 000 downlods in the first 6 months.

Competitor Analysis:

Competitor like TheFork, Resy, or OpenTable offer similar feature but often focus on reservations and dining experiences rather than personalized discovery. RestoTrack differentiates itself by prioritizing 
real-time user preferences and using Yel's vast review data for recommendations and narrow down the search. However, Resy's strength lies in its integration dynamic pricing for reservation at some high-demand 
restaurants, which RestoTrack may lack initially.

Monetization Model:

RestoTrack will be monetized through affiliate partnerships with restaurants and premium subscriptions.Premium users will g=have access to ad-free browsing, exclusive restaurant deals, and advanced filtering options.

Initial Design:

UI/UX Design:
The MVP will feature a clean, easy-to-navigate interface. The home screen will showcase nearby restaurant recommendations, and users will have options to filter results based on cuisine, price range, and rating. 
A mimimalistic design, focusing on fast access to relevant data, will enhance user experience.

Technical Architecture:
The app wil use Firebase for user authentication and Yelp’s API for restaurant data. Firestore will store user preferences, while Google Maps API will integrate for location-based searches. he backend will be serverless,
leveraging Firebase Functions to handle requests efficiently. Success will be measured by app performance and real-time API response rates.

Challenges and Open Questions:

1. API Limits: Yelp’s API has request limits that might restrict scaling. The solution may involve caching frequently queried data to minimize API calls.
2. Data Accuracy: Ensuring the real-time accuracy of restaurant hours and menu availability may pose challenges. Making some research on other Restaurants App like Doordash, UberEat could help getting a better solution.
3. Performance: Ensuring fast response times during peak hours might require optimizing backend services or implementing CDN (Content Delivery Network) for faster load times.

