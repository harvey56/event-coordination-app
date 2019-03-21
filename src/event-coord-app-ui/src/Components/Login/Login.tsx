import * as React from 'react';
import { 
  Avatar, 
  Button, 
  CssBaseline, 
  FormControl, 
  Input,
  InputLabel,
  Paper,
  Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { requestLogin, AuthState } from '../../actions/authActions';
import { AuthStateProps } from '../SignUp/SignUp';
import { Redirect } from 'react-router';

const styles = (theme: Theme) => createStyles({
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

interface OwnProps {

}
export interface DispatchProps {
  requestLogin: (user: object) => void
}
interface OwnState {
  email: string,
  password: string
}

type Props = OwnProps & WithStyles & AuthStateProps & DispatchProps;
type State = OwnState;

class Login extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      [event.target.name]: event.target.value
    } as Pick<OwnState, any>) 
  } 
  
  handleOnSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    let { email, password } = this.state;
    this.props.requestLogin({email: email, password: password});
  }

  render(){
    const { classes } = this.props;
    let { password, email } = this.state;

    if (this.props.isAuthenticated) return <Redirect to={"/"} />;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleOnSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus value = {email} onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" value = {password} onChange={this.handleChange}/>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </form>
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

const styledComponent = withStyles(styles)(Login);
export default connect(mapStateToProps, {requestLogin})(styledComponent);