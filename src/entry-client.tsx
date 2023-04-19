import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterWrappedApp, { App } from './App';
import AppRouter from './components/AppRouter';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './main';

// ReactDOM.hydrateRoot(
//   document.getElementById('app') as HTMLElement,
//   <BrowserRouter>
//     {/*<App />*/}
//     <AppRouter />
//   </BrowserRouter>
// );

// ReactDOM.hydrateRoot(
//   document.getElementById('app') as HTMLElement,
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

console.log('hydrated');
