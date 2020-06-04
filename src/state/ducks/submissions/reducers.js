import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {
    submissions: {}, // submission一覧を持つための
    submission: {}, // submission単体をrequestされたとき
  },
  loading: true,
  ui: {
    total: 0,
    page: 0,
  },
};

const submissions = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_SUBMISSIONS:
      return { ...state, loading: true };
    case types.FETCH_SUBMISSIONS_SUCEESS: {
      const total = action.data.total;

      // submit_idをkeyにしたMapを作る
      var submissions = {};
      for (const submission of action.data.submissions || []) {
        const submitId = submission["submit_id"];
        submissions[submitId] = submission;
      }

      return {
        ...state,
        loading: false,
        data: { ...state.data, submissions: submissions },
        ui: { ...state.ui, total: total },
      };
    }
    case types.CHANGE_SUBMISSIONS_PAGE: {
      const total = action.total;
      const page = action.page;

      return { ...state, ui: { total: total, page: page } };
    }
    default:
      return state;
  }
};

const submissionsReducer = combineReducers({
  submissions,
});

export default submissionsReducer;
