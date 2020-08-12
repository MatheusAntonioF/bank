import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

const routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
    </Switch>

  </BrowserRouter>
);

export default routes;
