import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './pages/auth';
import Home from './pages/home';


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
        <Route path='/' component={Home} />
      </Switch>


    </div>
  );
}

export default App;
