import { createSelector } from "reselect";

const registrationsSelector = state => state.registrationsState.registrations.data || [];

const registrationListSelector = createSelector(registrationsSelector, registrations => Object.keys(registrations));

const registrationDictSelector = createSelector(registrationsSelector, registrations => registrations);

const isFetched = createSelector(registrationsSelector, registrations => Object.keys(registrations).length !== 0);

export default {
  registrationListSelector,
  registrationDictSelector,
  isFetched,
};
