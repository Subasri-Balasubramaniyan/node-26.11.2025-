🛒 E-Commerce REST API (Products + Users Only)

A simple and clean REST API built using Node.js + Express that provides full CRUD operations for Products and Users.
This API can serve as a backend for any e-commerce web or mobile application.

🚀 Features
✅ Users API

Create a user

Get all users

Get a single user

Update a user

Delete a user

✅ Products API

Add a product

Get all products

Get a product by ID

Update product

Delete product

📦 Tech Stack

Node.js

Express.js


📁 Project Structure
ecommerce-api/
│
├── controllers/
│   ├── userController.js
│   └── productController.js
│
├── models/
│   ├── userModel.js
│   └── productModel.js
│
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
│
├── middleware/
│   └── errorhandler.js
    |__ validate.js
    |__ logger.js
│
├── server.js
└── package.json

🛠️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/ecommerce-api.git
cd ecommerce-api

2️⃣ Install dependencies
npm install


🔗 API Endpoints
👤 Users API
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
POST	/api/users	Create new user
PUT	/api/users/:id	Update user
DELETE	/api/users/:id	Delete user
📌 Example User JSON
{
  "name": "Suba",
  "email": "suba@example.com",
  "password": "123456"
}

📦 Products API
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
📌 Example Product JSON
{
  "name": "Laptop",
  "price": 55000,
  "category": "Electronics",
  "stock": 20
}

📮 Example Test Using Postman
Create User (POST)
POST http://localhost:5000/api/users


Body → JSON:

{
  "name": "Priya",
  "email": "priya@gmail.com",
  "password": "pass123"
}

🧪 Running API With Nodemon
npm install -g nodemon
nodemon server.js

📝 Future Enhancements

Add authentication (JWT)

Add Orders API

Add cart & wishlist API

Add admin roles

Add product images upload feature
