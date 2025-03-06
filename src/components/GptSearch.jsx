import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetions from './GptMovieSuggetions'
import netflixbg from "../assets/netflixbg.jpg"
const GptSearch = () => {
  return (
    <div>

        <div className='absolute -z-10'>
            <img src={netflixbg} alt="" />
        </div>
        <GptSearchBar/>
        <GptMovieSuggetions/>
        </div>
  )
}

export default GptSearch