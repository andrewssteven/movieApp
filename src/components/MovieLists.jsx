import React, { useState } from 'react'
import MovieCard from './MovieCard'
import Filter from './Filter'

const MovieLists = () => {

// current movie list set in a usestate
const [movies, setMovies] = useState([
        {
          title: "Inception",
          description: "A skilled thief is offered a chance to have his criminal history erased if he can successfully perform inception: planting an idea into a person's subconscious.",
          posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
          rating: 8.8
        },
        {
          title: "The Shawshank Redemption",
          description: "Wrongly accused, a banker forms an unlikely friendship with a fellow inmate and fights to find hope and freedom behind bars.",
          posterURL: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
          rating: 9.3
        },
        {
          title: "The Dark Knight",
          description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham with the emergence of the Joker, a rising criminal mastermind.",
          posterURL: "https://tse2.mm.bing.net/th?id=OIP.zVwg0iGZxaof8gbQWumGKAHaLH&pid=Api",
          rating: 9.0
        },
        {
          title: "Interstellar",
          description: "A group of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival as Earth becomes uninhabitable.",
          posterURL: "https://tse4.mm.bing.net/th?id=OIP.LnQQ18LsX2aTL8ib_ZSY6wHaKq&pid=Api",
          rating: 8.6
        },
        {
          title: "One Piece",
          description: "One Piece follows Monkey D. Luffy, a spirited pirate with rubber powers, on an epic journey to find the legendary treasure, One Piece",
          posterURL: "https://tse1.mm.bing.net/th?id=OIP.L2qsIdHTW0s-Q7BDDV_8ewHaKe&pid=Api",
          rating: 8.6
        },
        {
          title: "Forrest Gump",
          description: "A man with a low IQ recounts the early years of his life and how he inadvertently influenced major historical events.",
          posterURL: "https://tse2.mm.bing.net/th?id=OIP.VHctBEwo2T8a8JQtSMUFngHaK-&pid=Api",
          rating: 8.8
        },
        {
          title: "Pulp Fiction",
          description: "The lives of two hitmen, a boxer, and a gangster's wife intertwine in four tales of violence and redemption.",
          posterURL: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
          rating: 8.9
        },
        {
          title: "The Matrix",
          description: "A computer hacker learns that the world he lives in is a simulated reality and joins a rebellion to free humanity.",
          posterURL: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg",
          rating: 8.7
        },
        {
          title: "Black Clover",
          description: "Black Clover follows Asta, a boy born without magic in a world of mages, striving to become the Wizard King",
          posterURL: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-41d8-61f7-b2d8-c8714a6f159b/raw?se=2025-04-10T00%3A24%3A38Z&sp=r&sv=2024-08-04&sr=b&scid=d57a1b23-68bc-5a10-ba4e-2f1d9494b6bd&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-09T20%3A54%3A39Z&ske=2025-04-10T20%3A54%3A39Z&sks=b&skv=2024-08-04&sig=Wa1A21V%2BU1PXzx3UftzVptRD2iwTcnGa2fYg8KPmLqU%3D",
          rating: 8.5
        },
        {
          title: "The Grand Budapest Hotel",
          description: "A quirky concierge and his protégé get entangled in a murder mystery at a famous European hotel between the wars.",
          posterURL: "https://tse3.mm.bing.net/th?id=OIP.EsMOyqH-MfNoLp455Wk_EgHaLC&w=474&h=474&c=7",
          rating: 8.1
        }
      ])

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
    if (!newMovie.title || !newMovie.rating) {
      alert('Title and rating are required!');
      return;
    }
    // this changes the rating from string to number/float
    setMovies(prevMovies => [...prevMovies, { ...newMovie, rating: parseFloat(newMovie.rating) }]);
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
        <div className='my-10 mx-5 gap-4 grid grid-cols-4 '>
            {filteredMovies.map((movie) => (<MovieCard
            title={movie.title} description={movie.description}
            posterURL={movie.posterURL} rating={movie.rating}
            />)) }
        </div>

        {/* the add new movie form area */}
        <div className='mx-5 grid'>
                <form action="" onSubmit={handleSubmit} className='space-y-4 border-2 rounded-md shadow-md  w-150 p-4  '>
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