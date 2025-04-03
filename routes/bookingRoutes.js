const express = require('express');
const { bookTickets, getUserBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, bookTickets); // Only authenticated users can book tickets
router.get('/mybookings', protect, getUserBookings); // Get bookings for the logged-in user

module.exports = router;
