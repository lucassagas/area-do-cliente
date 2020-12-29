import React from 'react';

import { Switch, Route } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import Page404 from '../pages/Page404';
import ResetPassword from '../pages/ResetPassword';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/password_reset/:code/" component={ResetPassword} />

      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
};

export default AuthRoutes;
