import { Link, Outlet } from "react-router-dom";
export const MoviesById = () => {
	return ( 
		<main>
			  <h1>MoviesById</h1>
				<button type="button">Go back</button>
				
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
		</main>
	)
}