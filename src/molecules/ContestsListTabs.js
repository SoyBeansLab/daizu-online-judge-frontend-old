import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// タブ
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
// テーブル
import ContestsTable from "./ContestsTable";

import { Link, useLocation } from "react-router-dom";
import { parse } from "query-string";

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
  const tabValueList = ["current", "upcoming", "recent"];

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

  const currentContestLists = props.currentContestLists;
  const upcomingContestLists = props.upcomingContestLists;
  const recentContestLists = props.recentContestLists;

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabs}>
        <Tab
          label="開催中"
          value={tabValueList[0]}
          component={Link}
          to={location.pathname + `?tab=${tabValueList[0]}`}
        />
        <Tab
          label="開催予定"
          value={tabValueList[1]}
          component={Link}
          to={location.pathname + `?tab=${tabValueList[1]}`}
        />
        <Tab label="終了" value={tabValueList[2]} component={Link} to={location.pathname + `?tab=${tabValueList[2]}`} />
      </Tabs>
      {value === tabValueList[0] && <ContestsTable contestLists={currentContestLists} />}
      {value === tabValueList[1] && <ContestsTable contestLists={upcomingContestLists} />}
      {value === tabValueList[2] && <ContestsTable contestLists={recentContestLists} />}
    </div>
  );
}

ContestsListTabs.propTypes = {
  currentContestLists: PropTypes.array,
  upcomingContestLists: PropTypes.array,
  recentContestLists: PropTypes.array,
};
