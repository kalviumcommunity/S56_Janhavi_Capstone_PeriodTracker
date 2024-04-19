import React, { useState } from 'react';
import './card.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Card(props) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/activity/${props.props._id}`);
      setDeleted(true);
      alert('Activity deleted successfully!');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log('Activity not found.');
        } else if (error.response.status >= 500) {
          alert('Server error. Please try again later.');
        } else {
          alert('Error deleting activity. Please try again later.');
        }
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  if (deleted) {
    return null;
  }

  return (
    <div className="cards">
      <div className="card">
        <h1><b>Activity: {props.props.activity}</b></h1>
        <img src={props.props.imageurl} alt="Activity Image" />
        <p><b className='underlined'>Phase:</b> {props.props.phase}</p>
        <p><b className='underlined'>Benefit:</b> {props.props.benefits}</p>
        <p><b className='underlined'>Created by:</b> {props.props.createdby}</p>
        <div className="updel">
          <Link to={`/update/${props.props._id}`}><button id='upd'>Update</button></Link>
          <button id='del' onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
