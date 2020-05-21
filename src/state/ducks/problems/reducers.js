import { combineReducers } from "redux";
import types from "./types";

const initState = {
  entities: {
    problems: {},
  },
  loading: true,
};

const problems = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_PROBLEMS:
      return { ...state, loading: true };
    case types.FETCH_PROBLEMS_SUCEESS: {
      // problemsをstateから取得して, fetchしたデータをsetする
      const problems = state.entities.problems;
      problems[action.data.problem_id] = action.data;

      return { ...state, loading: false, entities: { problems: problems } };
    }
    default:
      return state;
  }
};

const problemsReducer = combineReducers({
  problems,
});

export default problemsReducer;
