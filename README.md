# 🎨 Imagify

**Imagify** is a full-stack AI-powered image generation SaaS application built on the MERN stack. Users can generate high-quality images from text prompts, manage credits, and purchase additional credits via an integrated payment gateway.

🔗 **Live Demo:** [imagify-dun.vercel.app](https://imagify-dun.vercel.app)

---

## ✨ Features

- 🖼️ **AI Image Generation** — Generate images from text prompts using an AI image-generation API
- 🔐 **User Authentication** — Secure signup/login with JWT-based authentication and hashed passwords (bcrypt)
- 💳 **Credit-Based System** — Each user gets a set number of free credits; additional credits can be purchased
- 💰 **Payment Integration** — Razorpay integration for seamless credit top-ups
- 📱 **Responsive UI** — Clean, modern, mobile-friendly interface
- ⚡ **Serverless Deployment** — Deployed on Vercel with serverless API functions

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- React Toastify

**Backend**
- Node.js + Express
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- Razorpay for payments
- Axios / form-data for external API calls

**Deployment**
- Vercel (Frontend + Serverless Backend Functions)
- MongoDB Atlas (Database)

---

## 📁 Project Structure

```
imagify/
├── api/              # Vercel serverless function entry point
│   └── index.js
├── client/           # React frontend
│   ├── src/
│   └── package.json
├── server/           # Express backend
│   ├── config/       # DB connection & configs
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Auth & other middleware
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API routes
│   ├── server.js     # Express app entry
│   └── package.json
├── .postman/         # Postman API collection
├── package.json       # Root config (required for Vercel ESM builds)
└── vercel.json        # Vercel deployment config
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- Razorpay account (for payment integration)

### 1. Clone the repository
```bash
git clone https://github.com/Sonakshi9900/imagify.git
cd imagify
```

### 2. Install dependencies

**Server**
```bash
cd server
npm install
```

**Client**
```bash
cd ../client
npm install
```

### 3. Set up environment variables

Create a `.env` file inside the `server` directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLIPDROP_API=your_image_generation_api_key
```

Create a `.env` file inside the `client` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

> ⚠️ Never commit `.env` files. Use `.env.example` files to document required variables instead.

### 4. Run locally

**Start the server**
```bash
cd server
npm run server
```

**Start the client**
```bash
cd client
npm run dev
```

The app will be available at `http://localhost:5173` (client) with the API running on `http://localhost:4000`.

---

## 🚀 Deployment

This project is configured for deployment on **Vercel**:
- The React client is built and served as a static site
- The Express server runs as a Vercel serverless function via `api/index.js`
- All environment variables must be added under **Vercel Project Settings → Environment Variables**

---

## 📮 API Testing

A Postman collection is included in the `.postman` directory for testing API endpoints locally.

---

## 🗺️ Roadmap

- [ ] Add image generation history / user dashboard gallery
- [ ] Add rate limiting on auth routes
- [ ] Add input validation (e.g. via `zod` or `express-validator`)
- [ ] Add forgot password / email verification flow
- [ ] Add dark mode

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

---

## 👤 Author

**Sonakshi**
GitHub: [@Sonakshi9900](https://github.com/Sonakshi9900)
