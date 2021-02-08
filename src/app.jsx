import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routerList from '@router';
// import { hot } from "react-hot-loader/root";
import '@commonLess';

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