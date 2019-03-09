import { all, fork } from  'redux-saga/effects';
import signupUser from './authSagas';

export  default  function*  CombinedSagas() {
    yield  all([
        fork(signupUser),
     ]);
}