import { createSelector } from "reselect";

const contestsSelector = state => state.contestsState.contests.entities.contests || {};

const contestsListSelector = state => Object.values(state.contestsState.contests.entities.contests || {});

const currentContestsSelector = createSelector(contestsListSelector, contests =>
  contests.filter(value => value.holding_status === "current")
);

const upcomingContestsSelector = createSelector(contestsListSelector, contests =>
  contests.filter(value => value.holding_status === "upcoming")
);

const recentContestsSelector = createSelector(contestsListSelector, contests =>
  contests.filter(value => value.holding_status === "recent")
);

const getContestTopContentById = contestId => {
  return createSelector(contestsSelector, contests => {
    // https://moneyforward.com/engineers_blog/2017/06/20/eslint/
    if (Object.prototype.hasOwnProperty.call(contests, contestId)) {
      return contests[contestId].contest_description || "";
    } else {
      return "";
    }
  });
};

const isfetched = createSelector(contestsSelector, contests => contests.upcoming !== void 0);

export default {
  contestsSelector,
  currentContestsSelector,
  upcomingContestsSelector,
  recentContestsSelector,
  getContestTopContentById,
  isfetched,
};
