const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId
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
        required: true,
        default: 1,
    },
    loginCount: {
        type: Decimal,
        default: 0
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated: {
        type: Date,
    }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);