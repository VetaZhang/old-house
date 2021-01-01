import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from "react-hot-loader/root";
import styles from './app.less';

const login = lazy(() => import(/* webpackChunkName: 'login' */ './pages/login'));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Suspense fallback={null}>
      <div className={styles.app}>
        <Switch>
          <Route path="/login" component={login} />
        </Switch>
      </div>
    </Suspense>);
  }
}

export default hot(App);