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

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%"
  },
  // タブの設定
  tabs: {
    borderBottom: "0.8px solid #cfd8dc"
  }
}));

export default function ContestsListTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const contestTopContent = props.contestTopContent;
  const problemLists = props.problemLists;
  const submitStatusLists = props.submitStatusLists;
  //const rankingLists = props.rankingLists;
  const contestId = props.contestId;

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        className={classes.tabs}
      >
        <Tab label="トップ" />
        <Tab label="問題一覧" />
        <Tab label="提出状況" />
        <Tab label="ランキング" />
      </Tabs>
      {value === 0 && <TopContents contestTopContent={contestTopContent} />}
      {value === 1 && (
        <ProblemsTable problemLists={problemLists} contestId={contestId} />
      )}
      {value === 2 && (
        <SubmitStatusTable submitStatusLists={submitStatusLists} />
      )}
      {value === 3 && <RankingTable contestId={contestId} />}
    </div>
  );
}

ContestsListTabs.propTypes = {
  contestTopContent: PropTypes.string,
  problemLists: PropTypes.array,
  submitStatusLists: PropTypes.array,
  contestId: PropTypes.string
  //rankingLists: PropTypes.array
};
