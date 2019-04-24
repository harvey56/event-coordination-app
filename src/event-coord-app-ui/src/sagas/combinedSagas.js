import { all, fork } from  'redux-saga/effects';
import signupUser, { loginUser, logoutUser, checkToken } from './authSagas';

export  default  function*  CombinedSagas() {
    yield  all([
        fork(signupUser), 
        fork(loginUser), 
        fork(logoutUser),
        fork(checkToken)
     ]);
}