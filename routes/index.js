const express = require('express');
const router = express.Router();
const { ensureGuest, ensureAuth } = require('../middleware/auth');

const Story = require('../models/Stories');

// Login/Landing Page
// GET /
router.get('/', ensureGuest, (req, res) => {
	res.render('login', {
		layout: 'login',
	});
});

// Logout User
router.get('/logout', (req, res) => {
	req.logOut();
	res.render('/');
});

// Dashboard Page
// GET /
router.get('/dashboard', ensureAuth, async (req, res) => {
	try {
		const stories = await Story.find({ user: req.user.id }).lean();
		res.render('dashboard', {
			name: req.user.firstName,
			stories,
		});
	} catch (error) {
		console.error(error);
		res.render('error/500');
	}
});

module.exports = router;
