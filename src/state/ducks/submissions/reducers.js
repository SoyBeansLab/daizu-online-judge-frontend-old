import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {},
  loading: true,
  ui: {
    page: 0,
  },
};

const submissions = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_SUBMISSIONS:
      return { ...state, loading: true };
    case types.FETCH_SUBMISSIONS_SUCEESS:
      return { ...state, loading: false, data: action.data };
    case types.CHANGE_SUBMISSIONS_PAGE:
      return { ...state, ui: { page: action.data } };
    default:
      return state;
  }
};

const submissionsReducer = combineReducers({
  submissions,
});

export default submissionsReducer;
