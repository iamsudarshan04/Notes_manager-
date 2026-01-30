# 📝 Notes Manager Application

> A full-stack Notes Manager application built with the MERN stack (MongoDB, Express, React, Node.js)

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive notes management application that enables users to create, view, update, and delete notes with ease. Built as a learning project to master full-stack development with the MERN stack.

---

## ✨ Features

- ✅ **Full CRUD Operations** - Create, read, update, and delete notes seamlessly
- ⚡ **Fast & Responsive** - Built with React + Vite for optimal performance
- 🎨 **Modern UI** - Styled with Tailwind CSS for a clean, professional look
- 🔐 **Secure Backend** - RESTful API built with Node.js & Express
- 🗄️ **Data Persistence** - MongoDB integration for reliable data storage
- 🚦 **Rate Limiting** - API protection using Upstash Redis to prevent abuse
- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- 🏗️ **Clean Architecture** - Follows MVC pattern for maintainable code

---

## 🛠️ Tech Stack

### Frontend
- **React** (with Vite) - Fast, modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Serverless rate limiting

---

## 📂 Project Structure

```
notes-manager/
│
├── backend/                    # Backend server
│   ├── config/                 # Configuration files
│   │   ├── db.js              # MongoDB connection
│   │   └── upstash.js         # Upstash Redis setup
│   ├── controllers/            # Business logic
│   │   └── notesController.js # Notes CRUD operations
│   ├── middleware/             # Custom middleware
│   │   └── ratelimiter.js     # Rate limiting middleware
│   ├── routes/                 # API routes
│   │   └── notesRoutes.js     # Notes endpoints
│   ├── server.js              # Entry point
│   └── package.json           # Dependencies
│
├── frontend/                   # Frontend client
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Homepage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── lib/                # Utilities
│   │   │   └── axios.js       # Axios configuration
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md                   # You are here!
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas account)
- **Upstash** account (for rate limiting)

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/notes-manager.git
cd notes-manager
```

#### 2️⃣ Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to your `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

**Getting your credentials:**
- **MongoDB URI**: Get it from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Upstash**: Create a free account at [Upstash](https://upstash.com/) and get your Redis REST URL and token

```bash
# Start the backend server
npm run dev
```

✅ Backend should be running at `http://localhost:5000`

#### 3️⃣ Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

✅ Frontend should be running at `http://localhost:5173`

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Fetch all notes |
| `GET` | `/api/notes/:id` | Fetch a single note by ID |
| `POST` | `/api/notes` | Create a new note |
| `PUT` | `/api/notes/:id` | Update an existing note |
| `DELETE` | `/api/notes/:id` | Delete a note |

### Example Request

**Create a Note:**
```bash
curl -X POST http://localhost:5000/api/notes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Note",
    "content": "This is the content of my note"
  }'
```

---

## 🚦 Rate Limiting

The API implements rate limiting using Upstash Redis to prevent abuse:
- **Limit**: Configurable requests per time window
- **Response**: Returns `429 Too Many Requests` when exceeded
- **User Experience**: Frontend displays a friendly rate-limited UI component

---

## 📖 What I Learned

As my first MERN stack project, I gained hands-on experience with:

- 🔧 **Backend Development**: Building RESTful APIs with Express.js
- 🗄️ **Database Management**: Working with MongoDB and Mongoose ODM
- ⚛️ **Frontend Development**: Creating dynamic UIs with React
- 🎨 **Styling**: Implementing responsive designs with Tailwind CSS
- 🔄 **HTTP Communication**: Using Axios for API requests
- 🏗️ **Project Structure**: Organizing code following MVC architecture
- 🚀 **Deployment Concepts**: Understanding environment variables and configuration
- 🛡️ **API Security**: Implementing rate limiting and data validation

---

## 🎯 Future Improvements

Here are some features I plan to add:

- [ ] 🔐 User authentication with JWT
- [ ] 👤 User profiles and personalized notes
- [ ] 🏷️ Note categories and tags
- [ ] 🔍 Search and filter functionality
- [ ] 🌙 Dark mode toggle
- [ ] ⭐ Mark notes as favorites
- [ ] 📎 Add file attachments to notes
- [ ] 🔔 Reminder notifications
- [ ] 📱 Progressive Web App (PWA) support
- [ ] 🌐 Deploy to production (Vercel + Railway/Render)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/notes-manager/issues).

### How to Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

##  Acknowledgements

Special thanks to the amazing technologies and resources that made this project possible:

- [MongoDB](https://www.mongodb.com/) - Database platform
- [Express.js](https://expressjs.com/) - Backend framework
- [React](https://reactjs.org/) - Frontend library
- [Node.js](https://nodejs.org/) - Runtime environment
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Upstash](https://upstash.com/) - Serverless Redis
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM
- [Axios](https://axios-http.com/) - HTTP client

---

## ⭐ Show Your Support

If you found this project helpful or learned something from it, please give it a ⭐️!

---

<div align="center">
  <p>Made with ❤️ and lots of ☕</p>
  <p>My First MERN Stack Project 🎉</p>
</div>
