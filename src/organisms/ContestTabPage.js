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
  const classes = useStyles();
  const history = useHistory();

  const getTab = useCallback(() => {
    if (!location.search) {
      return tabValueList[0];
    }
    const parsed = parse(location.search);
    return parsed.tab;
  }, [location, tabValueList]);

  const getPage = useCallback(() => {
    const parsed = parse(location.search);
    return parsed.page;
  }, [location]);

  const [tabPosition, setTabPosition] = useState(getTab()); // useStateで最初にtabを取得して渡してあげないと,最初の描画でうまくtabの場所にいてくれない
  const [rankingTablePage, setRankingTablePage] = useState(1);
  const [submissionsTablePage, setSubmissionsTablePage] = useState(1);

  const contestTopContent = props.contestTopContent;
  const problemLists = props.problemLists;
  const rankings = props.rankings;
  const contestId = props.contestId;
  const rankingsTotal = props.rankingsTotal;
  const submissions = props.submissions;
  const submissionsTotal = props.submissionsTotal;

  useEffect(() => {
    setTabPosition(getTab);
    // tabのpositionがSubmissionsのとき
    if (tabPosition === tabValueList[2]) {
      setSubmissionsTablePage(getPage("page"));
    }
    // tabのpositionがRankingのとき
    if (tabPosition === tabValueList[3]) {
      setRankingTablePage(getPage("page"));
    }
  }, [getTab, getPage, tabValueList, tabPosition]);

  const handleChange = (_, newValue) => {
    setTabPosition(newValue);
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
      <Tabs tabPosition={tabPosition} onChange={handleChange} tabValueList={tabValueList} labels={labelList} />
      {tabPosition === tabValueList[0] && <TopContents contestTopContent={contestTopContent} />}
      {tabPosition === tabValueList[1] && <ProblemsTable problemLists={problemLists} contestId={contestId} />}
      {tabPosition === tabValueList[2] && (
        <SubmitStatusTable
          contestId={contestId}
          submissions={submissions}
          offset={submissionsTablePage}
          paginationClickHandler={submissionsPaginationHandler}
          submissionsTotal={submissionsTotal}
        />
      )}
      {tabPosition === tabValueList[3] && (
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
