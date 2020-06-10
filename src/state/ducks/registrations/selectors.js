import { createSelector } from "reselect";

// eslint-disable-next-line
const registrationsSelector = (state, props) => state.registrationsState.registrations.data || {};

const isRegisted = createSelector(
  [registrationsSelector, (_, props) => props.contestId],
  (registrations, contestId) => registrations[contestId]
);

export default {
  isRegisted,
};
