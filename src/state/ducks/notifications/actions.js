import types from "./types";

export const fetchNotifications = filter => ({
  type: types.FETCH_NOTIFICATIONS,
  filter,
});

export const fetching = () => ({
  type: types.LOADING,
});

export const receiveNotifications = json => ({
  type: types.FETCH_NOTIFICATIONS_SUCEESS,
  data: json,
});
