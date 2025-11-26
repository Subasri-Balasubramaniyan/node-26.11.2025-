const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const { requestLogger } = require("./middleware/logger");

app.use(express.json());  /* enable JSON reading */
// 🔥 Logger FIRST so it logs every request
app.use(requestLogger);
// API Routes - all routes fixed with API for clarity
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);


// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
