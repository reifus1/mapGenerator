require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// DB CONNECTION
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to db'));

app.use(express.json());

// ROUTES
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// APP LISTENING
app.listen(3000, () => console.log('Server Started'));
