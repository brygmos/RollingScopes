import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';

export const routes = [
  { path: '/about', component: AboutUs, exact: true },
  { path: '/404', component: NotFound, exact: true },
];
