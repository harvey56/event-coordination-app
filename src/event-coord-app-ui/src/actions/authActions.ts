import {
  LOGIN_REQUEST, 
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  CHECK_TOKEN_REQUEST,
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_FAILURE
} from './types';
export interface AuthState {
  authReducer : {
    isFetching: boolean,
    isAuthenticated: boolean ,
    user?: { error: string, user: string } 
  }
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
interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS
  payload: AuthState
}
interface LogoutErrorAction {
  type: typeof LOGOUT_ERROR
  payload: AuthState
}
interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST
  payload: AuthState
}
interface CheckTokenRequest {
  type: typeof CHECK_TOKEN_REQUEST
  payload: AuthState
}
interface CheckTokenSuccess {
  type: typeof CHECK_TOKEN_SUCCESS
  payload: AuthState
}
interface CheckTokenFailure {
  type: typeof CHECK_TOKEN_FAILURE
  payload: AuthState
}
export type AuthActionType = LoginRequestAction | LoginReceiveAction | LoginErrorAction | SignupRequestAction | SignupReceiveAction | SignupErrorAction | LogoutSuccessAction | LogoutErrorAction | LogoutRequestAction | CheckTokenRequest | CheckTokenSuccess | CheckTokenFailure;

export const requestLogin = (user: any) => {
  return {
    type: LOGIN_REQUEST,
    payload: user
  }
}

// Set logged in user
export const receiveLogin = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

// login error
export const loginError = (message:any) => {
  return {
    type: LOGIN_FAILURE,
    payload : message
  }
}

// signup request
export function signupRequest(user: object) {
  return {
    type: SIGNUP_REQUEST,
    payload: user
  }
}

// signup success
export function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS,
  }
}

// signup error
export function signupError() {
  return {
    type: SIGNUP_ERROR,
  }
}

// log out user
export const logoutSuccess = () => {
  return { 
    type: LOGOUT_SUCCESS, 
  }
}

export const logoutError = () => {
  return { 
    type: LOGOUT_ERROR, 
  }
}

export const logoutRequest = () => {
  return { 
    type: LOGOUT_REQUEST, 
  }
}

export function checkToken(token: string) {
  return {
    type: CHECK_TOKEN_REQUEST,
    payload: token
  };
}

export function checkTokenSuccess(currentUser: any) {
  return {
    type: CHECK_TOKEN_SUCCESS,
    payload: currentUser
  };
}

export function checkTokenFailure(error: any) {
  return {
    type: CHECK_TOKEN_FAILURE,
    payload: error
  };
}