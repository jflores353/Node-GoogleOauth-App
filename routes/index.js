const express = require('express');
const router = express.Router();

// Login/Landing Page
// GET /
router.get('/', (req, res) => {
	res.render('login-view', {
		layout: 'login-layout',
	});
});

// Dashboard Page
// GET /
router.get('/dashboard', (req, res) => {
	res.render('dashboard-view', {
		layout: 'dashboard-layout',
	});
});

module.exports = router;
