import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import MovieBackground from './MovieBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview } = mainMovie;

  // Assume you have the trailer URL
  const trailerUrl = "https://path-to-trailer.mp4";

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} trailerUrl={trailerUrl} />
      <MovieBackground movieId={id}/>
    
    </div>
  );
};

export default MainContainer;
