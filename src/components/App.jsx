// import { useState } from 'react';
import { lazy, Suspense } from 'react'; //
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Header } from './Header/header';
import { Container } from './Container/Container';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

import 'react-toastify/dist/ReactToastify.css';
// import Style from '../style/App.module.css'

const HomeLazy = lazy(() => import('page/Home'));
const MoviesLazy = lazy(() => import('page/Movies'));
const MoviesByIdLazy = lazy(() => import('page/MoviesById'));
const CastLazy = lazy(() => import('./Cast/Cast'));
const ReviewsLazy = lazy(() => import('page/MoviesById'));

const NotFoundLazy = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Container>
        <ToastContainer />
        <Header>
          <nav>
            <Navigation />
          </nav>
        </Header>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomeLazy />} />
            <Route path="/movies" element={<MoviesLazy />} />
            <Route path="/movies/:moviesId" element={<MoviesByIdLazy />}>
              <Route path="cast" element={<CastLazy />} />
              <Route path="reviews" element={<ReviewsLazy />} />
            </Route>
            <Route path="*" element={<NotFoundLazy />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
