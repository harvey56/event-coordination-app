import { all, fork } from  'redux-saga/effects';
import signupWatcher from './authSagas';

export  default  function*  CombinedSagas() {
    yield  all([
        fork(signupWatcher),
     ]);
}