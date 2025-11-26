// controllers/userController.js
const response = require("../utils/responseFormatter");

// In-memory users
let users = [
  { id: 1, name: "sree", email: "sree@gmail.com" },
  { id: 2, name: "Anu", email: "anu@gmail.com" }
];

// Get all users
exports.getUsers = (req, res) => {
  return response.success(res, "Users fetched successfully", users);
};

// Get single user
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return response.error(res, "User not found", 404);
  return response.success(res, "User fetched", user);
};

// Create user
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  
  // Check if email already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return response.error(res, "Email already exists", 409);
  }

  const newUser = { 
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1, 
    name, 
    email 
  };
  users.push(newUser);
  return response.success(res, "User created", newUser, 201);
};

// Update user
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return response.error(res, "User not found", 404);

  const { name, email } = req.body;
  
  // Check if email is being changed and already exists
  if (email && email !== user.email) {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return response.error(res, "Email already exists", 409);
    }
  }
  
  user.name = name || user.name;
  user.email = email || user.email;

  return response.success(res, "User updated", user);
};

// Delete user
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return response.error(res, "User not found", 404);

  users.splice(index, 1);
  return res.status(204).send();
};