const mongoose = require("mongoose");

const travel = new mongoose.Schema({
    image: String,
    phase: String,
    activity: String,
    benefits: String,
    addedBy: String
});

const Activity = mongoose.model('travel', travel);

module.exports = Activity;
