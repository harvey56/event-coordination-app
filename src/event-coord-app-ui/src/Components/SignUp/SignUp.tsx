import * as React from 'react';
import { 
    Button, 
    Avatar, 
    CssBaseline, 
    FormControl, 
    InputLabel,
    Input,
    Paper,
    Typography,
    WithStyles,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { AuthState } from '../../actions/authActions';
import { signupRequest } from '../../actions/authActions';
import { Redirect } from 'react-router';
import styles from './styles';

interface OwnState {
  username: string,
  password: string,
  confirmPassword: string,
  email: string,
  formErrors: Array<string>
}
interface OwnProps {

}
export interface AuthStateProps {
  isAuthenticated: boolean,
  isFetching: boolean,
  user: object | undefined,
  error: {
    error: string
  } | undefined
}

export interface DispatchProps {
  signupRequest: (newUser: object) => void
}

type Props = OwnProps & WithStyles<typeof styles> & AuthStateProps & DispatchProps;
type State = OwnState;

class SignUp extends React.Component<Props, State> {
  
  constructor(props: Props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			email: '',
      formErrors: [""]
    }

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      [event.target.name]: event.target.value
    } as Pick<OwnState, any>) 
  } 

  handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let { username, password, confirmPassword, email } = this.state;

    const userSchema = yup.object({
        username: yup.string().required(),
        password: yup.string().min(6, "password must be at least 6 characters long").required(),
        confirmPassword: yup.string().oneOf([password], 'Passwords are not the same!').required('Password confirmation is required!'),
        email: yup.string().email('email is not valid').required()
      });
      
    const newUser = {username: username, email: email, password: password, confirmPassword: confirmPassword};
    
    userSchema.validate(newUser).catch( err => this.setState({formErrors: err.errors}) );

    userSchema.isValid(newUser)
    .then( valid => {
        valid ? this.props.signupRequest({username: username, email: email, password: password}) : console.log("user schema is not valid")
    })
    .catch( err => console.log("signup error: ", err) );
  }

  render() {
    const { classes } = this.props;
    let { username, password, confirmPassword, email, formErrors } = this.state;

    if (this.props.isAuthenticated) return <Redirect to={"/"} />;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmitForm}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" name="username" autoComplete="username" autoFocus value = {username} onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus value = {email} onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" value = {password} onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <Input name="confirmPassword" type="password" id="confirm-password" autoComplete="current-password" value = {confirmPassword} onChange={this.handleChange}/>
            </FormControl>
            <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              {
              formErrors
              ?               
              <Typography className={classes.errormessage}>
                {formErrors}
              </Typography> 
              : 
              ""
            }
            </div>
          </form>
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = (state: AuthState): AuthStateProps => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    isFetching: state.authReducer.isFetching,
    user: state.authReducer.user,
    error: state.authReducer.error
  };
};

const styledComponent = withStyles(styles)(SignUp);
export default connect(mapStateToProps, {signupRequest})(styledComponent);