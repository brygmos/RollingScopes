import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { Header } from './components/Header';
import './styles/App.css';

export function App() {
  return (
    <>
      <Header />
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
