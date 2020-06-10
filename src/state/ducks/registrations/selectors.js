//import { createSelector } from "reselect";

// eslint-disable-next-line
const registrationsSelector = (state, props) => state.registrationsState.registrations.data || {};

/*
const isRegisted = createSelector(
  [registrationsSelector, (_, props) => props.contestId],
  (registrations, contestId) => registrations
);
*/

const isRegisted = (state, props) => state.registrationsState.registrations.data[props.contestId] || false;

export default {
  isRegisted,
};
