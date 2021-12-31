import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routerConfigList } from '@router';
import TopBar from '@container/TopBar';
import styles from './app.less';

class App extends React.Component {
  render() {
    return (<div className={styles.app}>
      <TopBar />
      <div className={styles.container}>
        <Suspense fallback={null}>
          {
            routerConfigList.map(({ path, component }) => {
              return <Route key={path} path={path} component={component} />;
            })
          }
        </Suspense>
      </div>
    </div>);
  }
}

export default App;