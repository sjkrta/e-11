import React from "react";

const StarRating = ({ rating }) => {
  rating = rating || 0;
  const fullStarRating = Math.floor(rating);

  const starIcon = <i className="fas fa-star" />;
  const starHalfIcon = <i className="fas fa-star-half-stroke" />;
  const starEmptyIcon = <i className="far fa-star" />;

  const star = new Array(Math.floor(rating)).fill(starIcon);
  const starHalf = new Array(Math.round(rating - fullStarRating)).fill(starHalfIcon);
  const starEmpty = new Array(5 - (star.length + starHalf.length)).fill(starEmptyIcon)

  return (
    <div>
      <div className="text-warning">
        {star}{starHalf}{starEmpty}
      </div>
    </div>
  );
};

export default StarRating;
