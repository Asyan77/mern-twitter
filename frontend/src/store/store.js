import { applyMiddleware, compose, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import session from "./session";
import errors from "./errors";
import tweets from "./tweets"
import { legacy_createStore } from 'redux';

const rootReducer = combineReducers({
  session,
  errors,
  tweets
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return legacy_createStore(rootReducer, preloadedState, enhancer);
};


export default configureStore;