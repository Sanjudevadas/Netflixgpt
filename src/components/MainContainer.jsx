import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import MovieBackground from './MovieBackground'

const MainContainer = () => {

    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
  return (
    <div>
      <VideoTitle/>
      <MovieBackground/>
      
      </div>
  )
}

export default MainContainer