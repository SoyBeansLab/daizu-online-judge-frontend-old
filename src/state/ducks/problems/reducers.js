import { combineReducers } from "redux";
import types from "./types";

const initState = {
  entities: {},
  loading: true,
};

const problems = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_PROBLEMS:
      return { ...state, loading: true };
    case types.FETCH_PROBLEMS_SUCEESS:
      return { ...state, loading: false, entities: action.data.entities };
    default:
      return state;
  }
};

const problemsReducer = combineReducers({
  problems,
});

export default problemsReducer;
