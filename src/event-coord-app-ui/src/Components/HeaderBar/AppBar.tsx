import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, NoSsr } from '@material-ui/core/';
import styles from './styles';
import { Route, Link } from 'react-router-dom';
import { AuthStateProps } from '../SignUp/SignUp';

interface OwnProps {
}

type Props = OwnProps & WithStyles<typeof styles> & AuthStateProps;

const ButtonAppBar = (props: Props) => {
    const { classes } = props;

    return (
      <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Event coordination
              </Typography>   
                { !props.isAuthenticated ? 
                  <React.Fragment>
                    <Button color="inherit" component={(props: any) => <Link to="/login" {...props} />}>
                      Login
                    </Button>
                    <Button color="inherit" component={(props: any) => <Link to="/signup" {...props} />}>
                      Sign Up
                    </Button>
                  </React.Fragment>
                  : 
                  <Button color="inherit" component={(props: any) => <Link to="/logout" {...props} />}>
                    Log out
                  </Button>
                }                       
            </Toolbar>
          </AppBar>
      </div> 
    );
}

const styledComponent = withStyles(styles)(ButtonAppBar);
export default styledComponent;