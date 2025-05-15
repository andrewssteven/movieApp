import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({title, description, posterURL, rating}) => {
  return (
    <Link to={`/moviedetails/${title}`}>
    <div className='rounded-md p-3 space-y-2 shadow-md '>
        <img src={posterURL} alt="poster img" className='w-full h-90 object-cover ' />
        <div className=''>
          <h1 className='font-bold '>{title}</h1>
          <p>{description}</p>
          <p>{rating}</p>
        </div>
    </div>
    </Link>
  )
}

export default MovieCard