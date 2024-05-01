const express = require('express');
const router = express.Router();
const Activity = require('./models/activity');
const Usermodel = require("./models/user");
const bcrypt = require('bcrypt');

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

router.post('/signup', async (req, res) => {
    const data = req.body;
    try{
        const emailverify = await Usermodel.findOne({email:data.email});
        if (emailverify){
            return res.send("User already exists!")
        }
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(data.password, salt);
        const newUser = new Usermodel({
            name : data.name,
            email : data.email,
            password : hashPass,
            age : data.age
        });
        await newUser.save();
        res.send("Congrats! You signed up successfully");
    }
    catch (error){
        res.status(500).send("Error while posting data:" + error.message);
    }
});

router.post("/login", async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await Usermodel.findOne({name});
        if (!user) {
            return res.status(404).send("User not found. Please create an account.");
        }
        const hashPasswordMatch = await bcrypt.compare(password, user.password);
        if (hashPasswordMatch) {
            res.send("You logged in successfully!")
        } else {
            res.status(401).send("Incorrect password");
        }
    } catch (error) {
        res.status(500).send("Error while comparing passwords: " + error.message);
    }
});

router.post("/login", async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await Usermodel.findOne({ name });
        if (!user) {
            return res.status(404).send("User not found. Please create an account.");
        }
        const hashPasswordMatch = await bcrypt.compare(password, user.password);
        if (hashPasswordMatch) {
            res.send("You logged in successfully!");
        } else {
            res.status(401).send("Incorrect password");
        }
    } catch (error) {
        res.status(500).send("Error while comparing passwords: " + error.message);
    }
});

module.exports = router;
