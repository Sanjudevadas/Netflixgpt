import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import MovieBackground from './MovieBackground'

const MainContainer = () => {

    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
  
    if (movies == null) return;
  
    const mainMovie = movies[0];
   console.log(mainMovie)
   const {orginal_title, overview} = mainMovie;
  
    return (
    <div>
      <VideoTitle title={orginal_title} overview={overview}/>
      <MovieBackground/>
      
      </div>
  )
}

export default MainContainer