const Booking = require('../models/bookingModel');
const Event = require('../models/eventModel');

// Book Tickets
const bookTickets = async (req, res) => {
    const { eventId, tickets } = req.body;

    try {
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        if (event.ticketsAvailable < tickets) {
            return res.status(400).json({ message: 'Not enough tickets available' });
        }

        const booking = await Booking.create({
            user: req.user.id,
            event: eventId,
            tickets,
        });

        event.ticketsAvailable -= tickets; // Decrease available tickets
        await event.save();

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Bookings for User
const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id }).populate('event');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { bookTickets, getUserBookings };
