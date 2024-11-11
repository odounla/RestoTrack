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

[1 Point] Update the readme.md file appropriately (e.g. an updated version of your project plan including team members)
We implemented the prototype, RestoTrackApp, where we have some basic settup, like SignUp and SignIn page (Not implemented yet), the SearchScreen where all the restaurants should be showing is implemented using Yelp API, we can already searching restaurants.

Submit a pull request for a prototype of your final project that includes at minimum:
[2 Points] Some aspects of navigation and event-based action
[2 Points] Storing/Retrieving data
We use yelp API to retrieve data, and it is working

[5 Points] Basic UI/UX to demonstrate expected behavior (could be "hard coded" or "sample data")

Our UI is displaying list of restaurants by category as we plan (Budget Bites, Mid Range Munch and Luxury Eats), the pictures of the actual restaurant are displayed and Reviews and Ranking also.

A document that includes:
[3 Points] List of features needed for the MVP + Breakdown of tasks
Feature 1: User Registration and Authentication

    •	Description: Allows users to sign up, log in, and log out of the app.
    •	Tasks:
    •	Design user-friendly Sign-Up and Login screens.
    •	Implement form validation for user input (e.g., email format, password strength).
    •	Set up a backend service for handling user authentication (e.g., Firebase or custom API).
    •	Implement password hashing for security before storing user data.
    •	Create error handling for duplicate user registration.
    •	Store authentication tokens for session management using AsyncStorage.
    •	Integrate social login options (e.g., Google or Facebook).

Feature 2: Restaurant Search

    •	Description: Allows users to search for restaurants based on location, cuisine, or name.
    •	Tasks:
    •	Set up a search bar component and connect it to the API.
    •	Design the search results UI.
    •	Fetch and display search results from the API based on user input.
    •	Implement pagination or infinite scrolling for search results.
    •	Implement error handling for API requests (e.g., no results, connection errors).

Feature 3: Restaurant Detail View

    •	Description: Provides detailed information about a restaurant, such as reviews, ratings, and menu.
    •	Tasks:
    •	Design the restaurant detail screen.
    •	Display restaurant information fetched from the API.
    •	Include a list of reviews and ratings.
    •	Display a gallery of restaurant images.
    •	Implement a “Save to Favorites” feature for logged-in users.

Feature 4: User Favorites

    •	Description: Allows users to save and view their favorite restaurants.
    •	Tasks:
    •	Create a Favorites screen to list saved restaurants.
    •	Implement “Add to Favorites” and “Remove from Favorites” buttons.
    •	Store favorite restaurant data in local storage or a backend database.
    •	Sync favorite restaurants between the app and server for persistence.
    •	Handle user authentication before allowing access to favorites.

Feature 5: Profile Management

    •	Description: Allows users to view and edit their profile information.
    •	Tasks:
    •	Design the Profile screen.
    •	Implement form validation for editing user information.
    •	Integrate API for updating user information.
    •	Implement profile picture upload functionality.
    •	Ensure changes are saved and updated in real-time.

[2 Points] Mapping between features and value(s) to be delivered by your app (justification)
eature 1: User Registration and Authentication

    •	Value: Establishes a secure and personalized experience, enabling users to save their preferences (e.g., favorites) and access their account across devices. It builds trust with users by protecting their data and providing secure access.

Feature 2: Restaurant Search

    •	Value: The core function of the app, enabling users to discover restaurants quickly based on their preferences. It drives user engagement by helping them find what they need efficiently, leading to higher user satisfaction and app retention.

Feature 3: Restaurant Detail View

    •	Value: Provides users with the necessary information to make informed decisions, such as where to dine or order from. This feature is crucial for user satisfaction as it offers detailed insights, making the app a go-to resource for restaurant information.

Feature 4: User Favorites

    •	Value: Increases user retention and engagement by allowing users to curate a personalized list of preferred restaurants. This feature ensures users can easily access their favorite spots, enhancing the app’s utility and value over time.

Feature 5: Profile Management

    •	Value: Empowers users to control their data and update their information as needed, which is essential for user autonomy and personalization. A good profile management experience builds user trust and loyalty, as they feel their preferences are respected and maintained.

    By focusing on these features, the app can deliver a solid minimum viable product that provides value to users while also allowing for future enhancements and scalability.
