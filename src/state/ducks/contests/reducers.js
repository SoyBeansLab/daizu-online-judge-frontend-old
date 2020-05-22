import { combineReducers } from "redux";
import types from "./types";

const initState = {
  entities: {
    contests: {},
  },
  loading: false,
  isFetchedContests: false,
  error: undefined,
};

const contests = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_CONTESTS:
      return { ...state, loading: true };
    case types.FETCH_CONTESTS_SUCEESS:
      return { ...state, loading: false, isFetchedContests: true, entities: action.data.entities };
    case types.FETCH_CONTEST_SUCCESS: {
      // コンテスト単体を取得したときはentities.contestsにsetする
      const contests = state.entities.contests;
      contests[action.data.contest_id] = action.data;

      return { ...state, loading: false, entities: { contests: contests } };
    }
    case types.FETCH_FAILED:
      return { ...state, loading: false, error: action.data };
    default:
      return state;
  }
};

const contestsReducer = combineReducers({
  contests,
});

export default contestsReducer;
