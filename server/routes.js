const express = require('express');
const router = express.Router();
const Activity = require('./models/activity'); 

router.get('/activity', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post('/activity', async (req, res) => {
    const { activity, imageurl, phase, benefits, createdby } = req.body;

    try {
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
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
