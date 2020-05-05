import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  tabs: {
    borderBottom: "0.8px solid #cfd8dc",
  },
}));

export default function ContestTabs(props) {
  const tabValueList = ["top", "problems", "submits", "ranking"];
  const classes = useStyles();
  const location = useLocation();

  const tabPosition = props.tabPosition || "";
  const handleChange = props.onChange || (() => {});

  return (
    <Tabs value={tabPosition} onChange={handleChange} indicatorColor="primary" className={classes.tabs}>
      <Tab label="トップ" value={tabValueList[0]} component={Link} to={`${location.pathname}?tab=${tabValueList[0]}`} />
      <Tab
        label="問題一覧"
        value={tabValueList[1]}
        component={Link}
        to={`${location.pathname}?tab=${tabValueList[1]}`}
      />
      <Tab
        label="提出状況"
        value={tabValueList[2]}
        component={Link}
        to={`${location.pathname}?tab=${tabValueList[2]}`}
      />
      <Tab
        label="ランキング"
        value={tabValueList[3]}
        component={Link}
        to={`${location.pathname}?tab=${tabValueList[3]}`}
      />
    </Tabs>
  );
}

ContestTabs.propTypes = {
  tabPosition: PropTypes.string,
  onChange: PropTypes.func,
};
