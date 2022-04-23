const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Getting all
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch {
        res.status(500).json({ message: err.message });
    }
});

// Geting one
router.get('/:id', (req, res) => {
    res.send(`User id: ${req.params.id}`);
});

// Creating one
router.post('/', async (req, res) => {
    const user = new User({
        id: req.body.id,
        email: req.body.email,
        name: req.body.name,
        isActive: 1,
        loginCount: 0,
        created: Date.now(),
        updated: Date.now()
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Updating one
router.patch('/:id', (req, res) => {

});

// Deleting one
router.delete('/:id', (req, res) => {

});

module.exports = router;