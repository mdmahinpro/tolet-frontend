# To-Let Platform

## Description
This To-Let platform is designed to help users find and list properties for rent. It allows property owners to advertise their properties by adding detailed information and images, and prospective tenants can search for properties based on their needs.

## Features
* User Authentication: Secure login with Google or using a signup form.
* List Properties: Users can create ads for their properties, specifying details such as title, price, location, number of bedrooms and bathrooms, availability, and more.
* Search and Filter: Dynamic searching and filtering capabilities allow users to find properties based on various criteria.
* Property Management: Users can manage their listings by updating or deleting them as necessary.
* Image Uploads: Support for uploading multiple images for each property.
* Secure Transactions: All sensitive routes (like those handling CRUD operations) are secured using JWT tokens to ensure that only authenticated users can access them.
* Responsive Design: The site is responsive and designed to work on both desktop and mobile devices.
Local Setup

## Prerequisites:

Node.js
MongoDB
Git
Cloning the repository:
```
git clone -routeName
Installing dependencies:

To install all required dependencies, run the following commands in your terminal.

For server-side packages:
  cd server
  npm install
For client-side packages:
  npm install
```
Environment Variables:

Before running the application, create a .env file in the server directory and add your MongoDB URI and JWT Secret like so:

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
Running the Application:

To run the server, use:
  cd server
  nodemon index.js
To run the React client, open another terminal and run:
  cd client
  npm run dev
```

The application will be available at your web browser.

## Contact
For any queries regarding the application, please reach out via email at mdmahin.pro@gmail.com.
