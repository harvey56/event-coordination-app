import * as React from 'react';
import { 
    Avatar, 
    CssBaseline, 
    Paper,
    Typography,
    WithStyles,
    createStyles,
    Theme
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { AuthState } from '../../actions/authActions';
import { logoutRequest } from '../../actions/authActions';
import { Redirect } from 'react-router';

const styles = (theme:Theme) => createStyles({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
});

interface OwnState {
  redirect: boolean
}

interface OwnProps {

}

export interface AuthStateProps {
  isAuthenticated: boolean,
  isFetching: boolean,
  user: object | undefined
}

export interface DispatchProps {
  logoutRequest: () => any
}

type Props = OwnProps & WithStyles & AuthStateProps & DispatchProps;
type State = OwnState;

class Logout extends React.Component<Props, State> {
  
  constructor(props: Props) {
		super(props);
		this.state = {
      redirect: false
    }
  }

  componentDidMount(){
    this.props.logoutRequest()
    .then( 
      () => { setTimeout(() => this.setState({ redirect: true }), 3000); }
    )
  }

  render() {
    const { classes } = this.props;

    if (!this.props.isAuthenticated && this.state.redirect) return <Redirect to={"/"} />;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            You have logged out. Bye !
          </Typography>          
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = (state: AuthState, props: OwnProps): AuthStateProps => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    isFetching: state.authReducer.isFetching,
    user: state.authReducer.user
  };
};

const styledComponent = withStyles(styles)(Logout);
export default connect(mapStateToProps, {logoutRequest})(styledComponent);