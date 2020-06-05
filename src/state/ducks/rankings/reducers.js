import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {},
  loading: true,
  ui: {
    total: 0,
    page: 0,
  },
};

const rankings = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_RANKINGS:
      return { ...state, loading: true };
    case types.FETCH_RANKINGS_SUCEESS: {
      const total = action.data.total;
      const ranking = action.data.ranking;

      return { ...state, loading: false, data: ranking, ui: { ...state.ui, total: total } };
    }
    case types.CHANGE_RANKING_PAGE:
      return { ...state, ui: { ...state.ui, page: action.data } };
    default:
      return state;
  }
};

const rankingsReducer = combineReducers({
  rankings,
});

export default rankingsReducer;
