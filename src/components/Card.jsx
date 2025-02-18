// Card.js
import React from 'react';

const Card = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
        {/* Replace with an actual image later */}
        <img src={imageSrc} alt="Card image" className="w-full h-64 object-cover" />
      </div>
      <h3 className="mt-4 text-xl font-semibold header-style" >{title}</h3>
      <p className="mt-2 text-style text-center">{description}</p>
     
    </div>
  );
};

export default Card;
