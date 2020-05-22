import types from "./types";

export const fetchContests = filter => ({
  type: types.FETCH_CONTESTS,
  filter,
});

export const fetching = () => ({
  type: types.LOADING,
});

export const receiveContests = json => ({
  type: types.FETCH_CONTESTS_SUCEESS,
  data: json,
});

export const receiveContest = json => ({
  type: types.FETCH_CONTEST_SUCCESS,
  data: json,
});

export const fetchFailed = error => ({
  type: types.FETCH_FAILED,
  data: error,
});
