# Full Stack Form with PDF Generator - Backend 📜

## Overview

This backend application serves as the server-side component for handling form submissions from the frontend. It is built using Node.js and Express, with Supabase as the underlying database to store and manage form data.

## File Structure

### FormController.js

The `FormController.js` file contains the primary logic for handling form submissions. It exports a function named `submitForm`, which is responsible for processing incoming form data. 
This function performs necessary validations on the submitted data, such as checking the validity of the name and phone number. 
If the data passes validation, it is then inserted into the `submissions` table in the Supabase database using the Supabase client.

### FormRoutes.js

In the `FormRoutes.js` file, we define the Express router responsible for handling form-related API routes. Currently, there is only one route defined: a `POST` route at `/submit`. This route uses the `submitForm` function from `FormController` as middleware to process form submissions.

### server.js

The `server.js` file serves as the main entry point for the backend application. It initializes the Express app, configures necessary middleware (such as CORS for cross-origin requests), and defines the API routes. Additionally, it initializes the Supabase client, establishing a connection to the Supabase database.


## Dependencies

- **Express:** A web application framework for Node.js, simplifying the creation of robust APIs.
- **Cors:** A middleware that enables Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
- **Supabase:** An open-source alternative to Firebase, providing real-time and RESTful API services along with a PostgreSQL database.

## Database Schema

The Supabase database includes a `submissions` table with the following schema:

```sql
CREATE TABLE submissions (
  id serial PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phonenumber VARCHAR(10),
  freetextfield TEXT,
  created_at TIMESTAMP 
  );
```

## API Endpoints

### POST /api/form/submit

`Description`: Handles incoming form submissions.
`Functionality`: Validates the submitted form data, including name and phone number. If validation passes, the data is inserted into the submissions table in the Supabase database.
`Usage`: Send a POST request to this endpoint with the form data in the request body.


## Running the Server

1. Install Node.js and npm.
2. Run `npm install` to install project dependencies.
3. Create a Supabase account and configure the Supabase connection details in the `supabaseConfig.js` file.
4. Execute npm start to start the server.


## Contributing
Feel free to contribute to the project by opening issues or submitting pull requests. ✨
