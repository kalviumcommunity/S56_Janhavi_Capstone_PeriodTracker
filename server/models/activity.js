const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    image: String,
    phase: String,
    activity: String,
    benefits: String,
    addedBy: String
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
