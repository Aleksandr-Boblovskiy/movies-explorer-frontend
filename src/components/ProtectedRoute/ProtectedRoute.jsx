/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, children, isCheckingToken }) => (
  <Route>
    {
      isCheckingToken ? null : loggedIn ? children : <Redirect to="/" />
    }
  </Route>
);

export default ProtectedRoute;
