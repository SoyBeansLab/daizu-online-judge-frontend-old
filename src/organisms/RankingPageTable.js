import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import RankingTable from "../molecules/RankingTable";
import Pagination from "../atoms/Paginations";

import { rankingsOperations, rankingsSelectors } from "../state/ducks/rankings";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
}));

function RankingPageTableContainer(props) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const ranking = props.ranking;
  const page = props.page;
  const total = props.total;
  const setRankingPage = props.setRankingPage;

  const paginationClickHandler = (_, val) => {
    history.push(`${location.pathname}?tab=ranking&page=${val}`);
    setRankingPage(val);
  };

  useEffect(() => {
    //    props.setRankingPage();
  }, []);

  return (
    <div className={classes.root}>
      <RankingTable rankings={ranking} />
      <Pagination offset={page} total={total} onClick={(event, offset) => paginationClickHandler(event, offset)} />
    </div>
  );
}

RankingPageTableContainer.propTypes = {
  ranking: PropTypes.array,
  page: PropTypes.number,
  total: PropTypes.number,
  setRankingPage: PropTypes.func,
};

const mapStateToProps = state => ({
  page: rankingsSelectors.getRankingPage(state),
  total: rankingsSelectors.rankingTotalSelector(state),
  ranking: rankingsSelectors.rankingsSelector(state),
});

const mapDispatchToProps = {
  setRankingPage: rankingsOperations.setRankingPage,
};

const RankingPageTable = connect(mapStateToProps, mapDispatchToProps)(RankingPageTableContainer);

export default RankingPageTable;
