import {Navigate, Outlet} from 'react-router-dom'

import React from 'react'
import useAuthState from '../hooks/useAuthState';
import Spinner from './Spinner';

export const PrivateRoute = () => {
    const {loggedIn, checkState} = useAuthState()

    if(checkState) {
      return <Spinner></Spinner>;
    }

  return loggedIn ? <Outlet/> : <Navigate to="/signin"/>;
};

export default PrivateRoute;
