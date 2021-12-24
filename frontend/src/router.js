import { lazy } from 'react';

const routerList = [
  {
    path: '/login',
    component: lazy(() => import(/* webpackChunkName: 'login' */ './page/Login')),
  },
  {
    path: '/home',
    component: lazy(() => import(/* webpackChunkName: 'login' */ './page/Home')),
  },
];

export default routerList;