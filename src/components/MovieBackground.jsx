import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

 

  return (
 
         
<div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden">

{trailerVideo?.key ? (
   <div className="relative w-full h-screen ">

    
        <iframe

        className="absolute w-full h-full "
         // className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
       
      </div>

      ) : (
        <p className="text-white text-center">No trailer available</p>
      )}
    </div>
  );
};

export default MovieBackground;
