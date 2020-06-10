import types from "./types";

export const fetchRegistraions = filter => ({
  type: types.FETCH_REGISTRATIONS,
  filter,
});

export const fetching = () => ({
  type: types.LOADING,
});

export const receiveRegistraions = json => ({
  type: types.FETCH_REGISTRATIONS_SUCEESS,
  data: json,
});

export const registEntry = json => ({
  type: types.REGIST_CONTEST,
  data: json,
});
