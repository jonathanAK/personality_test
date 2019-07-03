import {AnyAction, combineReducers, createStore,applyMiddleware} from 'redux'
import {ActiveViewEnum} from '../models/ActiveView';
import dataReducer from './dataReducer';
import pageViewReducer from './pageViewReducer';
import fetchMdl from './personality.api.middleware';
import {loadState} from './localStorage';

interface Action {
  type: string;
  payload: any;
}

const scoreState = {
  results : [0,0,0,0]
};

const scoreReducer = (state=scoreState, action: Action) => {
  switch (action.type) {
    case 'ADD_SCORES':
      return {
        ...state,
        results : state.results.map((a, i) => a + action.payload[i])
      }
    case 'RESET_SCORE':
      return scoreState

    default:
      return state;
  }
};



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