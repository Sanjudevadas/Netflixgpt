import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies prop:", movies); // Debugging

  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available</p> {/* ✅ Handle empty state */}
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {movies.map((movie, index) => (
          <MovieCard key={index} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
