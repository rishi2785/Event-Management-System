const express = require('express');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, admin, createEvent); // Only admins can create events
router.get('/', getEvents); // Anyone can view events
router.put('/:id', protect, admin, updateEvent); // Only admins can update events
router.delete('/:id', protect, admin, deleteEvent); // Only admins can delete events

module.exports = router;
