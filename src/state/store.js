import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import * as reducers from "./ducks";

// https://github.com/jhen0409/react-native-debugger/issues/280
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });
  return createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk, routerMiddleware(history))));
}
