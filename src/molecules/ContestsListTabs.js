import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// タブ
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
// テーブル
import ContestsTable from "./ContestsTable";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  // タブの設定
  tabs: {
    borderBottom: "0.8px solid #cfd8dc",
    height: "100%",
  },
}));

export default function ContestsListTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const holdingContestLists = props.holdingContestLists;
  const scheduledContestLists = props.scheduledContestLists;
  const finishedContestLists = props.finishedContestLists;

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabs}>
        <Tab label="開催中" />
        <Tab label="開催予定" />
        <Tab label="終了" />
      </Tabs>
      {value === 0 && <ContestsTable contestLists={holdingContestLists} />}
      {value === 1 && <ContestsTable contestLists={scheduledContestLists} />}
      {value === 2 && <ContestsTable contestLists={finishedContestLists} />}
    </div>
  );
}

ContestsListTabs.propTypes = {
  holdingContestLists: PropTypes.array,
  scheduledContestLists: PropTypes.array,
  finishedContestLists: PropTypes.array,
};
