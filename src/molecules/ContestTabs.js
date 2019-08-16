import React from "react";
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
    height: "100%",
  },
  // タブの設定
  tabs: {
    borderBottom: "0.8px solid #cfd8dc",
  },
}));

export default function ContestsListTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabs}>
        <Tab label="トップ" />
        <Tab label="問題一覧" />
        <Tab label="提出状況" />
        <Tab label="ランキング" />
      </Tabs>
      {value === 0 && <TopContents />}
      {value === 1 && (
        <ProblemsTable problemId="A" problemName="Hello World" timeLimit={2} memoryLimit={100} problemScore={50} />
      )}
      {value === 2 && <SubmitStatusTable />}
      {value === 3 && <RankingTable />}
    </div>
  );
}
