import 'babel-polyfill';
import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { entryRouterConfigList } from '@router';
import App from './app';

render(
  <Router>
    <Suspense fallback={null}>
      {
        entryRouterConfigList.map(({ path, component }) => {
          return <Route key={path} path={path} component={component} />;
        })
      }
      <Route path="/" component={App} />
      <Redirect to="/login" />
    </Suspense>
  </Router>,
  document.getElementById('app'),
);
