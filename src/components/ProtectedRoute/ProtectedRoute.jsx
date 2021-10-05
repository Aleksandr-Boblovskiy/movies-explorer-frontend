/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, path, children }) => (
  <Route path={path} exact>
    {
      loggedIn ? children : <Redirect to="/signin" />
    }
  </Route>
);

export default ProtectedRoute;
