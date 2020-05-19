import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {},
  loading: true,
  ui: {
    page: 0,
  },
};

const rankings = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_RANKINGS:
      return { ...state, loading: true };
    case types.FETCH_RANKINGS_SUCEESS:
      return { ...state, loading: false, data: action.data };
    case types.CHANGE_RANKING_PAGE:
      return { ...state, ui: { page: action.data } };
    default:
      return state;
  }
};

const rankingsReducer = combineReducers({
  rankings,
});

export default rankingsReducer;
