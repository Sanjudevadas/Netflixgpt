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
<div className="p-4 text-black">
<h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
<div className="flex overflow-x-scroll ">
     
      <div className="flex">
        {movies.map((movie, index) => (
          <MovieCard key={index} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
</div>
     
  
  );
};

export default MovieList;
