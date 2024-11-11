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

Initial Mockup

Members of the same team submits the same pull request link
All members of a team must be listed in the sketch/mockup (you risk losing points if your name isn't listed)

Set up a pull request that includes at minimum:

A sketch/mockup containing the minimum UI/UX required to deliver value
Brief description on how the design is relevant to the target demographic

Points may be generally deducted if the following criteria aren't met:

UX flowchart (or other visualization) to demonstrate E2E experience
Defined "happy path"
Design focus on "value" instead of "feature"
"Success criteria" defined
Design aligns with success criteria


Answer: here the Figma Link : https://www.figma.com/design/oxUPzKasSKw1wMUyL9Sab7/RestoTrack---Restaurant-Finder-App?node-id=0-1&node-type=canvas&t=DfwSoWiIqsw0IY6K-0

Checkpoint 3 - Basic Functionality

Since the last version of the RestoTrack project, we’ve implemented several key features to enhance functionality and user experience:

	•	API Integration with Yelp: The app now integrates fully with Yelp’s API, allowing users to view restaurants based on city or menu type. For each restaurant, users can:
	•	View Details: Access three images of the menu, address, location, and phone number.
	•	Google Maps Integration: A clickable button opens Google Maps to show the route starting from the user’s current geolocation.
	•	Direct Call Option: An icon allows users to call the restaurant directly for reservations.
	•	Login API: We created a custom login API using MongoDB and Express for user authentication.
	•	Data Structuring: Restaurant data is well-organized, making it easy to filter and access based on user selections.
	•	State Management: We implemented state management across different parts of the app, including a custom useRestaurants hook to handle specific state requirements. The AuthForm also manages state for authentication, supporting both signup and signin functionalities.

Remaining Work

	•	User Preferences: We’ve begun working on storing user preferences, such as saved locations and menu preferences, in the user’s account. This will allow dynamic loading of these preferences rather than relying on hardcoded values.
