# Blogi

Setup Instructions
1. Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher)

npm (v8 or higher)

Git

2. Clone the Repository
bash
Copy
git clone https://github.com/Gaurav-bajpaye/Blogi.git
cd Blogi
3. Install Dependencies
Install all required dependencies using npm:

bash
Copy
npm install
4. Set Up Environment Variables
Create a .env file in the root directory and add the following:

Copy
REACT_APP_API_BASE_URL=http://localhost:8000
Replace http://localhost:8000 with the base URL of your FastAPI backend.

5. Run the Application
Start the development server:

bash
Copy
npm start
The application will be available at http://localhost:3000.


blogi backend

Installation
Follow these steps to set up and run the project locally.

1. Prerequisites
Node.js: Make sure you have Node.js installed. Download it from nodejs.org.

npm: npm is bundled with Node.js, so you don't need to install it separately.

MongoDB (or any other database): If your project uses a database, ensure it is installed and running.

2. Clone the Repository
bash
Copy
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
3. Install Dependencies
Run the following command to install all required dependencies:

bash
Copy
npm install
4. Set Up Environment Variables
Create a .env file in the root directory of the project.

Add the following environment variables to the .env file:

env
Copy
PORT=5000
DATABASE_URL=mongodb://localhost:27017/mydb
JWT_SECRET=your_jwt_secret_key
Replace your_jwt_secret_key with a strong secret key for JWT (JSON Web Token) authentication.

Replace the DATABASE_URL with your actual database connection string.

5. Start the Server
Run the following command to start the server:

bash
npm start
The server will start running on the port specified in the .env file (default: 5000).

You should see a message in the console: Server running on port 5000.