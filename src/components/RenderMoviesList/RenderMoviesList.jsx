import { Link, useLocation } from 'react-router-dom';

export const RenderMoviesList = ({data}) => {
	const location = useLocation();
  return (
    <>
      {data?.results.map(({ title, name, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from: location}}>
              {title ? title : name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
