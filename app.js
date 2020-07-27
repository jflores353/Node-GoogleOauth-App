const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');

// Load Config
dotenv.config({ path: './config/config.env' });

// Passport Config
require('./config/passport')(passport);

connectDB();

const app = express();

// Logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Express-Handlebars Middleware
// This is snippet is from npm page, changes extension name from .handlebars => .hbs,
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' })); // defaultLayout: 'main' is required here according to docs
app.set('view engine', '.hbs');

// Sessions *** always goes above Passport Middleware
app.use(
	session({
		secret: 'keyboard cat',
		resave: false, // false if we don't want to save a session if nothing is modified
		saveUninitialized: false, // false - don't create a session until something is stored
		// cookie: { secure: true }, // omit this line does NOT work with https
	})
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
