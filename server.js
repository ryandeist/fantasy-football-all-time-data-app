const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const addUserToViews = require('./middleware/addUserToViews');
require('dotenv').config();
require('./config/database');

// Controllers
const authController = require('./controllers/auth');
const isSignedIn = require('./middleware/isSignedIn');

const app = express();
// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : '3000';

// MIDDLEWARE

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride('_method'));
// Morgan for logging HTTP requests
app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);

app.use(addUserToViews);

// Public Routes
app.get('/', async (req, res) => {
  res.render('index.ejs');
});

// index route
app.get('/coaches', async (req, res) => {
  res.render('coaches/index.ejs');
});

// show route
app.get('/coaches/:coachId', async (req, res) => {
  res.render('coaches/show.ejs');
});

// create 
app.post('/coaches', async (req, res) => {
  res.render('coaches/index.ejs');
});

// delete
app.delete('/coaches/:coachId', async (req, res) => {
  res.render('coaches/show.ejs');
});

// edit
app.get('/coaches/:coachId/edit', async (req, res) => {
  res.render('coaches/show.ejs');
});

// update
app.put('/coaches/:coachId', async (req, res) => {
  res.render('coaches/show.ejs');
});

app.use('/auth', authController);

// Protected Routes
app.use(isSignedIn);

app.get('/protected', async (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to the party ${req.session.user.username}.`);
  } else {
    res.sendStatus(404);
    // res.send('Sorry, no guests allowed.');
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`The express app is ready on port ${port}!`);
});
