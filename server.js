require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

/**
 *  Database
 */

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to db'));

app.use(express.json());

/**
 *  Routes
 */

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.get("/", (req, res) => {
    res.render("index", { title: "Login" });
  });

/**
 *  Config
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/**
 *  App Listening
 */

app.listen(3000, () => console.log('Server Started'));
