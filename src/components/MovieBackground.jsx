//import { useEffect } from "react";
//import { API_OPTIONS } from "../utils/constants";
import {  useSelector } from "react-redux";
//import { addTrailerVideo } from "../utils/movieSlice";

const MovieBackground = ({ movieId }) => {
  
  const trailerVideos = useSelector((store) => store.movies.trailerVideos); // ✅ Get from Redux


  return (
    <div className="absolute top-0 left-0 w-full h-[80vh] -z-10 overflow-hidden">
      {trailerVideos?.key && ( // ✅ Use Redux store value
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerVideos.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideos.key}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MovieBackground;
