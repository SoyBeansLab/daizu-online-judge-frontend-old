import { createSelector } from "reselect";

const rankingTotalSelector = state => state.rankingsState.rankings.data.total || 0;

const rankingsSelector = state => state.rankingsState.rankings.data.ranking || [];

const limitedRankingSelector = createSelector(rankingsSelector, rankings => rankings);

const isfetched = createSelector(rankingsSelector, rankings => rankings.upcoming !== void 0);

const getRankingPage = state => state.rankingsState.rankings.ui.page || 0;

export default {
  rankingTotalSelector,
  rankingsSelector,
  limitedRankingSelector,
  isfetched,
  getRankingPage,
};
