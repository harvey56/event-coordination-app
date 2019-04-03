import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { AuthState } from '../actions/authActions';

export type Store = {
    authReducer: AuthState
}

const rootReducer = combineReducers<Store>({
    authReducer
});

export default rootReducer;

