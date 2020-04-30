import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
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
  const getTabPostion = () => {
    if (!location.search) {
      return tabValueList[0];
    }

    const parsed = parse(location.search);
    return parsed.tab;
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(getTabPostion());

  const contestTopContent = props.contestTopContent || "";
  const problemLists = props.problemLists || [];
  //const submitStatusLists = props.submitStatusLists;
  const rankings = props.rankings || [];
  const fetchRanking = props.fetchRanking || (() => {});
  const contestId = props.contestId || "";

  function handleChange(event, newValue) {
    if (newValue === tabValueList[3]) {
      fetchRanking(`/contests/${contestId}/ranking`);
    }
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <ContestTabs tabPosition={value} onChange={handleChange} />
      {value === tabValueList[0] && <TopContents contestTopContent={contestTopContent} />}
      {value === tabValueList[1] && <ProblemsTable problemLists={problemLists} contestId={contestId} />}
      {value === tabValueList[2] && <SubmitStatusTable contestId={contestId} />}
      {value === tabValueList[3] && <RankingTable contestId={contestId} rankings={rankings} />}
    </div>
  );
}

ContestTabsPage.propTypes = {
  contestTopContent: PropTypes.string,
  problemLists: PropTypes.array,
  //submitStatusLists: PropTypes.array,
  contestId: PropTypes.string,
  rankings: PropTypes.array,
  fetchRanking: PropTypes.func,
};
