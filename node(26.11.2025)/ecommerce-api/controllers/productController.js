// controllers/productController.js
const response = require("../utils/responseFormatter");

// In-memory products
let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

// Get all products
exports.getProducts = (req, res) => {
  return response.success(res, "Products fetched successfully", products);
};

// Get single product
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return response.error(res, "Product not found", 404);
  return response.success(res, "Product fetched", product);
};

// Create new product
exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  
  const newProduct = { 
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1, 
    name, 
    price 
  };
  products.push(newProduct);
  return response.success(res, "Product created", newProduct, 201);
};

// Update product
exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return response.error(res, "Product not found", 404);

  const { name, price } = req.body;
  product.name = name || product.name;
  product.price = price || product.price;

  return response.success(res, "Product updated", product);
};

// Delete product
exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return response.error(res, "Product not found", 404);

  products.splice(index, 1);
  return res.status(204).send();
};