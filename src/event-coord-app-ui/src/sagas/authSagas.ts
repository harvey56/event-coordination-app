import { call, put, takeLatest } from 'redux-saga/effects';
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
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_FAILURE,
  CHECK_TOKEN_REQUEST
} from '../actions/types';
import { signUpApi, loginApi, logoutApi, handleApiErrors, checkTokenApi } from '../utils/api';
import { AnyAction } from 'redux';

function* handleSignUp(userData: AnyAction) {
  const { username, email, password } = userData.payload;

  try {
    yield call(signUpApi, username, email, password);
    yield put({ type: SIGNUP_SUCCESS });    

  } catch (err) {
    const res = yield call(handleApiErrors, err);
    yield put({ type: SIGNUP_ERROR, res })
  }
}

function* signupUser() {  
  yield takeLatest(SIGNUP_REQUEST, handleSignUp)
}

function* handleLogin(userData: AnyAction) {
  const { email, password } = userData.payload;
  try {
    yield call(loginApi, email, password);
    yield put({ type: LOGIN_SUCCESS });    

  } catch (err) {
    const res = yield call(handleApiErrors, err);
    yield put({ type: LOGIN_FAILURE, res })
  }
}

export function* loginUser() {  
  yield takeLatest(LOGIN_REQUEST, handleLogin)
}

function* handleLogOut() {
  try {
    yield call(logoutApi);
    yield put({ type: LOGOUT_SUCCESS });

  } catch (err) {
    const res = yield call(handleApiErrors, err);
    yield put({ type: LOGOUT_ERROR, res })
  }
}

export function* handleCheckToken(token: AnyAction) {
  try {
    yield call(checkTokenApi, token.payload);
    yield put({ type: CHECK_TOKEN_SUCCESS });

  } catch (err) {
    yield put({ type: CHECK_TOKEN_FAILURE, err })
  }
}

export function* checkToken() {  
  yield takeLatest(CHECK_TOKEN_REQUEST, handleCheckToken)
}

export function* logoutUser() {
  yield takeLatest(LOGOUT_REQUEST, handleLogOut)
}

export default signupUser;  
