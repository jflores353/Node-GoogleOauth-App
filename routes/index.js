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

// Logout User
router.get('/logout', (req, res) => {
	req.logOut();
	res.render('/');
});

module.exports = router;
