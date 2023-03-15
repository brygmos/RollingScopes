import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<Main />} path={'/'} />
      <Route element={<AboutUs />} path={'/about'} />
      <Route element={<NotFound />} path={'/notfound'} />
      <Route element={<NotFound />} path={'*'} />
    </Routes>
  );
};

export default AppRouter;
