import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getSerchMovies } from '../axios/axios';
import { RenderMoviesList } from '../components/RenderMoviesList/RenderMoviesList';
// import PropTypes from 'prop-types';
import Style from '../style/Movies.module.css';
const Movies = () => {
	const [nameFilm, setNameFilm] = useState('');
  const [query, setQuery] = useState('');
  const [data, setDate] = useState(null);

  useEffect(() => {
		if(nameFilm === '') {
			return
		}
    getSerchMovies(nameFilm).then(res => {
      if (!res) {
        return;
      }
      setDate(res);
    });
  }, [nameFilm]);

  const clearQuery = () => {
    setQuery('');
    document.getElementById('form').reset();
  };

  const handeleChange = event => {
    setQuery(event.target.value);
  };

  const handelSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Fill input');
      return;
    }
		setNameFilm(query)
    clearQuery();
  };

  return (
    <>
      <div className={Style.MoviesBar}>
        <header>
          <form className={Style.MoviesForm} id="form">
            <button
              type="submit"
              className={Style.MoviesFormButton}
              onClick={handelSubmit}
            >
              <span className={Style.MoviesFormButtonLabel}>Search</span>
            </button>

            <input
              onChange={handeleChange}
              className={Style.MoviesFormInput}
              type="text"
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
      <main>
        <section>
          <ul>{data?.results && <RenderMoviesList data={data} />}</ul>
        </section>
      </main>
    </>
  );
};
export default Movies;