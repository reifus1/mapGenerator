const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Getting all
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch {
        res.status(500).json({ message: err.message }); // eslint-disable-line
    }
});

// Geting one
router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
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
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.email != null) {
        res.body.email = req.body.email;
    }
    if (req.body.name != null) {
        res.user.name = req.body.name;
    }
    if (req.body.isActive != null) {
        res.user.isActive = req.body.isActive;
    }
    if (req.body.loginCount != null) {
        res.user.loginCount = req.body.loginCount;
    }
    res.user.updated = Date.now();
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting one
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'User deleted.'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'User not found.'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message});
    }
    res.user = user;
    next();
}

module.exports = router;