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

export const receiveSubmission = json => ({
  type: types.FETCH_SUBMISSION_SUCEESS,
  data: json,
});

export const changePage = page => ({
  type: types.CHANGE_SUBMISSIONS_PAGE,
  page: page,
});
