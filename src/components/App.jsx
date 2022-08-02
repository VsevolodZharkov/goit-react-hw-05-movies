import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Header } from './Header/header';
import { Container } from './Container/Container';
import { Home } from 'page/Home';
import { Movies } from 'page/Movies'
import { MoviesById } from 'page/MoviesById'
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews'
import { NotFound } from 'page/NotFound';
export const App = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Navigation />
          </nav>
        </Header>
        <Routes>
        	<Route path="/" element={<Home />} />
        	<Route path="/movies" element={ <Movies />} />
					<Route path="/movies/:moviesId" element={<MoviesById />} >
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
					<Route path="*" element={<NotFound />} />
      	</Routes>
      </Container>
    </>
  );
};
