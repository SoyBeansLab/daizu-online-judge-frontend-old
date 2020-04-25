import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {},
  loading: true,
};

const contests = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_CONTESTS:
      return { ...state, loading: true };
    case types.FETCH_CONTESTS_SUCEESS:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};

const contestsReducer = combineReducers({
  contests,
});

export default contestsReducer;
