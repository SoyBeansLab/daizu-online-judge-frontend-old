import { connect } from "react-redux";

import RankingPageTableComponent from "./RankingPageTableComponent";
import { rankingsOperations, rankingsSelectors } from "../../state/ducks/rankings";

const mapStateToProps = state => ({
  page: rankingsSelectors.getRankingPage(state),
  total: rankingsSelectors.rankingTotalSelector(state),
  ranking: rankingsSelectors.getRanking(state),
});

const mapDispatchToProps = {
  setRankingPage: rankingsOperations.setRankingPage,
  fetchRanking: rankingsOperations.fetchRanking,
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingPageTableComponent);
