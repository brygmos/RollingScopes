import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import Main from '../pages/Main';
import Form from '../pages/Form';

const AppRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Main />} path={'/'} />
      <Route element={<AboutUs />} path={'/about'} />
      <Route element={<Form />} path={'/form'} />
      <Route element={<NotFound />} path={'*'} />
    </Routes>
  );
};

export default AppRouter;
