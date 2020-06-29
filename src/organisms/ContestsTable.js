import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// テーブル
import ContestsTable from "../molecules/ContestsTable";

import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import Tabs from "../atoms/Tabs";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  // タブの設定
  tabs: {
    borderBottom: "0.8px solid #EF6357",
    height: "100%",
  },
}));

export default function ContestsTables(props) {
  const tabValueList = ["current", "upcoming", "recent"];
  const labelList = ["開催中", "開催予定", "終了予定"];

  const location = useLocation();
  const getTabPostion = useCallback(() => {
    if (!location.search) {
      return tabValueList[0];
    }

    const parsed = parse(location.search);
    return parsed.tab;
  }, [location, tabValueList]);

  const classes = useStyles();
  const [value, setValue] = React.useState(getTabPostion());

  const currentContestLists = props.currentContestLists;
  const upcomingContestLists = props.upcomingContestLists;
  const recentContestLists = props.recentContestLists;

  useEffect(() => {
    setValue(getTabPostion());
  }, [getTabPostion]);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs tabPosition={value} onChange={handleChange} labels={labelList} tabValueList={tabValueList} />
      {value === tabValueList[0] && <ContestsTable contestLists={currentContestLists} />}
      {value === tabValueList[1] && <ContestsTable contestLists={upcomingContestLists} />}
      {value === tabValueList[2] && <ContestsTable contestLists={recentContestLists} />}
    </div>
  );
}

ContestsTables.propTypes = {
  currentContestLists: PropTypes.array,
  upcomingContestLists: PropTypes.array,
  recentContestLists: PropTypes.array,
};
