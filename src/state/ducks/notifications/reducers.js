import { combineReducers } from "redux";
import types from "./types";

const initState = {
  data: {},
  loading: true,
};

const notifications = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_NOTIFICATIONS:
      return { ...state, loading: true };
    case types.FETCH_NOTIFICATIONS_SUCEESS:
      return { ...state, loading: false, data: action.data };
    default:
      return state;
  }
};

const notificationsReducer = combineReducers({
  notifications,
});

export default notificationsReducer;
