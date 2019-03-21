import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

const PrivateRoute: React.SFC<any> = ({ component: Component, ...props }) => {
  const { isAuthenticated } = props;

  return (
    <Route
      {...props}      
      render={ props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <LandingPage />
        )
      }
    />
  )
}
  
export default PrivateRoute;