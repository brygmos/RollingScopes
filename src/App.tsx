import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import './styles/App.css';

export function App() {
  return (
    <>
      {/*<h1>Hello world</h1>*/}
      <Header />
      <AppRouter />
    </>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
