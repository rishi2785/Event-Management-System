const Event = require('../models/eventModel');

// Create an Event
const createEvent = async (req, res) => {
    const { title, description, category, date, capacity } = req.body;

    try {
        const event = await Event.create({
            title,
            description,
            category,
            date,
            capacity,
            ticketsAvailable: capacity, // Initially, ticketsAvailable equals capacity
        });

        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Events
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an Event
const updateEvent = async (req, res) => {
    const { id } = req.params;

    try {
        const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
        if (!event) return res.status(404).json({ message: 'Event not found' });

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an Event
const deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        const event = await Event.findByIdAndDelete(id);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        res.status(200).json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };
