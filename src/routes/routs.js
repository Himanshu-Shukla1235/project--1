// routes.js

const express = require("express");
const router = express.Router();

// Define your routes
router.get("/Login", (req, res) => {
res.render("Login")
});

module.exports = router;
