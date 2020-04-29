import { createSelector } from "reselect";

const contestsSelector = state => state.contestsState.contests.data;

const currentContestsSelector = createSelector(contestsSelector, contests => contests.current);

const upcomingContestsSelector = createSelector(contestsSelector, contests => contests.upcoming);

const recentContestsSelector = createSelector(contestsSelector, contests => contests.recent);

const isfetched = createSelector(contestsSelector, contests => contests.upcoming !== void 0);

export default {
  contestsSelector,
  currentContestsSelector,
  upcomingContestsSelector,
  recentContestsSelector,
  isfetched,
};
