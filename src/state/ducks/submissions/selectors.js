import { createSelector } from "reselect";

const rankingTotalSelector = state => state.submissionsState.submissions.data.total;

const submissionsSelector = state => state.submissionsState.submissions.data.data;

const limitedRankingSelector = createSelector(submissionsSelector, submissions => submissions);

const isfetched = createSelector(submissionsSelector, submissions => submissions.upcoming !== void 0);

export default {
  rankingTotalSelector,
  submissionsSelector,
  limitedRankingSelector,
  isfetched,
};
