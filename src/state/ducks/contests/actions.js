import types from "./types";

export const fetchContests = filter => ({
  type: types.FETCH_CONTESTS,
  filter,
});

export const fetching = () => ({
  types: types.LOADING,
});

export const receiveContests = json => ({
  types: types.FETCH_CONTESTS_SUCEESS,
  data: json,
});
