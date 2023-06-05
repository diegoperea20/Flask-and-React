// routes.js
import { lazy } from 'react';

const Home = lazy(() => import('./components/Home'));
const Tasks = lazy(() => import('./components/Tasks'));

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/tasks',
    component: Tasks
  }
];

export default routes;
