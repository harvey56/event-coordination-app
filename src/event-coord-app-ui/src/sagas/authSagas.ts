import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../actions/types';
import * as auth from '../actions/authActions';
import { signUpApi, loginApi } from '../utils/api';
import { AnyAction } from 'redux';

function* handleSignUp(userData: AnyAction) {

  const { username, email, password } = userData;
  try {
    const res = yield call(signUpApi, username, email, password);
    yield put({ type: SIGNUP_SUCCESS, res });

  } catch (err) {
    yield put({ type: SIGNUP_ERROR, err })
  }
}

function* signupUser () {  
  yield takeLatest('SIGNUP_REQUEST', handleSignUp)
}

export default signupUser;  
