import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { RootState, setupStore } from './redux/store';
import { PreloadedState } from '@reduxjs/toolkit';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}

function entryClient() {
  const storeByServer = setupStore(window.__PRELOADED_STATE__);
  delete window.__PRELOADED_STATE__;
  ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <BrowserRouter>
      <Provider store={storeByServer}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

entryClient();
