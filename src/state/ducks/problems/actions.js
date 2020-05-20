import types from "./types";

export const fetchProblems = filter => ({
  type: types.FETCH_PROBLEMS,
  filter,
});

export const fetching = () => ({
  type: types.LOADING,
});

export const receiveProblems = json => ({
  type: types.FETCH_PROBLEMS_SUCEESS,
  data: json,
});
