import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import sessionsReducer from './session';
import logger from 'redux-logger'
import questionsReducer from './question';
import answersReducer from './answer';
import votesReducer from './vote';

const rootReducer = combineReducers({
    sessionsReducer,
    questionsReducer,
    answersReducer,
    votesReducer
});

// let enhancer;

// if (process.env.NODE_ENV === 'production') {
//   enhancer = applyMiddleware(thunk);
// } else {
//   const logger = require('redux-logger').default;
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   enhancer = composeEnhancers(applyMiddleware(thunk, logger));
// }

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
}
export default configureStore;