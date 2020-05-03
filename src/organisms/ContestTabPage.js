import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import { parse } from "query-string";
import { makeStyles } from "@material-ui/core/styles";

import ContestTabs from "../molecules/ContestTabs";
import ProblemsTable from "../molecules/ProblemsTable";
import SubmitStatusTable from "../molecules/SubmitStatusTable";
import RankingTable from "../molecules/RankingTable";
import TopContents from "../molecules/ContestTopContents";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
  // タブの設定
  tabs: {
    borderBottom: "0.8px solid #cfd8dc",
  },
}));

export default function ContestTabsPage(props) {
  const tabValueList = ["top", "problems", "submits", "ranking"];

  const location = useLocation();
  const getTabPostion = useCallback(() => {
    if (!location.search) {
      return tabValueList[0];
    }

    const parsed = parse(location.search);
    return parsed.tab;
  }, [location, tabValueList]);

  const classes = useStyles();
  const [value, setValue] = useState(getTabPostion());
  const [rankingTablePage, setRankingTablePage] = useState(1);
  const [submissionsTablePage, setSubmissionsTablePage] = useState(1);
  const history = useHistory();

  const contestTopContent = props.contestTopContent || "";
  const problemLists = props.problemLists || [];
  const rankings = props.rankings || [];
  const contestId = props.contestId || "";
  const rankingsTotal = props.rankingsTotal || 5;
  const submissions = props.submissions || [];
  const submissionsTotal = props.submissionsTotal || 0;

  useEffect(() => {
    setValue(getTabPostion());
  }, [getTabPostion]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const rankingPaginationHandler = (_, val) => {
    history.push(`${location.pathname}?tab=ranking&page=${val}`);
    setRankingTablePage(val);
  };

  const submissionsPaginationHandler = (_, val) => {
    history.push(`${location.pathname}?tab=submits&page=${val}`);
    setSubmissionsTablePage(val);
  };

  return (
    <div className={classes.root}>
      <ContestTabs tabPosition={value} onChange={handleChange} />
      {value === tabValueList[0] && <TopContents contestTopContent={contestTopContent} />}
      {value === tabValueList[1] && <ProblemsTable problemLists={problemLists} contestId={contestId} />}
      {value === tabValueList[2] && (
        <SubmitStatusTable
          contestId={contestId}
          submissions={submissions}
          offset={submissionsTablePage}
          paginationClickHandler={submissionsPaginationHandler}
          submissionsTotal={submissionsTotal}
        />
      )}
      {value === tabValueList[3] && (
        <RankingTable
          contestId={contestId}
          rankings={rankings}
          offset={rankingTablePage}
          paginationClickHandler={rankingPaginationHandler}
          total={rankingsTotal}
        />
      )}
    </div>
  );
}

ContestTabsPage.propTypes = {
  contestTopContent: PropTypes.string,
  problemLists: PropTypes.array,
  contestId: PropTypes.string,
  rankings: PropTypes.array,
  fetchRanking: PropTypes.func,
  rankingsTotal: PropTypes.number,
  submissions: PropTypes.array,
  submissionsTotal: PropTypes.number,
};
