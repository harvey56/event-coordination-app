import {
  LOGIN_REQUEST, 
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT_SUCCESS
} from './types';
import jwtDecode from 'jwt-decode';
import setAuthToken from './setAuthToken';

export interface AuthState {
  // loginError: string,
  // registrationError: string,
  // permissionsError: string,
  isFetching: boolean,
  isAuthenticated: boolean ,
  user?: { error: string, user: string } 
}


interface LoginRequestAction {
  type: typeof LOGIN_REQUEST
  payload: AuthState
}

interface LoginReceiveAction {
  type: typeof LOGIN_SUCCESS
  payload: AuthState
}

interface LoginErrorAction {
  type: typeof LOGIN_FAILURE
  payload: AuthState
}

interface SignupRequestAction {
  type: typeof SIGNUP_REQUEST
  payload: AuthState
}

interface SignupReceiveAction {
  type: typeof SIGNUP_SUCCESS
  payload: AuthState
}

interface SignupErrorAction {
  type: typeof SIGNUP_ERROR
  payload: AuthState
}

interface LogoutAction {
  type: typeof LOGOUT_SUCCESS
  payload: AuthState
}


export type AuthActionType = LoginRequestAction | LoginReceiveAction | LoginErrorAction | SignupRequestAction | SignupReceiveAction | SignupErrorAction | LogoutAction;

// Manage User registering
// export const registerUser = (userData, history) => dispatch => {
//   axios.post("/api/users/register", userData)
//     .then(dispatch(signupSuccess()))
//     .then(res => history.push("/login")) // re-direct to login on successful register
//     .catch(err =>
//       dispatch(signupError(err.data.error))
//     );
// };

// manage user logging in
// export const requestLogin = credentials => dispatch => {
//     dispatch(requestLogin());
    
//     axios.post('/api/users/login', credentials)
//       .then(res => { 
//         const { token } = res.data;
//         localStorage.setItem("jwtToken", token);
//         setAuthToken(token);
//         // Decode token to get user data
//         const decoded = jwtDecode(token);
//         // Set current user
//         dispatch(receiveLogin(decoded));
//       })
//       .catch(err => {
//         dispatch(loginError(err.data.error));
//       })
// }

// Log user out
// export const logoutUser = () => dispatch => {
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to empty object {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };


export const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  }
}

// Set logged in user
export const receiveLogin = decoded => {
  return {
    type: LOGIN_SUCCESS,
    payload: decoded
  };
};

// login error
export const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    payload : message
  }
}

// signup request
export function signupRequest() {
  return {
    type: SIGNUP_REQUEST,
  }
}

// signup success
export function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS,
  }
}

// signup error
export function signupError(message) {
  return {
    type: SIGNUP_ERROR,
    payload : message
  }
}

// log out user
export const logout = (action) => {
  return { 
    type: LOGOUT_SUCCESS, 
    payload: action
  }
}

