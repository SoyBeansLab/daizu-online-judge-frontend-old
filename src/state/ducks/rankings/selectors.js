import { createSelector } from "reselect";

const rankingTotalSelector = state => state.rankingsState.rankings.data.total || 0;

const rankingsSelector = state => state.rankingsState.rankings.data.data || [];

const limitedRankingSelector = createSelector(rankingsSelector, rankings => rankings);

const isfetched = createSelector(rankingsSelector, rankings => rankings.upcoming !== void 0);

export default {
  rankingTotalSelector,
  rankingsSelector,
  limitedRankingSelector,
  isfetched,
};
