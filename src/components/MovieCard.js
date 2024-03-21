import {Link} from 'react-router-dom';

function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movie/${id}`} className="nav-link">View Info</Link>
    </article>
  );
};

export default MovieCard;