const express = require('express');
const router = express.Router();
const { ensureGuest, ensureAuth } = require('../middleware/auth');

// Login/Landing Page
// GET /
router.get('/', ensureGuest, (req, res) => {
	res.render('login', {
		layout: 'login',
	});
});

// Dashboard Page
// GET /
router.get('/dashboard', ensureAuth, (req, res) => {
	res.render('dashboard');
});

// Logout User
router.get('/logout', (req, res) => {
	req.logOut();
	res.render('/');
});

module.exports = router;
