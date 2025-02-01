import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "../moviesData"; 
import "../App.css"

function Description() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate(); // Permet de naviguer vers d'autres pages

  // Cherche le film correspondant à l'ID
  const movie = movies.find((movie) => movie.id === parseInt(id));

  // Vérifie si le film existe
  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="description-container" style={{ padding: "20px" }}>
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-description">{movie.description}</p>
      <div className="trailer-container">
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ marginTop: "20px" }}
      ></iframe></div>
      <div className="back-button" style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  );
}

export default Description;