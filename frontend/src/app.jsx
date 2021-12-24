import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './app.less';

const login = lazy(() => import(/* webpackChunkName: 'login' */ './pages/Login'));

class App extends React.Component {
  render() {
    return (<BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          {
            routerList.map(({ path, component }) => {
              return <Route key={path} path={path} component={component} />;
            })
          }
        </Switch>
      </Suspense>
    </BrowserRouter>);
  }
}

export default App;