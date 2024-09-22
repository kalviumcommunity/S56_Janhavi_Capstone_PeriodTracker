const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const Activity = require('./models/activity');
const Usermodel = require('./models/user');

// Rate limiter: maximum of 5 requests per IP per 15 minutes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5, 
    message: 'Too many requests, please try again later.',
});

// Apply the rate limiter to all routes
router.use(limiter);

// Middleware to validate activity data
const validateActivityData = (data) => {
    if (!data.activity || !data.imageurl || !data.phase || !data.benefits || !data.createdby) {
        throw new Error('Missing required fields');
    }
};

// Get all activities
router.get('/activity', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (err) {
        console.error('Error fetching activities:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new activity
router.post('/activity', async (req, res) => {
    const { activity, imageurl, phase, benefits, createdby } = req.body;

    try {
        validateActivityData(req.body);

        const newActivity = new Activity({
            activity,
            imageurl,
            phase,
            benefits,
            createdby,
        });

        await newActivity.save();
        res.status(201).json(newActivity);
    } catch (err) {
        console.error('Error creating new activity:', err.message);
        res.status(400).json({ message: err.message });
    }
});

// Delete an activity by ID
router.delete('/activity/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const deletedActivity = await Activity.findByIdAndDelete(id);
        if (!deletedActivity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity deleted successfully', deletedActivity });
    } catch (err) {
        console.error('Error deleting activity:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update an activity by ID
router.put('/activity/:id', async (req, res) => {
    const id = req.params.id;
    const { activity, imageurl, phase, benefits, createdby } = req.body;

    if (!activity || !imageurl || !phase || !benefits || !createdby) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        validateActivityData(req.body);

        const updatedActivity = await Activity.findByIdAndUpdate(id, {
            activity,
            imageurl,
            phase,
            benefits,
            createdby,
        }, { new: true });

        if (!updatedActivity) {
            return res.status(404).json({ message: 'Activity not found' });
        }

        res.status(200).json(updatedActivity);
    } catch (err) {
        console.error('Error updating activity:', err.message);
        res.status(400).json({ message: err.message });
    }
});

// User signup route with rate limiting
router.post('/signup', limiter, async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const emailVerify = await Usermodel.findOne({ email });
        if (emailVerify) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new Usermodel({
            name,
            email,
            password,
        });

        await newUser.save();
        res.status(201).json({ message: 'Congrats! You signed up successfully' });
    } catch (error) {
        console.error('Error while signing up:', error.message);
        res.status(500).json({ message: 'Error while signing up' });
    }
});

// User login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Usermodel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found. Please create an account.' });
        }

        // Compare passwords in plain text (not secure)
        if (user.password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Incorrect password. Please try again.' });
        }
    } catch (error) {
        console.error('Error while logging in:', error.message);
        res.status(500).json({ message: 'Error while logging in' });
    }
});

module.exports = router;
