import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {
    submissions: {}, // submission一覧を持つための
    submission: {}, // submission単体をrequestされたとき
  },
  loading: true,
  ui: {},
  pages: {},
};

const initStatePage = {
  total: 100,
  page: 0,
};

const submissions = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_SUBMISSIONS:
      return { ...state, loading: true };
    case types.FETCH_SUBMISSIONS_SUCEESS: {
      const contestId = action.data.contest_id;
      const page = action.data.page;
      const total = action.data.total;

      const submissions = state.data.submissions;
      const pages = state.pages;

      if (!Object.prototype.hasOwnProperty.call(submissions, contestId)) {
        submissions[contestId] = {};
        submissions[contestId][page] = {};

        pages[contestId] = initStatePage;
      }

      submissions[contestId][page] = [...action.data.submissions];

      pages[contestId]["total"] = total;

      return { ...state, loading: false, data: { submissions }, pages };
    }
    case types.CHANGE_SUBMISSIONS_PAGE: {
      const pages = state.pages;
      const contestId = action.contestId;

      if (!Object.prototype.hasOwnProperty.call(pages, contestId)) {
        pages[contestId] = {};
      }
      pages[contestId]["page"] = action.page;
      console.log(action);

      return { ...state, pages };
    }
    default:
      return state;
  }
};

const submissionsReducer = combineReducers({
  submissions,
});

export default submissionsReducer;
