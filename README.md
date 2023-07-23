# About This Repository 
I have developed a full stack Next.js web application with a strong focus on user authentication and profile management. The application offers a secure and user-friendly environment for users to sign up, sign in, view their profile page, and manage their account details. As part of the development process, I have integrated MongoDB as the database to store user information securely. This project is currently in testing mode, and the UI design is being refined before deploying the full-stack Next.js authentication web app to a production environment.

## Key Features:

Signup: Users can create new accounts by providing their email and password. Upon successful signup, their credentials are encrypted and securely stored in the MongoDB database.

Signin: Registered users can log in using their email and password combination. The app verifies the credentials against the data stored in MongoDB to grant access to the user's profile page.

Profile Page: Once logged in, users are automatically redirected to their personalized profile page. This page displays essential user information retrieved from the MongoDB database.

Token Display: Users can view their authentication token on their profile page. This token, along with other user details, is fetched securely from MongoDB.

Logout: Users have the option to log out securely, which terminates their current session and revokes access to their profile page. The session data is cleared from both the client and the server.

Get User Details: The application retrieves user details from the MongoDB database based on their authentication token. This feature ensures that users can access their account information whenever necessary.

## Database Integration:
MongoDB has been seamlessly integrated into the application's backend to store user data securely. It serves as the primary data storage mechanism for user account information, enabling efficient retrieval and management of user profiles.

## Deployment Status:
As of now, the application remains in a testing phase and has not been deployed to a live server. Deployment plans will be executed after completing the UI design and conducting thorough testing to ensure data integrity and security.
