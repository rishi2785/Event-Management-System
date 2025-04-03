const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    capacity: { type: Number, required: true },
    ticketsAvailable: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
