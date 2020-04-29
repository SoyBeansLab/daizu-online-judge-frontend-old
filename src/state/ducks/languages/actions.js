import types from "./types";

export const fetchLanguages = filter => ({
  type: types.FETCH_LANGUAGES,
  filter,
});

export const fetching = () => ({
  type: types.LOADING,
});

export const receiveLanguages = json => ({
  type: types.FETCH_LANGUAGES_SUCEESS,
  data: json,
});
