import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import CombinedSagas from '../sagas/combinedSagas';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthStateProps } from '../Components/SignUp/SignUp';
import authReducer from '../reducers/authReducer';

export type Store = {
  authReducer: AuthStateProps
}

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools( // allows redux devtools to watch sagas
    applyMiddleware(sagaMiddleware, loggerMiddleware)
  ) 
);

sagaMiddleware.run(CombinedSagas);

export default store;