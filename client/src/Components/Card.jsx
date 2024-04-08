import React from 'react';
import './card.css';

function Card(props) {
  console.log(props);

  return (
    <div className="cards">
      <div className="card">
        <h1><b>Activity: {props.props.activity}</b></h1>
       
        <img src={props.props.imageurl} alt="Activity Image" />
        <p><b className='underlined'>Phase:</b> {props.props.phase}</p>
        <p><b className='underlined'>Benefit:</b> {props.props.benefits}</p>
        <p><b className='underlined'>Created by:</b> {props.props.createdby}</p>
      </div>
    </div>
  );
}

export default Card;
