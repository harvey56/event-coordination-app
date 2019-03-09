import { combineReducers, Dispatch, Reducer, Action, AnyAction } from 'redux';
import { authReducer } from './authReducer';
import { AuthStateProps } from '../Components/SignUp/SignUp';
// import { Store } from '../store/store';

export type Store = {
    authReducer: AuthStateProps
}

const rootReducer = combineReducers<Store>({
    authReducer
});

export default rootReducer;

