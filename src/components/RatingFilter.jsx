import React from 'react';
import { Rate } from 'antd';
import "../App.css"

const RatingFilter = ({ filterRating, setFilterRating }) => {
  return (
    <div className="rating-filter">
      <Rate
        allowHalf
        value={filterRating}
        onChange={(value) => setFilterRating(value)} // Mise à jour du filtre
      />
    </div>
  );
};

export default RatingFilter;