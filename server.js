const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const addUserToViews = require('./middleware/addUserToViews');
const Coach = require('./models/coach');
require('dotenv').config();
require('./config/database');

// Controllers
const authController = require('./controllers/auth');
const isSignedIn = require('./middleware/isSignedIn');

const app = express();
// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : '3000';

const path = require('path');
// MIDDLEWARE

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride('_method'));
// Morgan for logging HTTP requests
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

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
  const allCoaches = await Coach.find();
  res.render('coaches/index.ejs', { coaches: allCoaches});
});

// new route
app.get('/coaches/new', async (req, res) => {
  res.render('coaches/new.ejs');
})

// show route
app.get('/coaches/:coachId', async (req, res) => {
  const viewedCoach = await Coach.findById(req.params.coachId);
  res.render('coaches/show.ejs', { coach: viewedCoach });
});

// create 
app.post('/coaches', async (req, res) => {
  await Coach.create(req.body);
  res.redirect('/coaches');
});

// delete
app.delete('/coaches/:coachId', async (req, res) => {
  await Coach.findByIdAndDelete(req.params.coachId);
  res.redirect('/coaches');
});

// edit
app.get('/coaches/:coachId/edit', async (req, res) => {
  const viewedCoach = await Coach.findById(req.params.coachId);
  res.render('coaches/edit.ejs', {
    coach: viewedCoach,
  });
});

// update
app.put('/coaches/:coachId', async (req, res) => {
  await Coach.findByIdAndUpdate(req.params.coachId, req.body);
  res.redirect(`/coaches/${req.params.coachId}`);
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
