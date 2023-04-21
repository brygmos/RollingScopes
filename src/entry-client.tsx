import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Store } from '@reduxjs/toolkit';

function entryClient(store: Store) {
  ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

entryClient(store);
