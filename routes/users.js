const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Getting all
router.get('/', (req, res) => {
    res.send('All users');
});

// Geting one
router.get('/:id', (req, res) => {
    res.send(`User id: ${req.params.id}`);
});

// Creating one
router.post('/', (req, res) => {

});

// Updating one
router.patch('/:id', (req, res) => {

});

// Deleting one
router.delete('/:id', (req, res) => {

});

module.exports = router;