// middleware/validation.js

// Validate product creation/update
exports.validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(422).json({
      status: "error",
      message: "Valid product name is required"
    });
  }
  
  if (!price || typeof price !== "number" || price <= 0) {
    return res.status(422).json({
      status: "error",
      message: "Valid price (positive number) is required"
    });
  }
  
  next();
};

// Validate user creation/update
exports.validateUser = (req, res, next) => {
  const { name, email } = req.body;
  
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(422).json({
      status: "error",
      message: "Valid user name is required"
    });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(422).json({
      status: "error",
      message: "Valid email address is required"
    });
  }
  
  next();
};

// Validate ID parameter
exports.validateId = (req, res, next) => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID parameter"
    });
  }
  
  req.params.id = id; // Convert to number
  next();
};