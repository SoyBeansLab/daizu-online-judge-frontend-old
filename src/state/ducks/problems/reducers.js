import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {},
  loading: true,
};

const problems = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_PROBLEMS:
      return { ...state, loading: true };
    case types.FETCH_PROBLEMS_SUCEESS: {
      const problems = action.data["problems"];
      const contestId = action.data["contest_id"];

      const data = state.data;
      // problemIdをkeyにしたMapに変換
      const problemMap = (() => {
        var result = {};
        for (const key in problems) {
          const problemId = problems[key]["problem_id"];
          result[problemId] = problems[key];
        }
        return result;
      })();
      data[contestId] = problemMap;

      return { ...state, loading: false, data };
    }
    case types.FETCH_PROBLEM_SUCEESS: {
      const contestId = action.data["contest_id"];
      const problemId = action.data["problem_id"];
      const data = state.data;

      if (!Object.prototype.hasOwnProperty.call(data, contestId)) {
        data[contestId] = {};
      }
      data[contestId][problemId] = action.data;

      return { ...state, loading: false, data };
    }
    default:
      return state;
  }
};

const problemsReducer = combineReducers({
  problems,
});

export default problemsReducer;
