import { createSelector } from "reselect";

const contestsSelector = state => state.contestsState.contests.entities.contests || {};

const contestsListSelector = state => Object.values(state.contestsState.contests.entities.contests || {});

const contestSelector = (state, props) => state.contestsState.contests.entities.contests[props.contestId] || {};

const currentContestsSelector = createSelector(contestsListSelector, contests =>
  contests.filter(value => value.holding_status === "current")
);

const upcomingContestsSelector = createSelector(contestsListSelector, contests =>
  contests.filter(value => value.holding_status === "upcoming")
);

const recentContestsSelector = createSelector(contestsListSelector, contests =>
  contests.filter(value => value.holding_status === "recent")
);

const getProblemList = createSelector(contestSelector, contest => {
  const problems = contest.problems;
  problems.sort((a, b) => {
    return a.order - b.order;
  });

  return problems;
});

const isfetched = createSelector(contestsSelector, contests => contests.upcoming !== void 0);

export default {
  contestsSelector,
  currentContestsSelector,
  upcomingContestsSelector,
  recentContestsSelector,
  isfetched,
  contestSelector,
  getProblemList,
};
