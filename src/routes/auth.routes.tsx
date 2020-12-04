import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Page404 from '../pages/Page404';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
};

export default AuthRoutes;
