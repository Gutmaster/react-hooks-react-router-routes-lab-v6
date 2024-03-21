import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actorData, setActorData] = useState([])

  useEffect(() => {fetch('http://localhost:4000/actors')
  .then(response=>response.json())
  .then(data => setActorData(data))}, [])

  if(!actorData)
    return <p>Loading Actors...</p>

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
      <h1>Actors Page</h1>
        {actorData.map(actor =>
        (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map(movie => {
                return <li key={movie}>{movie}</li>
              })}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
