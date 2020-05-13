import { combineReducers } from "redux";
import types from "./types";

const initState = {
  entities: {},
  loading: true,
};

const contests = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_CONTESTS:
      return { ...state, loading: true };
    case types.FETCH_CONTESTS_SUCEESS:
      return { ...state, loading: false, entities: action.data.entities };
    default:
      return state;
  }
};

const contestsReducer = combineReducers({
  contests,
});

export default contestsReducer;
