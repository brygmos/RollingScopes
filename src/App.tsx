import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

export default RouterWrappedApp;
