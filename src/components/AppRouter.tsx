import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import Main from '../pages/Main';
import FormPage from '../pages/FormPage';
import Episodes from './Episodes';
import EpisodePage from '../pages/EpisodePage';

const AppRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Main />} path={'/'} />
      <Route element={<AboutUs />} path={'/about'} />
      <Route element={<EpisodePage />} path={'/episodes'} />
      <Route element={<EpisodePage />} path={'/episodes/:episodeNumber'} />
      <Route element={<FormPage />} path={'/form'} />
      <Route element={<NotFound />} path={'*'} />
    </Routes>
  );
};

export default AppRouter;
