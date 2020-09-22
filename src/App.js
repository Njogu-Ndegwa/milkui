import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './components/layout';
import {routes }from './pages'

function App() {
  return (
    <div>
      <Layout/>

      <Switch>
      {
        routes.map(route=> (
          <Route exact={route.exact} path={route.path}>
            {route.component}
          </Route>

        ))
      }
      </Switch>
      
    </div>
  );
}

export default App;
