import { createSelector } from "reselect";

const rankingUISelector = state => state.rankingsState.rankings.ui || {};

const rankingsSelector = state => state.rankingsState.rankings.data || {};

const getRanking = createSelector(rankingsSelector, data => Object.values(data));

const getPage = createSelector(rankingUISelector, ui => ui.page || 0);

const getTotal = createSelector(rankingUISelector, ui => ui.total || 0);

export default {
  getRanking,
  getPage,
  getTotal,
};
