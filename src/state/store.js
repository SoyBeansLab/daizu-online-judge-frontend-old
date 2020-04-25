import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "ducks";

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware()
  );
}
