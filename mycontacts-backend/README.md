# Project Title: MyContacts Backend API

## Description
MyContacts is a backend API built with Express.js that allows users to manage their contacts. It provides endpoints for user authentication, contact management, and integrates with a MongoDB database.

## Technologies Used
- **Backend**: 
  - Express.js (Web Framework)
  - Mongoose (MongoDB ODM)
  - Bcrypt (Password Hashing)
  - JsonWebToken (Authentication)
  - Dotenv (Environment Variables)

## Project Structure
```
/mycontacts-backend
  ├── server.js                # Main application entry point
  ├── config
  │   └── dbConnection.js      # Database connection configuration
  ├── constants
  │   └── constants.js         # Constants used in the application
  ├── controllers
  │   ├── contactController.js  # Controller for contact-related logic
  │   └── userController.js     # Controller for user-related logic
  ├── middleware
  │   ├── errorHandler.js       # Error handling middleware
  │   └── validateTokenHandler.js # Middleware for token validation
  ├── routes
  │   ├── contactRoutes.js      # Routes for contact management
  │   └── userRoutes.js         # Routes for user management
  ├── package.json              # Project dependencies and scripts
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd express-project/mycontacts-backend
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open your browser or API client and navigate to `http://localhost:5000` to access the API.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the ISC License.
