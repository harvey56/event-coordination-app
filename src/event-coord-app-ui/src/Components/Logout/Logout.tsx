import * as React from 'react';
import { 
    Avatar, 
    CssBaseline, 
    Paper,
    Typography,
    WithStyles,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { AuthState } from '../../actions/authActions';
import { logoutRequest } from '../../actions/authActions';
import { Redirect } from 'react-router';
import styles from './styles';

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
  logoutRequest: () => void
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

  async componentDidMount(){
    await this.props.logoutRequest();
    return await setTimeout(() => this.setState({ redirect: true }), 3000);
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