import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../actions/types';
import { signUpApi, /*loginApi*/ handleApiErrors } from '../utils/api';
import { AnyAction } from 'redux';

function* handleSignUp(userData: AnyAction) {
  const { username, email, password } = userData.payload;

  try {
    const res = yield call(signUpApi, username, email, password);
    yield put({ type: SIGNUP_SUCCESS });    

  } catch (err) {
    const res = yield call(handleApiErrors, err);
    yield put({ type: SIGNUP_ERROR, res })
  }
}

function* signupUser () {  
  yield takeLatest(SIGNUP_REQUEST, handleSignUp)
}

export default signupUser;  
