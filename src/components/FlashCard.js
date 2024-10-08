import React from 'react';
import './FlashCard.css'; 

const FlashCard = ({ title, description, link }) => {
  return (
    <div className="col-sm">
      <h3>
        <a href={link} className="flash-card-link">{title}</a>
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default FlashCard;
