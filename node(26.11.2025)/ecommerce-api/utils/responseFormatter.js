// utils/responseFormatter.js

// Reusable response formatter with status code parameter
exports.success = (res, message, data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data
  });
};

exports.error = (res, message, code = 400) => {
  return res.status(code).json({
    status: "error",
    message
  });
};