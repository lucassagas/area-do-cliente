import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Customer from '../pages/Customer';
import Dashboard from '../pages/Dashboard';
import Finances from '../pages/Finances';
import SpeedTest from '../pages/SpeedTest';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/finances" component={Finances} />
      <Route path="/customer" component={Customer} />
      <Route path="/speedtest" component={SpeedTest} />
    </Switch>
  );
};

export default AppRoutes;
