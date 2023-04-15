import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import RouterWrappedApp from './App';
import './styles/main.css';
import { setupStore } from './redux/store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterWrappedApp />
    </Provider>
  </React.StrictMode>
);
