import React, { useState } from 'react'
import MovieLists from './components/MovieLists'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

const App = () => {

  // current movie list set in a usestate
const [movies, setMovies] = useState([
        {
          title: "Inception",
          description: "A skilled thief is offered a chance to have his criminal history erased if he can successfully perform inception: planting an idea into a person's subconscious.",
          posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
          rating: 8.8,
          trailer: "https://www.youtube.com/embed/8hP9D6kZseM"
        },
        {
          title: "The Shawshank Redemption",
          description: "Wrongly accused, a banker forms an unlikely friendship with a fellow inmate and fights to find hope and freedom behind bars.",
          posterURL: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
          rating: 9.3,
          trailer: "https://www.youtube.com/embed/PLl99DlL6b4"
        },
        {
          title: "The Dark Knight",
          description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham with the emergence of the Joker, a rising criminal mastermind.",
          posterURL: "https://tse2.mm.bing.net/th?id=OIP.zVwg0iGZxaof8gbQWumGKAHaLH&pid=Api",
          rating: 9.0,
          trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
        },
        {
          title: "Interstellar",
          description: "A group of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival as Earth becomes uninhabitable.",
          posterURL: "https://tse4.mm.bing.net/th?id=OIP.LnQQ18LsX2aTL8ib_ZSY6wHaKq&pid=Api",
          rating: 8.6,
          trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
        },
        {
          title: "One Piece",
          description: "One Piece follows Monkey D. Luffy, a spirited pirate with rubber powers, on an epic journey to find the legendary treasure, One Piece",
          posterURL: "https://tse1.mm.bing.net/th?id=OIP.L2qsIdHTW0s-Q7BDDV_8ewHaKe&pid=Api",
          rating: 8.6,
          trailer: "https://www.youtube.com/embed/BG89ff1tjLU"
        },
        {
          title: "Forrest Gump",
          description: "A man with a low IQ recounts the early years of his life and how he inadvertently influenced major historical events.",
          posterURL: "https://tse2.mm.bing.net/th?id=OIP.VHctBEwo2T8a8JQtSMUFngHaK-&pid=Api",
          rating: 8.8,
          trailer: "https://www.youtube.com/embed/bLvqoHBptjg"
        },
        {
          title: "Pulp Fiction",
          description: "The lives of two hitmen, a boxer, and a gangster's wife intertwine in four tales of violence and redemption.",
          posterURL: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
          rating: 8.9,
          trailer: "https://www.youtube.com/embed/tGpTpVyI_OQ"
        },
        {
          title: "The Matrix",
          description: "A computer hacker learns that the world he lives in is a simulated reality and joins a rebellion to free humanity.",
          posterURL: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg",
          rating: 8.7,
          trailer: "https://www.youtube.com/embed/m8e-FF8MsqU"
        },
        {
          title: "Black Clover",
          description: "Black Clover follows Asta, a boy born without magic in a world of mages, striving to become the Wizard King",
          posterURL: "https://i5.walmartimages.com/asr/2e69923a-d525-408f-adf4-0d484eec88ce.4c2364882690b46cb58be3eca96135c8.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
          rating: 8.5,
          trailer: "https://www.youtube.com/embed/PrgxJ1_sUcs"
        },
        {
          title: "The Grand Budapest Hotel",
          description: "A quirky concierge and his protégé get entangled in a murder mystery at a famous European hotel between the wars.",
          posterURL: "https://tse3.mm.bing.net/th?id=OIP.EsMOyqH-MfNoLp455Wk_EgHaLC&w=474&h=474&c=7",
          rating: 8.1,
          trailer: "https://www.youtube.com/embed/1Fg5iWmQjwk"
        }
      ])

  return (
    <div>
      <Routes>
        <Route path='/' element={<MovieLists movies={movies} setMovies={setMovies} />} />
        <Route path='/moviedetails/:title' element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  )
}

export default App