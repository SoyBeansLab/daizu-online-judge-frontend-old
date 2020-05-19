import types from "./types";

export const fetchRankings = filter => ({
  type: types.FETCH_RANKINGS,
  filter,
});

export const fetching = () => ({
  type: types.LOADING,
});

export const receiveRankings = json => ({
  type: types.FETCH_RANKINGS_SUCEESS,
  data: json,
});

export const changePage = page => ({
  type: types.CHANGE_PAGE,
  data: page,
});
