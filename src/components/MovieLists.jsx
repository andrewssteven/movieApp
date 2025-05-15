import React, { useState } from 'react'
import MovieCard from './MovieCard'
import Filter from './Filter'

const MovieLists = ({movies, setMovies}) => {

//a usestate to save value of a new movie
const [newMovie, setNewMovie]  = useState({
        title: "",
        description: "",
        posterURL: "",
        rating: ""
  }
) 

// use sate to set filter movies and return the movies array list base on filter
const [filteredMovies, setFilteredMovies] = useState(movies) 

// this is to handle the input change in forms
const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({
      ...prev, [name]: value
    }));
  };

// this handles the form submit and return error is space is blank
const handleSubmit = (e) => {
    e.preventDefault();
    // this declare a variable  to store updated movies and  changes the rating from string to number/float
    setMovies( 
      [...movies, { ...newMovie, rating: parseFloat(newMovie.rating) }]
    )
    setFilteredMovies(
      [...movies, { ...newMovie, rating: parseFloat(newMovie.rating) }]
    )

    //alternative way to render movie list from filteredmovies 
  // // this declare a variable  to store updated movies and  changes the rating from string to number/float
  //   const updatedMovies = [...movies, { ...newMovie, rating: parseFloat(newMovie.rating) }];
  //   setMovies(updatedMovies)
  //   setFilteredMovies(updatedMovies)

    // this will reset the form back to blank
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

const filterMovies = (query, type) => {
    let filtered = [...movies];
    if (type === 'title') {
      filtered = filtered.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    } else if (type === 'rating') {
      filtered = filtered.filter(movie => movie.rating >= parseFloat(query));
    }
    setFilteredMovies(filtered);
  };


  return (
    <div className='my-8 '>
        {/* input to filter movies by title and by rating */}
        <Filter onFilter={filterMovies}/>

        {/* return movie list using map */}
        <div className='my-10 mx-5 gap-4 grid  grid-cols-1 md:grid-cols-4 '>
            {filteredMovies.map((movie) => (<MovieCard key={movie.index}
            title={movie.title} description={movie.description}
            posterURL={movie.posterURL} rating={movie.rating}
            />)) }
        </div>

        {/* the add new movie form area */}
        <div className='mx-5 grid'>
                <form action="" onSubmit={handleSubmit} className='space-y-4 border-2 rounded-md shadow-md  md:w-150 p-4  '>
                    <h1 className='text-center text-2xl font-bold  ' >Add Movie to List</h1>
                    <div className='flex space-x-16.5  '>
                      <label htmlFor="title">Title: </label>
                      <input
                      type="text"
                      placeholder='Title'
                      name='title'
                      value={newMovie.title}
                      onChange={handleChange}
                      required
                      className='border-2 border-blue-600 p-1 px-2 font-semibold outline-none text-black w-full  '
                      />
                    </div>

                    <div className='flex space-x-4   '>
                      <label htmlFor="description">Description: </label>
                      <input
                      type="text"
                      placeholder='Description'
                      name='description'
                      value={newMovie.description}
                      onChange={handleChange}
                      className='border-2 border-blue-600 p-1 px-2 font-semibold outline-none w-full '
                      />
                    </div>

                    <div className='flex space-x-6    '>
                      <label htmlFor="posterURL">PosterURL: </label>
                      <input
                      type="text"
                      placeholder='PosterURL'
                      name='posterURL'
                      value={newMovie.posterURL}
                      onChange={handleChange}
                      className='border-2 border-blue-600 p-1 px-2 font-semibold outline-none w-full '
                      />
                    </div>

                    <div className='flex space-x-13 '>
                      <label htmlFor="rating">Rating: </label>
                      <input
                      type="number"
                      placeholder='Ratings'
                      name='rating'
                      value={newMovie.rating}
                      onChange={handleChange}
                      step={"0.1"}
                      className='border-2 border-blue-600 p-1 px-2 font-semibold outline-none w-full '
                      required
                      />
                    </div>
                    <button type='submit' className='bg-blue-500 font-semibold px-4 py-1 text-white rounded-md float-right '>Add Movie</button>
                </form>
        </div>
    </div>
  )
}

export default MovieLists