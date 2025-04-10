import React from 'react'

const MovieCard = ({title, description, posterURL, rating}) => {
  return (
    <div className='rounded-md p-3 space-y-2 shadow-md '>
        <img src={posterURL} alt="poster img" className='w-full h-90 object-cover ' />
        <h1 className='font-bold '>{title}</h1>
        <p>{description}</p>
        <p>{rating}</p>
    </div>
  )
}

export default MovieCard