import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import RankingTable from "../../molecules/RankingTable";
import Pagination from "../../atoms/Paginations";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
}));

function RankingPageTableComponent(props) {
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

RankingPageTableComponent.propTypes = {
  ranking: PropTypes.array,
  page: PropTypes.number,
  total: PropTypes.number,
  setRankingPage: PropTypes.func,
};

export default RankingPageTableComponent;
