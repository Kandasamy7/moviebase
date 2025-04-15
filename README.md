**MovieBase Project**
MovieBase is a full-stack application built with Docker that allows users to sign up and log in, with a movie database feature using React, Express, PostgreSQL, and Docker.

Features
User Authentication: Sign up and login functionality connected to PostgreSQL for storing user data.

Movie Database: Displays movie data fetched from an external API.

Dockerized: All services (frontend, backend, and database) are containerized using Docker for easy setup and deployment.

Tech Stack
Frontend: React, Tailwind CSS

Backend: Express.js

Database: PostgreSQL

Containerization: Docker

API: TMDB API (for movie data)

Setup Instructions
To run the project locally, follow the steps below:

Prerequisites
Make sure you have Docker installed on your machine. If not, follow the installation instructions from here.

Running the Project with Docker
Clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/Kandasamy7/moviebase.git
cd moviebase
Build and start the Docker containers:

bash
Copy
Edit
docker-compose up --build
Open the application in your browser:

Frontend: http://localhost:8080

Backend: http://localhost:3000

PostgreSQL DB: Running on port 5433 (accessed by the backend container).

Accessing PostgreSQL Database
To access the database directly inside the container:

bash
Copy
Edit
docker exec -it moviebase-db-1 psql -U postgres -d signup
Docker Commands
To stop the containers:

bash
Copy
Edit
docker-compose down
To rebuild the containers:

bash
Copy
Edit
docker-compose up --build
Folder Structure
bash
Copy
Edit
/moviebase
  /frontend  (React app for movie database)
  /backend   (Express backend for user authentication)
  /movie-db  (React app showing movies)
  /db        (PostgreSQL database configuration)
  docker-compose.yml
  Dockerfile
  README.md
Contributing
Feel free to fork the repository and submit pull requests. Please follow best practices and include tests for new features and bug fixes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

