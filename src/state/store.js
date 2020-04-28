import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./ducks";

// https://github.com/jhen0409/react-native-debugger/issues/280
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  return createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));
}
