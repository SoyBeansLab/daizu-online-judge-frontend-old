import { createSelector } from "reselect";

const problemsSelector = state => state.problemsState.problems.entities.problems || {};

const problemsListSelector = state => Object.values(state.problemsState.problems.entities.problems || {});

const contestSelector = (state, props) => state.problemsState.problems.entities.problems[props.contestId] || {};

const currentProblemsSelector = createSelector(problemsListSelector, problems =>
  problems.filter(value => value.holding_status === "current")
);

const upcomingProblemsSelector = createSelector(problemsListSelector, problems =>
  problems.filter(value => value.holding_status === "upcoming")
);

const recentProblemsSelector = createSelector(problemsListSelector, problems =>
  problems.filter(value => value.holding_status === "recent")
);

const isfetched = createSelector(problemsSelector, problems => problems.upcoming !== void 0);

export default {
  problemsSelector,
  currentProblemsSelector,
  upcomingProblemsSelector,
  recentProblemsSelector,
  isfetched,
  contestSelector,
};
