import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {fetch('http://localhost:4000/movies')
  .then(response=>response.json())
  .then(data => setMovieData(data))}, [])

  return (
    <>
      <header>
      <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        {movieData.map(movie => <MovieCard key={movie.id} title={movie.title} id={movie.id}/>)}
      </main>
    </>
  );
};

export default Home;
