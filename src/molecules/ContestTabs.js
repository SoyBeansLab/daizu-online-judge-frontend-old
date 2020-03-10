import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// タブ
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
// テーブル
import ProblemsTable from "./ProblemsTable";
import SubmitStatusTable from "./SubmitStatusTable";
import RankingTable from "./RankingTable";
// コンテストトップ
import TopContents from "./ContestTopContents";

import { Link, useLocation } from "react-router-dom";
import { parse } from "query-string";

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

export default function ContestsListTabs(props) {
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

  const contestTopContent = props.contestTopContent;
  const problemLists = props.problemLists;
  //const submitStatusLists = props.submitStatusLists;
  //const rankingLists = props.rankingLists;
  const contestId = props.contestId;

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabs}>
        <Tab
          label="トップ"
          value={tabValueList[0]}
          component={Link}
          to={location.pathname + `?tab=${tabValueList[0]}`}
        />
        <Tab
          label="問題一覧"
          value={tabValueList[1]}
          component={Link}
          to={location.pathname + `?tab=${tabValueList[1]}`}
        />
        <Tab
          label="提出状況"
          value={tabValueList[2]}
          component={Link}
          to={location.pathname + `?tab=${tabValueList[2]}`}
        />
        <Tab
          label="ランキング"
          value={tabValueList[3]}
          component={Link}
          to={location.pathname + `?tab=${tabValueList[3]}`}
        />
      </Tabs>
      {value === tabValueList[0] && <TopContents contestTopContent={contestTopContent} />}
      {value === tabValueList[1] && <ProblemsTable problemLists={problemLists} contestId={contestId} />}
      {value === tabValueList[2] && <SubmitStatusTable contestId={contestId} />}
      {value === tabValueList[3] && <RankingTable contestId={contestId} />}
    </div>
  );
}

ContestsListTabs.propTypes = {
  contestTopContent: PropTypes.string,
  problemLists: PropTypes.array,
  //submitStatusLists: PropTypes.array,
  contestId: PropTypes.string,
  //rankingLists: PropTypes.array
};
