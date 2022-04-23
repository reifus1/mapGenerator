const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const userSchema = new mongoose.Schema({
    uid: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: 1,
    },
    loginCount: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin, 'Book');

module.exports = mongoose.model('User', userSchema);