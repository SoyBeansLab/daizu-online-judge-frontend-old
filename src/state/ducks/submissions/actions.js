import types from "./types";

export const fetchSubmissions = filter => ({
  type: types.FETCH_SUBMISSIONS,
  filter,
});

export const fetching = () => ({
  type: types.LOADING,
});

export const receiveSubmissions = json => ({
  type: types.FETCH_SUBMISSIONS_SUCEESS,
  data: json,
});