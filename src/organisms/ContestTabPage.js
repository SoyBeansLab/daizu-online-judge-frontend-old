import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import { parse } from "query-string";
import { makeStyles } from "@material-ui/core/styles";

import ProblemsTable from "../molecules/ProblemsTable";
import SubmitStatusTable from "../molecules/SubmitStatusTable";
import RankingTable from "../molecules/RankingTable";
import TopContents from "../molecules/ContestTopContents";
import Tabs from "../atoms/Tabs";

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
  const labelList = ["トップ", "問題一覧", "提出状況", "ランキング"];

  const location = useLocation();
  const getQueryParams = useCallback(
    key => {
      if (!location.search) {
        return;
      }
      const parsed = parse(location.search);
      return parsed[key];
    },
    [location]
  );

  const classes = useStyles();
  // useStateで最初にtabを取得して渡してあげないと,最初の描画でうまくtabの場所にいてくれない
  const [value, setValue] = useState(getQueryParams("tab"));
  const [rankingTablePage, setRankingTablePage] = useState(1);
  const [submissionsTablePage, setSubmissionsTablePage] = useState(1);
  const history = useHistory();

  const contestTopContent = props.contestTopContent;
  const problemLists = props.problemLists;
  const rankings = props.rankings;
  const contestId = props.contestId;
  const rankingsTotal = props.rankingsTotal;
  const submissions = props.submissions;
  const submissionsTotal = props.submissionsTotal;

  useEffect(() => {
    setValue(getQueryParams("tab"));
    // tabのpositionがSubmissionsのとき
    if (value === tabValueList[2]) {
      setSubmissionsTablePage(getQueryParams("page"));
    }
    // tabのpositionがRankingのとき
    if (value === tabValueList[3]) {
      setRankingTablePage(getQueryParams("page"));
    }
  }, [getQueryParams, tabValueList, value]);

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
      <Tabs tabPosition={value} onChange={handleChange} tabValueList={tabValueList} labels={labelList} />
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
