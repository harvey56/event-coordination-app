import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles';
import { Route, Link, Router } from 'react-router-dom';
import Login from '../Login/Login';

function ButtonAppBar(props: any) {
  const { classes } = props;
  // const SignUpBtn = (props: any) => <Link to="/signup" {...props} />
  // const LoginBtn = (props: any) => <Link to="/login" {...props} />

  return (
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Event coordination
            </Typography>
            <Button color="inherit" component={(props: any) => <Link to="/login" {...props} />}>
              Login
            </Button>
            <Button color="inherit" component={(props: any) => <Link to="/signup" {...props} />}>
              Sign Up
            </Button>
          </Toolbar>
          </AppBar>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);