import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import MovieBackground from './MovieBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null; // ✅ Avoid errors when movies array is empty

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie; // ✅ Destructure `id` safely

  // Assume you have the trailer URL
  const trailerUrl = "https://path-to-trailer.mp4";

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} trailerUrl={trailerUrl} />
      <MovieBackground movieId={id} /> {/* ✅ Pass `id` properly */}
    </div>
  );
};

export default MainContainer;
