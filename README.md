# 📚 Study Notes Organizer

A **full‑stack** web application built with **Vue.js, Node.js, and MySQL** that helps users easily create, organize, and manage their study notes.  
Features **secure authentication, CRUD note management, search, filtering, and a modern UI** built with Tailwind CSS.

---

## ✨ Features

- 🔑 **User Authentication** – Secure registration & login with JWT
- 📝 **Note Management (CRUD)** – Create, read, update, and delete notes
- 🔍 **Search & Filter** – Quickly find notes by keywords
- 📱 **Responsive Design** – Mobile‑friendly with Tailwind CSS
- 🔔 **Toast Notifications** – Modern success & error messages
- 🎨 **Full‑Screen Gradient Auth Pages** – Eye‑catching login & register screens
- 🗂 **Category & Tag Support** – Organize notes efficiently

---

## 🛠 Tech Stack

**Frontend:** Vue.js 3, Pinia, Vue Router, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MySQL  
**Auth:** JWT (JSON Web Tokens)  
**Others:** Axios, Vue‑Toastification

---

## 📂 Project Structure

```text
study-notes-organizer/
│
├── backend/ # Node.js + Express + MySQL Backend
│   ├── config/ # Configuration files
│   │   └── db.js # MySQL database connection
│   ├── controllers/ # Route controllers / business logic
│   │   ├── authController.js # User registration & login logic
│   │   └── notesController.js # CRUD operations for notes
│   ├── middleware/ # Express middleware
│   │   └── authMiddleware.js # JWT authentication middleware
│   ├── routes/ # API route definitions
│   │   ├── auth.js # Auth routes (login/register)
│   │   └── notes.js # Notes routes (CRUD/search)
│   ├── node_modules/ # Backend dependencies
│   ├── .env # Environment variables
│   ├── package.json # Backend dependencies & scripts
│   ├── package-lock.json # Locked dependency versions
│   └── server.js # Express server entry point
│
├── frontend/ # Vue.js Frontend
│   ├── public/ # Static public files
│   ├── src/ # Source code
│   │   ├── api/ # API service files
│   │   │   ├── authService.js
│   │   │   ├── axios.js
│   │   │   └── notesService.js
│   │   ├── assets/ # Static assets (images, icons, etc.)
│   │   ├── components/ # UI components
│   │   │   ├── LoadingSpinner.vue
│   │   │   ├── Navbar.vue
│   │   │   ├── NoteCard.vue
│   │   │   ├── SearchBar.vue
│   │   │   └── ToastNotification.vue
│   │   ├── router/ # Vue Router setup
│   │   │   └── index.js
│   │   ├── store/ # Pinia store files
│   │   │   ├── authStore.js
│   │   │   └── notesStore.js
│   │   ├── styles/ # Global styles
│   │   │   ├── style.css
│   │   │   └── tailwind.css
│   │   ├── utils/ # Helper functions
│   │   │   └── formatDate.js
│   │   ├── views/ # Application views
│   │   │   ├── Dashboard.vue
│   │   │   ├── Login.vue
│   │   │   ├── Register.vue
│   │   │   └── ViewNote.vue
│   │   ├── App.vue # Root Vue component
│   │   └── main.js # Vue entry point
│   ├── .gitignore
│   ├── index.html
│   ├── package.json # Frontend dependencies & scripts
│   ├── package-lock.json # Locked dependency versions
│   └── README.md
│
└── README.md # Project documentation
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/study-notes-organizer.git

# Navigate to backend & install dependencies
cd backend
npm install

# Start backend server
npm run dev

# Navigate to frontend & install dependencies
cd ../frontend
npm install

# Start frontend development server
npm run dev
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

Figure 1: The registration page where new users can create an account by providing their details.
<img width="768" height="609" alt="n3" src="https://github.com/user-attachments/assets/a8279db7-722d-4bb0-aeea-8c22821a92ee" />

Figure 2: Login screen allowing existing users to securely access their accounts.
<img width="1365" height="612" alt="n1" src="https://github.com/user-attachments/assets/a39a13b7-e1b2-4b58-bc6e-6d3bd3cc32c1" />

Figure 3: Dashboard interface where users can add new notes including title, content, and related links.
<img width="1365" height="611" alt="n5" src="https://github.com/user-attachments/assets/bfc5f4df-a43c-480b-9e77-9f2c55e26f3a" />
<img width="1055" height="475" alt="n7" src="https://github.com/user-attachments/assets/bd8f89a2-83f0-481a-946f-24db8bc841af" />

Figure 4: Overview of the list of notes created by the user, showing note titles and previews.
<img width="1365" height="455" alt="n6" src="https://github.com/user-attachments/assets/6e0b6c4d-0c91-4d5f-b9c6-157bca8899f4" />

Figure 5: Search functionality allowing users to filter notes by keywords to quickly find relevant content.

---

## 📄 License

This project is licensed under the **MIT License**.
