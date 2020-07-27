const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');

// Load Config
dotenv.config({ path: './config/config.env' });

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

// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
