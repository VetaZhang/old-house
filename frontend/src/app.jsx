import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routerList from '@router';
import styles from './app.less';

class App extends React.Component {
  render() {
    return (<Suspense fallback={null}>
      <Switch>
        {
          routerList.map(({ path, component }) => {
            return <Route key={path} path={path} component={component} />;
          })
        }
      </Switch>
    </Suspense>);
  }
}

export default App;