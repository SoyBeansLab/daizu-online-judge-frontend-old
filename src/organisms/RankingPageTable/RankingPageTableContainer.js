import { connect } from "react-redux";

import RankingPageTableComponent from "./RankingPageTableComponent";
import { rankingsOperations, rankingsSelectors } from "../../state/ducks/rankings";

const mapStateToProps = state => ({
  page: rankingsSelectors.getPage(state),
  total: rankingsSelectors.getTotal(state),
  ranking: rankingsSelectors.getRanking(state),
});

const mapDispatchToProps = {
  setRankingPage: rankingsOperations.setRankingPage,
  fetchRanking: rankingsOperations.fetchRanking,
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingPageTableComponent);
