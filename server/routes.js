const express = require('express');
const router = express.Router();
const Activity = require('./models/activity');
const Usermodel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

// Middleware to validate activity data
const validateActivityData = (data) => {
    if (!data.activity || !data.imageurl || !data.phase || !data.benefits || !data.createdby) {
        throw new Error('Missing required fields');
    }
};

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access denied. Token not provided.');

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Invalid token:', error.message);
        res.status(400).send('Invalid token.');
    }
};

// Get all activities
router.get('/activity', verifyToken, async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (err) {
        console.error('Error fetching activities:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new activity
router.post('/activity', verifyToken, async (req, res) => {
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
router.delete('/activity/:id', verifyToken, async (req, res) => {
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
router.put('/activity/:id', verifyToken, async (req, res) => {
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

// User signup route
router.post('/signup', async (req, res) => {
    const data = req.body;
    try {
        const emailVerify = await Usermodel.findOne({ email: data.email });
        if (emailVerify) {
            return res.status(400).send('User already exists!');
        }

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(data.password, salt);
        const newUser = new Usermodel({
            name: data.name,
            email: data.email,
            password: hashPass,
        });
        await newUser.save();
        res.send('Congrats! You signed up successfully');
    } catch (error) {
        console.error('Error while signing up:', error.message);
        res.status(500).send('Error while signing up');
    }
});

// User login route
router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await Usermodel.findOne({ name });
        if (!user) {
            return res.status(404).send('User not found. Please create an account.');
        }

        const hashPasswordMatch = await bcrypt.compare(password, user.password);
        if (hashPasswordMatch) {
            console.log('User:', user);
            const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).send('Incorrect password. Please try again.');
        }
    } catch (error) {
        console.error('Error while logging in:', error.message);
        res.status(500).send('Error while logging in');
    }
});

module.exports = router;
