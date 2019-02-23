import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import CombinedSagas from '../sagas/combinedSagas';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(CombinedSagas);

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  composeWithDevTools( // allows redux devtools to watch sagas
    applyMiddleware(sagaMiddleware, loggerMiddleware)
  ) 
);

export default store;