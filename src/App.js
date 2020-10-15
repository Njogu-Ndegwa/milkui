import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './pages/auth';
import Layout from './components/layout';


function App() {
  return (
    <div>
      <Switch >
        {routes.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            component={route.component} />
        ))}
        <Route path='/' component={Layout} />
      </Switch>


    </div>
  );
}

export default App;
