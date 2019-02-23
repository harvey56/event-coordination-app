import { combineReducers, Dispatch, Reducer, Action, AnyAction } from 'redux';
import authReducer from './authReducer';

export interface ApplicationState {
    auth: authReducer
  }

const rootReducer = combineReducers<ApplicationState>({
    auth: authReducer,
});

export default rootReducer;

