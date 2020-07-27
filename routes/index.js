const express = require('express');
const router = express.Router();

// Login/Landing Page
// GET /
router.get('/', (req, res) => {
	res.render('login', {
		layout: 'login',
	});
});

// Dashboard Page
// GET /
router.get('/dashboard', (req, res) => {
	res.render('dashboard');
});

module.exports = router;
