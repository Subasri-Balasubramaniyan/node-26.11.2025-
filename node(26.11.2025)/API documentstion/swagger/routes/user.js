const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/user", (req, res) => {
  res.status(201).json(req.body);
});


module.exports = router;
