const express = require("express");
const app = express();
const swaggerDocs = require("./swagger");

app.use(express.json());
app.use("/", require("./routes/user"));


// Example route
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");

  // Run swagger
  swaggerDocs(app);
});
