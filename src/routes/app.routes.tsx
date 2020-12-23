import React from 'react';

import { Switch, Route } from 'react-router-dom';

import addNotification from '../pages/AddNotification';
import Customer from '../pages/Customer';
import Dashboard from '../pages/Dashboard';
import Finances from '../pages/Finances';
import Page404 from '../pages/Page404';
import SpeedTest from '../pages/SpeedTest';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/finances" component={Finances} />
      <Route path="/customer" component={Customer} />
      <Route path="/speedtest" component={SpeedTest} />
      <Route path="/addnotification" component={addNotification} />

      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
