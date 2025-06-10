# STYLEVERSE - E-Commerce Web Application

**STYLEVERSE** is a feature-rich, full-stack e-commerce web application for a clothing shop. It provides a seamless shopping experience for users and powerful business insights for admins. The platform integrates data analytics features to help the admin make informed decisions.

---

## 🛍️ Features at a Glance

### 👤 **User Roles**
- **Admin**
  - Manage products (add/update/delete)
  - Manage orders (view/update status)
  - View powerful **data-driven analytics** on sales, products, and customers
- **User**
  - Sign up, log in, and log out
  - Browse and purchase products
  - Add products to cart
  - Track their orders

---

## 🌐 Tech Stack

| Layer        | Technology Used                            |
| ------------ | ----------------------------------------- |
| **Frontend** | React.js, CSS3, Figma (for UI/UX design)  |
| **Backend**  | Node.js, Express.js                       |
| **Analytics**| FastAPI (Python), Pandas, Matplotlib      |
| **Database** | MongoDB (NoSQL)                           |
| **DevOps**   | Docker, Docker Compose                    |

---

## 🎨 UI/UX Design
- Designed with **Figma** ensuring vibrant colors and modern layouts
- Best practices followed for accessibility and responsiveness

---

## 📊 Data Analytics
- Built using **FastAPI** with:
  - **Pandas** for data manipulation
  - **MongoDB Aggregation Queries** for data insights
  - **Matplotlib** for generating **visual analytics** like sales charts, top products, order trends, etc.
- Data-driven APIs provide visualizations and insights for admins in real time

---

## ⚙️ Project Setup Instructions

### 🖥️ Requirements
- Node.js (>= 16.x recommended)
- Python (>= 3.9)
- MongoDB
- Docker (recommended)

---

### 📁 Local Development Setup

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/styleverse.git
cd styleverse
```

#### 2️⃣ Environment Variables
- Create a `.env` file in the backend directory with:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

- Create a `.env` file for FastAPI with MongoDB connection details as needed.

#### 3️⃣ Install Dependencies
- Backend:
```bash
cd backend
npm install
```

- Frontend:
```bash
cd frontend
npm install
```

- FastAPI (Analytics API):
```bash
cd analytics
pip install -r requirements.txt
```

---

### ▶️ Run Locally Without Docker

- Start MongoDB (if not using Docker)
- Start Backend:
```bash
cd backend
npm run dev
```
- Start Frontend:
```bash
cd frontend
npm start
```
- Start Analytics Server:
```bash
cd analytics
uvicorn main:app --reload --port 8000
```

---

## 📦 Docker Setup (Recommended)

### 🐳 Using Docker Compose (Recommended)
```bash
docker-compose up --build
```

### 📝 Example `docker-compose.yml`
```yaml
version: "3.8"
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=your_mongodb_connection_string
  analytics:
    build: ./analytics
    ports:
      - "8000:8000"
```

### 🚀 Docker Commands

- **Build containers:**
```bash
docker-compose build
```
- **Start containers:**
```bash
docker-compose up
```
- **Stop containers:**
```bash
docker-compose down
```

---

## 🗂️ Directory Structure Overview
```
/styleverse
├── backend       # Node.js Express backend
├── frontend      # React frontend
├── analytics     # FastAPI data analytics API
├── docker-compose.yml
└── README.md
```

---

## 🔑 Major Functionalities

| Feature              | Admin  | User  |
| -------------------- | ------ | ----- |
| Add/Manage Products  | ✅     | ❌    |
| View Analytics       | ✅     | ❌    |
| Manage Orders        | ✅     | ❌    |
| Create Account       | ❌     | ✅    |
| Place Orders         | ❌     | ✅    |
| Track Orders         | ❌     | ✅    |

---

## ⚔️ Challenges Faced
- Integrating **FastAPI** with a **JavaScript-based stack**
- Working with **MongoDB aggregation pipelines** for analytical queries
- **Converting UI/UX from Figma to production-ready React components**
- Handling **image uploads** over API calls
- Configuring branding assets like **logo**
- Handling **CORS** between React → Node → FastAPI

---

## 📅 Timeline
- **Development:** 3-4 months
- **Deployment & DevOps Setup:** ~1 month

---

## 🚀 Future Enhancements
- Integration with payment gateways like **Razorpay/Stripe**
- Real-time analytics dashboard using WebSockets
- Recommendation engine for personalized shopping

---

## 🤝 Contribution
Want to contribute? Feel free to open **Issues** or **Pull Requests**!

---

## 📜 License
[MIT License](LICENSE)

---
