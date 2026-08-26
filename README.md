# 📚 Study Notes Organizer

A **full-stack web application** built with **Vue.js, Node.js, Express.js, and MySQL** that helps users easily create, organize, and manage their study notes. The application provides **secure JWT authentication, CRUD note management, search and filtering, category and tag support, and a modern responsive UI** built with Tailwind CSS. The project is fully containerized using **Docker and Docker Compose**, with **database migrations** managed using `db-migrate`.

---

## ✨ Features

- 🔑 **User Authentication** – Secure registration & login with JWT
- 📝 **Note Management (CRUD)** – Create, read, update, and delete notes
- 🔍 **Search & Filter** – Quickly find notes by keywords
- 📱 **Responsive Design** – Mobile-friendly interface
- 🔔 **Toast Notifications** – Modern success & error messages
- 🎨 **Full-Screen Gradient Auth Pages** – Modern login and registration screens
- 🗂 **Category & Tag Support** – Organize notes efficiently
- 🐳 **Dockerized Application** – Frontend, backend, and MySQL run in containers
- 🗃️ **Database Migrations** – Version-controlled database schema using `db-migrate`

---

## 🛠 Tech Stack

### Frontend
- Vue.js 3
- Pinia
- Vue Router
- Tailwind CSS
- Axios
- Vue-Toastification

### Backend
- Node.js
- Express.js
- JWT
- bcryptjs

### Database
- MySQL 8.0
- mysql2

### Database Management
- db-migrate
- db-migrate-mysql

### DevOps
- Docker
- Docker Compose

---

## 📂 Project Structure

```text
study-notes-organizer/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── notesController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── migrations/
│   │   ├── 001-create-users.sql
│   │   └── 002-create-notes.sql
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   └── notes.js
│   │
│   ├── .env
│   ├── Dockerfile
│   ├── database.json
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   ├── authService.js
│   │   │   ├── axios.js
│   │   │   └── notesService.js
│   │   │
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── LoadingSpinner.vue
│   │   │   ├── Navbar.vue
│   │   │   ├── NoteCard.vue
│   │   │   ├── SearchBar.vue
│   │   │   └── ToastNotification.vue
│   │   │
│   │   ├── router/
│   │   │   └── index.js
│   │   │
│   │   ├── store/
│   │   │   ├── authStore.js
│   │   │   └── notesStore.js
│   │   │
│   │   ├── styles/
│   │   │   ├── style.css
│   │   │   └── tailwind.css
│   │   │
│   │   ├── utils/
│   │   │   └── formatDate.js
│   │   │
│   │   ├── views/
│   │   │   ├── Dashboard.vue
│   │   │   ├── Login.vue
│   │   │   ├── Register.vue
│   │   │   └── ViewNote.vue
│   │   │
│   │   ├── App.vue
│   │   └── main.js
│   │
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```
## 🐳 Docker Setup

The application uses Docker Compose to run the complete application. The following services are included:

Docker Compose :  Frontend : 5173 ────▶ Backend : 5000 ────▶ MySQL : 3306 ◀──── Database Migrations
### Services

| Service  | Description           |   Port |
| -------- | --------------------- | -----: |
| Frontend | Vue.js application    | `5173` |
| Backend  | Node.js + Express API | `5000` |
| MySQL    | MySQL database        | `3306` |


## 📦 Installation

### Prerequisites

Make sure you have installed:
- Docker Desktop
- Git
You do not need XAMPP to run this project.

```bash
# Clone the repository
git clone https://github.com/your-username/study-notes-organizer.git
cd Study_Notes_Organizer
```
### Build and start the containers
```bash
docker compose up -d --build
```
### This starts:
- Frontend
- Backend
- MySQL

### Run database migrations
After the containers are running:
```bash
docker compose exec backend npm run migrate
```
This creates the required database tables. The migration system keeps track of which migrations have already been executed.

### Roll back the latest migration
```bash
docker compose exec backend npm run migrate:down
```
### Create a new migration
```bash
docker compose exec backend npx db-migrate create migration-name --sql-file
```
---

## 🔐 Environment Variables

Create a `.env` file in the **backend** folder:

```ini
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=study_notes
JWT_SECRET=your_jwt_secret
```
## Docker configuration

When running through Docker Compose, the backend receives its database configuration from docker-compose.yml:
environment:
```ini
  PORT: 5000
  DB_HOST: mysql
  DB_USER: root
  DB_PASSWORD: root
  DB_NAME: study_notes
  JWT_SECRET: your_jwt_secret
```
Inside Docker, the backend connects to MySQL using mysql:3306 because mysql is the Docker Compose service name.

---

## ▶️ Running the Application

Start the application:
```bash
docker compose up -d
```

Run migrations:
```bash
docker compose exec backend npm run migrate
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend:  http://localhost:5000

## 🛑 Stop the Application

To stop the containers:
```bash
docker compose down
```
This stops the containers but preserves the MySQL data stored in the Docker volume.

---


## 🔌 API Endpoints

### Auth

**Register User**  
- **URL:** `/api/auth/register`  
- **Method:** `POST`  
- **Description:** Register a new user account.

**Login User**  
- **URL:** `/api/auth/login`  
- **Method:** `POST`  
- **Description:** Login with email & password and receive a JWT token.

---

### Notes

**Get All Notes**  
- **URL:** `/api/notes`  
- **Method:** `GET`  
- **Description:** Retrieve all notes for the logged-in user. *(Requires JWT authentication)*

**Create Note**  
- **URL:** `/api/notes`  
- **Method:** `POST`  
- **Description:** Create a new note. *(Requires JWT authentication)*

**Update Note**  
- **URL:** `/api/notes/:id`  
- **Method:** `PUT`  
- **Description:** Update an existing note by its ID. *(Requires JWT authentication)*

**Delete Note**  
- **URL:** `/api/notes/:id`  
- **Method:** `DELETE`  
- **Description:** Delete a note by its ID. *(Requires JWT authentication)*

**Search Notes**  
- **URL:** `/api/notes/search`  
- **Method:** `GET`  
- **Description:** Search notes by keyword. *(Requires JWT authentication)*

---

## 🚀 Usage

- Register for a new account  
- Login to access your dashboard  
- Add, edit, delete, and search notes  
- Organize notes by category and tags  

---

## 📸 Screenshots
<img width="765" height="603" alt="n4" src="https://github.com/user-attachments/assets/1a0021c0-ec73-4a5a-9a99-3a4b78da2adf" />


**Figure 1: The registration page where new users can create an account by providing their details**


<img width="768" height="609" alt="n3" src="https://github.com/user-attachments/assets/a8279db7-722d-4bb0-aeea-8c22821a92ee" />


**Figure 2: Login screen allowing existing users to securely access their accounts**


<img width="1365" height="612" alt="n1" src="https://github.com/user-attachments/assets/a39a13b7-e1b2-4b58-bc6e-6d3bd3cc32c1" />


**Figure 3: Dashboard interface where users can add new notes including title, content, and related links**


<img width="1365" height="611" alt="n5" src="https://github.com/user-attachments/assets/bfc5f4df-a43c-480b-9e77-9f2c55e26f3a" />
<img width="1055" height="475" alt="n7" src="https://github.com/user-attachments/assets/bd8f89a2-83f0-481a-946f-24db8bc841af" />


**Figure 4: Overview of the list of notes created by the user, showing note titles and previews**


<img width="1365" height="455" alt="n6" src="https://github.com/user-attachments/assets/6e0b6c4d-0c91-4d5f-b9c6-157bca8899f4" />


**Figure 5: Search functionality allowing users to filter notes by keywords to quickly find relevant content**


---

## 📄 License

This project is licensed under the **MIT License**.
