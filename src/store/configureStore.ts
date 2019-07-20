import { combineReducers, createStore,applyMiddleware} from 'redux';
import dataReducer from './dataReducer';
import pageViewReducer from './pageViewReducer';
import scoreReducer from './scoreReducer';
import fetchMdl from './personality.api.middleware';
import {loadState} from './localStorage';

export default function configureStore() {
  const middlewareEnhancer = applyMiddleware(...fetchMdl);
  const persistedState = loadState();
  // combine all reducers to create  root reducer
  const rootReducer = combineReducers({
    scores: scoreReducer,
    data: dataReducer,
    pageView: pageViewReducer
  });

  return createStore(rootReducer,persistedState,middlewareEnhancer);
}