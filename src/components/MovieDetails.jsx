import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDetails = ({movies}) => {

    const {title} = useParams()

    const movie = movies.find((movie)=>(movie.title === title))

    if(!movie) return <p>Movie not available at the moment</p>

  return (
    <div className='md:px-8 p-2 space-y-2 py-8 h-screen overflow-y-hidden bg-gray-400 '>
        <iframe src={movie.trailer} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='rounded-2xl border-2 border-gray-900 md:w-185 md:h-104 h-100 w-full   '></iframe>
        <p className='font-bold '>{movie.title} </p>
        <p className='md:w-185 ' >{movie.description} </p>
        <Link to={"/"}>
        <button className='bg-amber-900 px-4 py-1 border-1 border-amber-900 text-white rounded-md cursor-pointer'>Back to movies</button>
        </Link>
    </div>
  )
}

export default MovieDetails