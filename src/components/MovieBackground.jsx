import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  console.log("Redux Trailer Video:", trailerVideo);

  return (
    <div className="absolute top-0 left-0 w-full h-[80vh] -z-10 overflow-hidden">
      {trailerVideo?.key ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-white text-center">No trailer available</p>
      )}
    </div>
  );
};

export default MovieBackground;
