const express = require('express');
const router = express.Router();

// Login/Landing Page
// GET /
router.get('/', (req, res) => {
	res.send('Login');
});

// Dashboard Page
// GET /
router.get('/dashboard', (req, res) => {
	res.send('Dashboard');
});

module.exports = router;
