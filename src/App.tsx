import React from 'react';
import AppRouter from './components/AppRouter';
import { Header } from './components/Header';

import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export function RouterWrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RouterWrappedApp;
