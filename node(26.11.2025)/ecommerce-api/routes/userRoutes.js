// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { validateUser, validateId } = require("../middleware/validation");

// CRUD routes with validation middleware
router.get("/", userController.getUsers);
router.get("/:id", validateId, userController.getUserById);
router.post("/", validateUser, userController.createUser);
router.put("/:id", validateId, validateUser, userController.updateUser);
router.delete("/:id", validateId, userController.deleteUser);

module.exports = router;