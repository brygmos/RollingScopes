import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../router';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<AboutUs />} path={'/'} />
      <Route element={<AboutUs />} path={'/about'} />
      <Route element={<NotFound />} path={'/404'} />
    </Routes>
  );
};

export default AppRouter;
