import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopMovies } from '../../axios/axios';

export const RenderList = () => {
  const [data, setDate] = useState([]);
	useEffect(() => {
		getPopMovies().then(res => {
			setDate(res?.results);
		});
	}, [])

  return (
    <>
      {data?.map(({ title, name, id }) => {
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
