import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './update.css';

function Update() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [activityData, setActivityData] = useState({
        activity: '',
        imageurl: '',
        phase: '',
        benefits: '',
        createdby: '',
    });

    const fetchData = async () => {
      try {
          const response = await axios.get(`https://s56-janhavi-capstone-periodtracker.onrender.com/activity/${id}`);
          setActivityData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setActivityData({ ...activityData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3000/activity/${id}`, activityData);
            alert('Activity updated successfully!');
            navigate('/travel');
        } catch (error) {
            console.error('Error updating activity:', error);
            alert('Error updating activity. Please try again later.');
        }
    };

    useEffect(() => {
        fetchData(); 
    }, [id]); 

    return (
        <div>
            <Navbar />
            <div className="updatehere">
                <h1>Update your Activity here!</h1>
                <form className='updateform' onSubmit={handleSubmit}>
                    <label htmlFor="activity">Activity:</label>
                    <input
                        type="text"
                        id="activity"
                        name="activity"
                        value={activityData.activity}
                        onChange={handleChange}
                    />

                    <label htmlFor="imageURL">Image URL:</label>
                    <input
                        type="text"
                        id="imageURL"
                name="imageurl"
                        value={activityData.imageurl}
                        onChange={handleChange}
                    />

                    <label htmlFor="phase">Phase:</label>
                    <input
                        type="text"
                        id="phase"
                        name="phase"
                        value={activityData.phase}
                        onChange={handleChange}
                    />

                    <label htmlFor="benefits">Benefits:</label>
                    <input
                        type="text"
                        id="benefits"
                        name="benefits"
                        value={activityData.benefits}
                        onChange={handleChange}
                    />

                    <label htmlFor="createdBy">Created By:</label>
                    <input
                        type="text"
                        id="createdBy"
                        name="createdby"
                        value={activityData.createdby}
                        onChange={handleChange}
                    />

                    <button type="submit" id='sub'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Update;