import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directorData, setDirectorData] = useState([])

  useEffect(() => {fetch('http://localhost:4000/directors')
  .then(response=>response.json())
  .then(data => setDirectorData(data))}, [])

  if(!directorData)
    return <p>Loading Directors...</p>

  return (
    <>
      <header>
      <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorData.map(director =>
        (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie => {
                return <li key={movie}>{movie}</li>
              })}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
