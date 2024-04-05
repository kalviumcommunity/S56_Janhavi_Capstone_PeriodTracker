const express = require('express');
const router = express.Router();
const Activity = require('./models/activity'); 

router.get('/activity', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
