import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";
import { parse } from "query-string";
import { makeStyles } from "@material-ui/core/styles";

import ProblemsTable from "./ProblemsTable";
import SubmissionsPageTable from "./SubmissionsPageTable";
import RankingPageTable from "./RankingPageTable";
import ContestTop from "./ContestTop";
import Tabs from "../atoms/Tabs";

import { rankingsOperations, rankingsSelectors } from "../state/ducks/rankings";
import { submissionsOperations, submissionsSelectors } from "../state/ducks/submissions";

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

function ContestTabsPageContainer(props) {
  const tabValueList = ["top", "problems", "submits", "ranking"];
  const labelList = ["トップ", "問題一覧", "提出状況", "ランキング"];

  const location = useLocation();
  const { contestId } = useParams();
  const classes = useStyles();

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

  const rankings = props.rankings;
  const setRankingPage = props.setRankingPage;
  const setSubmissionsPage = props.setSubmissionsPage;

  useEffect(() => {
    setTabPosition(getTab());
    // tabのpositionがSubmissionsのとき
    if (tabPosition === tabValueList[2]) {
      const page = Number(getPage());
      setSubmissionsPage(page);
    }
    // tabのpositionがRankingのとき
    if (tabPosition === tabValueList[3]) {
      const page = Number(getPage());
      setRankingPage(page);
    }
  }, [getTab, getPage, setRankingPage, setSubmissionsPage, tabValueList, tabPosition]);

  const handleChange = (_, newValue) => {
    setTabPosition(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs tabPosition={tabPosition} onChange={handleChange} tabValueList={tabValueList} labels={labelList} />
      {tabPosition === tabValueList[0] && <ContestTop contestId={contestId} />}
      {tabPosition === tabValueList[1] && <ProblemsTable contestId={contestId} />}
      {tabPosition === tabValueList[2] && <SubmissionsPageTable />}
      {tabPosition === tabValueList[3] && <RankingPageTable rankings={rankings} />}
    </div>
  );
}

ContestTabsPageContainer.propTypes = {
  rankings: PropTypes.array,
  setRankingPage: PropTypes.func,
  setSubmissionsPage: PropTypes.func,
};

const mapStateToProps = state => ({
  rankingPage: rankingsSelectors.getRankingPage(state),
  submissionsPage: submissionsSelectors.getSubmissionsPage(state),
});

const mapDispatchToProps = {
  setRankingPage: rankingsOperations.setRankingPage,
  setSubmissionsPage: submissionsOperations.setSubmissionsPage,
};

const ContestTopPage = connect(mapStateToProps, mapDispatchToProps)(ContestTabsPageContainer);

export default ContestTopPage;
