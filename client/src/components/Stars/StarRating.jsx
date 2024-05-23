import React, { useState, useEffect } from 'react';
import { GoStarFill, GoStar } from 'react-icons/go';
import './StarRating.css';

const StarRating = ({ totalStars, readOnly = false, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleClick = (value) => {
    if (!readOnly) {
      setRating(value);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${readOnly ? 'read-only' : ''}`}
            onClick={() => handleClick(starValue)}
          >
            {starValue <= rating ? (
              <GoStarFill className="star-icon filled" />
            ) : (
              <GoStar className="star-icon" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
