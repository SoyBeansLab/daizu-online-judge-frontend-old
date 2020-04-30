import { createSelector } from "reselect";

const rankingsSelector = state => state.rankingsState.rankings.data;

const limitedRankingSelector = createSelector(rankingsSelector, rankings => rankings);

const isfetched = createSelector(rankingsSelector, rankings => rankings.upcoming !== void 0);

export default {
  rankingsSelector,
  limitedRankingSelector,
  isfetched,
};
