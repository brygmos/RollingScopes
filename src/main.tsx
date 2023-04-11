import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterWrappedApp from './App';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    <RouterWrappedApp />
  </React.Fragment>
);
