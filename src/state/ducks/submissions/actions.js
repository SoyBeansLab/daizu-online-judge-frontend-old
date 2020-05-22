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

export const changePage = (contestId, page) => ({
  type: types.CHANGE_SUBMISSIONS_PAGE,
  page: page,
  contestId: contestId,
});
