import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movieInfo, setMovieInfo] = useState({})

  const params = useParams();
  const id = params.id

  fetch(`http://localhost:4000/movies/${id}`)
  .then(response=>response.json())
  .then((data) => {
    setMovieInfo(data)
  })

  if(!movieInfo.title)
    return <p>Loading Movie...</p>
  
  return (
    <>
      <header>
      <NavBar/>
      </header>
      <main>
        <h1>{movieInfo.title}</h1>
        <p>{movieInfo.time} Minutes</p>
        {movieInfo.genres.map(genre => <span key={genre}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
