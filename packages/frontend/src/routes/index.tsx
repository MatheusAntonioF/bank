import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';

const routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>

  </BrowserRouter>
);

export default routes;
