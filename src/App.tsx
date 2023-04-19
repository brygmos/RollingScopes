import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { Header } from './components/Header';

export function App() {
  return (
    <>
      <Header />
      <p>hi from app tsx</p>
      <AppRouter />
    </>
  );
}

function RouterWrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RouterWrappedApp;
