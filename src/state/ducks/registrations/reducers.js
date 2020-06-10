import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {},
  loading: true,
};

const registrations = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_REGISTRATIONS:
      return { ...state, loading: true };
    case types.FETCH_REGISTRATIONS_SUCEESS: {
      const contestId = action.data["contest_id"];
      const isRegisted = action.data["is_registed"];

      const data = state.data;
      data[contestId] = isRegisted;

      return { ...state, loading: false, data };
    }
    case types.REGIST_CONTEST: {
      const contestId = action.data["contest_id"];
      const isRegisted = action.data["is_registed"];

      const data = state.data;
      data[contestId] = isRegisted;

      return { ...state, loading: false, data };
    }
    default:
      return state;
  }
};

const registrationsReducer = combineReducers({
  registrations,
});

export default registrationsReducer;
