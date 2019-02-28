import * as React from 'react';
import { 
    Button, 
    Avatar, 
    CssBaseline, 
    FormControl, 
    InputLabel,
    FormControlLabel,
    Checkbox,
    Input,
    Paper,
    Typography,
    WithStyles,
    createStyles,
    Theme
} from '@material-ui/core';
import {LockOutlined} from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { Store  } from '../../store/store';
import { Dispatch } from 'redux';
import { AuthState } from '../../actions/authActions';
import signupWatcher from '../../sagas/authSagas';

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

interface OwnState {
  username: string,
  password: string,
  confirmPassword: string,
  email: string,
  errors: object
}
interface OwnProps {

}
export interface AuthStateProps extends AuthState {
  
}

export interface DispatchProps {
  signupWatcher: () => void
}

type Props = OwnProps & WithStyles & AuthStateProps & DispatchProps;
type State = OwnState;

class SignUp extends React.Component<Props, State> {
  
  constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			email: '',
			errors: {}
    }
  }

  private handleSubmitForm = () => {
    let { username, password, confirmPassword, email } = this.state;
    
    const userSchema = yup.object().shape({
      username: yup.string().required(),
      password: yup.string().min(6, "password must be at least 6 characters long").required(),
      passwordConfirmation: yup.string().oneOf([password], 'Passwords are not the same!').required('Password confirmation is required!'),
      email: yup.string().email('email is not valid').required()
    });
    
		userSchema.isValid({
      username,
      password,
      confirmPassword,
      email
    })
		.then( newUser => {
        // this.props.signupUser(newUser) 
    })
		.catch( err => console.log("error: ", err.errors));
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

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
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" name="username" autoComplete="username" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <Input name="confirm-password" type="password" id="confirm-password" autoComplete="current-password" />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmitForm}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = (state: AuthState, props: OwnProps): AuthStateProps => {
  return {
    isAuthenticated: state.isAuthenticated,
    isFetching: state.isFetching,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: OwnProps): DispatchProps => ({
  signupWatcher
});

export default connect<Props>(mapStateToProps, mapDispatchToProps)(withStyles(styles))(SignUp);