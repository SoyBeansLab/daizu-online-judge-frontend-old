import { createSelector } from "reselect";

const contestsSelector = state => state.contestsState.contests.entities.contests || {};

const contestsListSelector = state => Object.values(state.contestsState.contests.entities.contests || {});

const contestSelector = (state, props) => state.contestsState.contests.entities.contests[props.contestId] || {};

const getCurrentContestList = createSelector(contestsListSelector, contests =>
  contests.filter(value => value.holding_status === "current")
);

const getUpcomingContestList = createSelector(contestsListSelector, contests =>
  contests.filter(value => value.holding_status === "upcoming")
);

const getRecentContestList = createSelector(contestsListSelector, contests =>
  contests.filter(value => value.holding_status === "recent")
);

const getProblemList = createSelector(contestSelector, contest => {
  const problems = contest.problems || [];
  problems.sort((a, b) => {
    return a.order - b.order;
  });

  return problems;
});

// contest一覧がfetch済みかをcheckする
const isfetchedContests = state => state.contestsState.isfetchedContest;

// props.contestIdで指定されたcontestがfetch済みかをcheckする
const isfetchedContest = createSelector(contestSelector, contest => contest.contest_id !== void 0);

export default {
  contestsSelector,
  isfetchedContests,
  isfetchedContest,
  contestSelector,
  getProblemList,
  getRecentContestList,
  getUpcomingContestList,
  getCurrentContestList,
};
