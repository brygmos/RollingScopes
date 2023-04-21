import React from 'react';
import AppRouter from './components/AppRouter';
import { Header } from './components/Header';

import './styles/main.css';

export function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

// function RouterWrappedApp() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }
//
// export default RouterWrappedApp;
