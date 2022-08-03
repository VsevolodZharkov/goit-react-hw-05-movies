import { Link } from 'react-router-dom';

export const RenderMoviesList = ({data}) => {
	console.log(data);
  return (
    <>
      {data?.results.map(({ title, name, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} >
              {title ? title : name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
