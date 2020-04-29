import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {},
  loading: true,
};

const languages = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_LANGUAGES:
      return { ...state, loading: true };
    case types.FETCH_LANGUAGES_SUCEESS:
      return { ...state, loading: false, data: action.data };
    default:
      return state;
  }
};

const languagesReducer = combineReducers({
  languages,
});

export default languagesReducer;
