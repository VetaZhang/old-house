import { lazy } from 'react';

const entryRouterConfigList = [
  {
    path: '/login',
    component: lazy(() => import(/* webpackChunkName: 'login' */ './page/Login')),
  }
];

const routerConfigList = [
  {
    path: '/home',
    component: lazy(() => import(/* webpackChunkName: 'home' */ './page/Home')),
  },
];

export {
  entryRouterConfigList,
  routerConfigList
};