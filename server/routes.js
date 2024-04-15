const express = require('express');
const router = express.Router();
const Activity = require('./models/activity');

const validateActivityData = (data) => {
    if (!data.activity || !data.imageurl || !data.phase || !data.benefits || !data.createdby) {
        throw new Error('Missing required fields');
    }
};

router.get('/activity', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (err) {
        console.error('Error fetching activities:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

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

module.exports = router;
