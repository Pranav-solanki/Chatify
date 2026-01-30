## live at https://chatify--pranav39645.replit.app

# ✨ Chatify — Full Stack Real-Time Chat App (MERN + Socket.IO)

🚀 **Chatify** is a modern **Full Stack Real-Time Chat Application** built using the **MERN stack** with powerful features like:

✅ JWT Authentication  
✅ Real-time Messaging with Socket.IO  
✅ Online/Offline Presence  
✅ Image Uploads (Cloudinary)  
✅ Welcome Emails (Resend)  
✅ Clean UI with Tailwind + DaisyUI  
✅ Rate Limiting & Security (Arcjet)

---

## 📌 Preview

> A modern responsive chat experience with real-time updates.

---

## 🔥 Highlights

- 🔐 **Custom JWT Authentication** (No third-party auth)
- 💬 **Real-time Messaging** using Socket.IO
- 🟢 **Online/Offline Presence Indicators**
- ✍️ Typing + Notification Sounds (Toggle Support)
- 📩 Welcome Email on Signup (Resend Integration)
- 🖼 Image Upload Support (Cloudinary)
- ⚡ REST API with Node.js + Express
- 🗄 MongoDB for Data Persistence
- 🛡 API Rate Limiting with Arcjet
- 🎨 Beautiful UI using React + TailwindCSS + DaisyUI
- 🧠 Zustand for State Management
- 🚀 Deployment Ready (Replit/Render/Vercel)

---

## 🛠 Tech Stack

| Frontend | Backend | Database | Real-time |
|---------|---------|----------|----------|
| React + Vite | Node.js + Express | MongoDB Atlas | Socket.IO |

Additional Tools:

- TailwindCSS + DaisyUI
- Cloudinary (Media Upload)
- Resend (Email Service)
- Arcjet (Security + Rate Limit)

---

## 📂 Project Structure

```bash
chatify/
│
├── backend/                # Express + MongoDB + Socket.IO Backend
│   ├── src/
│   │   ├── routes/         # API Routes (auth, messages)
│   │   ├── controllers/    # Request Logic
│   │   ├── models/         # MongoDB Schemas
│   │   ├── libs/           # DB + Socket Setup
│   │   ├── middleware/     # JWT Auth Middleware
│   │   └── server.js       # Main Backend Entry Point
│   └── package.json
│
├── frontend/               # React + Tailwind + Zustand Frontend
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── pages/          # App Pages (Login, Chat, Profile)
│   │   ├── store/          # Zustand State Management
│   │   ├── lib/            # Axios + Helpers
│   │   └── main.jsx        # React Entry Point
│   └── package.json
│
├── package.json            # Root Scripts (Build + Start)
└── README.md               # Project Documentation

```

---

## ⚙️ Environment Variables Setup

Create a `.env` file inside the **backend folder**:

### * Backend (`/backend/.env`)

```env
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_address
EMAIL_FROM_NAME=Chatify Team

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```
---

---

## 🚀 Run Locally (Complete Setup)

Copy and paste these commands to run the project locally:
##Clone repo
```bash
# Clone the repository
git clone https://github.com/yourusername/chatify.git
cd chatify
```
```bash
# Install backend dependencies
npm install --prefix backend
```
```bash
# Install frontend dependencies
npm install --prefix frontend
```
```bash
# Start backend server
npm nodemon src/server.js --prefix backend
```
```bash
# Start frontend client (in a new terminal)
npm run dev --prefix frontend
```



