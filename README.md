# NodeJS-MySQL

This project is a simple web application that fetches data from a MySQL database using a Node.js + Express backend and displays it in a React frontend using Axios. The frontend is built using Vite for a fast development experience.

## Prerequisites
Ensure you have the following installed on your system:

- **Node.js** (v14 or above)
- **MySQL** (MySQL Community Server and MySQL Workbench)
- **NPM** or **Yarn**
- **Vite** (for the frontend build)


## Setup Database
To Setup database execute these commands in MySQL Workbench.
```
CREATE DATABASE mydatabase;

USE mydatabase;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO users (name, email) VALUES
  ('John Doe', 'john@example.com'),
  ('Jane Doe', 'jane@example.com');
```

## Installation

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/KartikLakhotiya/NodeJS-MySQL.git
cd NodeJS-MySQL
```

### 2. Backend Setup

Go into the backend directory and install the dependencies.

```bash
cd backend
npm install
```

### 3. Frontend Setup

Go into the frontend directory and install the dependencies.
```bash
cd frontend
npm install
```

### 5. Run the application

To run the backend server go into the backend directory and run the following command
```bash
npm run dev
```

To run the frontend server go into the frontend directory and run the following command
```bash
npm run dev
```

The backend server will run at ```http://localhost:5000``` and the frontend server will run at ```http://localhost:5173```.

## Contributing

Feel free to open issues and submit pull requests. Any contributions are appreciated!

#### If you liked my project please leave a star. Thank You.