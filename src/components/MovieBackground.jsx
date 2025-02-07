import React from "react";
import { API_OPTIONS } from "../utils/constants";

const MovieBackground = ({ movieId }) => {

  const getMovieVideos = async ()=>{

    const data = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}/videos`,API_OPTIONS)
  }
  return (
    <div className="absolute top-0 left-0 w-full h-[80vh] -z-10">
     
    </div>
  );
};

export default MovieBackground;
