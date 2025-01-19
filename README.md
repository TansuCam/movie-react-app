<div align="center"> <br/> <br/> <p> Movies-app is a simple movie application built with React JS, TypeScript, and Ant Design, <br/> which allows users to search of both movies and TV series. </p> <p> </div> <br/> <br/>
Features
Search Movies and TV Series:

Users can easily search for their favorite movies and TV series within the application.

Detailed Movie Information:

Access comprehensive information about a selected movie, including details about the cast, crew, and more.

Pagination:

Films are displayed with pagination, 10 films per page.

Users can view the movie list in either a table or grid layout.
<br/>

<br/> <br/>
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Git: If you want to clone the project from GitHub and work with it locally, you will need to have Git installed on your system. You can download and install Git from the official website (https://git-scm.com/).
Node.js: The application requires Node.js to run. You can download and install the latest version from the official website (https://nodejs.org/).
npm (Node Package Manager): npm is used to manage the dependencies. It is installed automatically with Node.js. You can verify it by running npm -v in your terminal.
Once you have these prerequisites installed, follow the steps below to set up the project.

\***\* Installing \*\***

Clone the Repository

- Open a terminal or command prompt and navigate to the directory where you want to clone the project.
- Run the following command to clone the project from GitHub:
  ```bash
    git clone https://github.com/TansuCam/movie-react-app.git
  ```
Navigate to the Project Directory

- Change to the project directory:
  ```bash
    cd movie-react-app
  ```
Install Dependencies

- Run the following command to install the project dependencies:
  ```bash
    npm install
  ```

\***\* Set Up Environment Variables \*\***

Create a .env file in the root of the project and add the following environment variables:
- To use the movie project, you will need to set up some environment variables on your development machine. Here are the steps to follow:

  1. Create a **`.env`** file in the root of the project.
  2. Add the following variables to the **`.env`** file, replacing the placeholder values with your own:
  ```jsx
  REACT_APP_API_KEY=<your-omdb-api-key>
  REACT_APP_API_BASE_URL=http://www.omdbapi.com/
  ```
Replace <your-omdb-api-key> with your actual OMDb API key. You can get it from (http://www.omdbapi.com/).


\***\* Run the Application \*\***

To run the application locally, use the following command:
  ```bash
    npm start
  ```
This will start the development server and open the application in your browser at http://localhost:3000.

