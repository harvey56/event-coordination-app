import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as auth from '../actions/authActions';
import { signUpApi, loginApi } from '../utils/api';

function* handleSignUp(userData) {

  const { email, password } = userData;
  try {
    const res = yield call(signUpApi, email, password);
    yield put({ type: types.SIGNUP_SUCCESS, res });

  } catch (err) {
    yield put({ type: types.SIGNUP_ERROR, err })
  }
}

function* signupWatcher () {  
  yield takeLatest(types.SIGNUP_REQUEST, handleSignUp)
}

export default signupWatcher;  
