import React from 'react';
import Home from './components/home/home';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const routes = [
  {
    path: "/",
    main: () => <Home/>
  }
];

const Routing = () => {

  return (
    <Router>
      <React.Fragment>
        <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact
                    children={route.main}
                  />
                ))}
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default Routing;
