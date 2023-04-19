import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import RouterWrappedApp from './App';
import { App } from './App';
import './styles/main.css';
import { setupStore } from './redux/store';
import { RouterProvider } from 'react-router-dom';

export const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterWrappedApp />
    </Provider>
  </React.StrictMode>
);
// ReactDOM.hydrateRoot(document.getElementById('app'), <p>ghhgfhjg</p>);
// ReactDOM.hydrateRoot(document.getElementById('app'), <RouterWrappedApp />);

// ReactDOM.hydrateRoot(
//   document.getElementById('app') as HTMLElement,
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>{' '}
//   </React.StrictMode>
// );
