const express = require('express');
const router = express.Router();

// Login/Landing Page
// GET /
router.get('/', (req, res) => {
	res.render('Login');
});

// Dashboard Page
// GET /
router.get('/dashboard', (req, res) => {
	res.render('Dashboard');
});

module.exports = router;
