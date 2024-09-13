const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
    imageurl: String,
    phase: String,
    activity: String,
    benefits: String,
    createdby: String
});

const Activity = mongoose.model('travels', travelSchema);

module.exports = Activity;
