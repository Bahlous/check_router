import React from 'react';
import { Card, Rate } from 'antd';
import "../App.css"
// import Description from './Description';
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  return (
    <Card
      cover={<img alt={movie.title} src={movie.posterUrl} />}
      title={movie.title}
    >
      <p>{movie.description}</p>
      <Rate disabled value={movie.rate} />
      
      <br />
      <br />
      <Link to={`/movie/${movie.id}`} state={{ from: "MovieList" }}>
        See Movie Details
      </Link>      </Card>
  );
};

export default MovieCard;