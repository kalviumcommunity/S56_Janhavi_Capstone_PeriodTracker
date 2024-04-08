import React, { useState } from 'react';
import './form.css';
import axios from 'axios';
import Navbar from './Components/Navbar';

function Form() {
    const [formData, setFormData] = useState({
        activity: '',
        imageurl: '',
        phase: '',
        benefits: '',
        createdby: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://s56-janhavi-capstone-periodtracker.onrender.com/activity', formData);
            setFormData({
                activity: '',
                imageurl: '',
                phase: '',
                benefits: '',
                createdby: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <Navbar/>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Activity:
                    <input
                        type="text"
                        name="activity"
                        value={formData.activity}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="imageurl"
                        value={formData.imageurl}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phase:
                    <input
                        type="text"
                        name="phase"
                        value={formData.phase}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Benefits:
                    <input
                        type="text"
                        name="benefits"
                        value={formData.benefits}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Created by:
                    <input
                        type="text"
                        name="createdby"
                        value={formData.createdby}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
