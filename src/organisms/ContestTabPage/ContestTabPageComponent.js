import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";
import { parse } from "query-string";
import { makeStyles } from "@material-ui/core/styles";

import ProblemsTable from "../ProblemsTable";
import SubmissionsPageTable from "../SubmissionsPageTable";
import RankingPageTable from "../RankingPageTable";
import ContestTop from "../ContestTop";
import EntryRegistrationCard from "../EntryRegistrationCard";
import Tabs from "../../atoms/Tabs";

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

function ContestTabsPageComponent(props) {
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
  const submissionsPage = props.submissionsPage;
  const isRegisted = props.isRegisted;
  const fetchRegistration = props.fetchRegistration;

  useEffect(() => {
    if (isRegisted === void 0) {
      fetchRegistration(`/contests/${contestId}/registrations`);
    }
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
  }, [
    getTab,
    getPage,
    setRankingPage,
    setSubmissionsPage,
    tabValueList,
    tabPosition,
    isRegisted,
    fetchRegistration,
    contestId,
  ]);

  const handleChange = (_, newValue) => {
    setTabPosition(newValue);
  };

  if (!isRegisted) {
    return (
      <div className={classes.root}>
        <Tabs tabPosition="top" onChange={handleChange} tabValueList={["top"]} labels={["トップ"]} />
        <EntryRegistrationCard />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Tabs tabPosition={tabPosition} onChange={handleChange} tabValueList={tabValueList} labels={labelList} />
      {tabPosition === tabValueList[0] && <ContestTop contestId={contestId} />}
      {tabPosition === tabValueList[1] && <ProblemsTable contestId={contestId} />}
      {tabPosition === tabValueList[2] && <SubmissionsPageTable contestId={contestId} page={submissionsPage} />}
      {tabPosition === tabValueList[3] && <RankingPageTable rankings={rankings} />}
    </div>
  );
}

ContestTabsPageComponent.propTypes = {
  rankings: PropTypes.array,
  setRankingPage: PropTypes.func,
  setSubmissionsPage: PropTypes.func,
  submissionsPage: PropTypes.number,
  isRegisted: PropTypes.bool,
  fetchRegistration: PropTypes.func,
};

export default ContestTabsPageComponent;
