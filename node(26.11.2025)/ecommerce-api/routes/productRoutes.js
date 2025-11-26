// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { validateProduct, validateId } = require("../middleware/validation");

// CRUD routes with validation middleware
router.get("/", productController.getProducts);
router.get("/:id", validateId, productController.getProductById);
router.post("/", validateProduct, productController.createProduct);
router.put("/:id", validateId, validateProduct, productController.updateProduct);
router.delete("/:id", validateId, productController.deleteProduct);

module.exports = router;