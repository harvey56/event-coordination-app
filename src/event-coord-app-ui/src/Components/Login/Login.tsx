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
import { connect } from 'react-redux';
import { requestLogin, AuthState } from '../../actions/authActions';
import { AuthStateProps } from '../SignUp/SignUp';
import { Redirect } from 'react-router';
import styles from './styles';
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
    this.props.requestLogin({email: email, password: password})
  }

  render(){
    const { classes, error } = this.props;
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
            {
              error 
              ?               
              <Typography className={classes.errormessage}>
                {error.error}
              </Typography> 
              : 
              ""
            }
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
    user: state.authReducer.user,
    error: state.authReducer.error
  };
};

const styledComponent = withStyles(styles)(Login);
export default connect(mapStateToProps, {requestLogin})(styledComponent);