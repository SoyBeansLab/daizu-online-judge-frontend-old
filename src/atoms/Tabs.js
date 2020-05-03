import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import MaterialUITabs from "@material-ui/core/Tabs";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  tabs: {
    borderBottom: "0.8px solid #cfd8dc",
  },
}));

export default function Tabs(props) {
  const classes = useStyles();
  const location = useLocation();

  const tabPosition = props.tabPosition || "";
  const handleChange = props.onChange || (() => {});
  const tabValueList = props.tabValueList || [];
  const labels = props.labels || [];

  return (
    <MaterialUITabs value={tabPosition} onChange={handleChange} indicatorColor="primary" className={classes.tabs}>
      {tabValueList.map((tabValue, idx) => {
        return (
          <Tab
            label={labels[idx]}
            key={idx}
            value={tabValue}
            component={Link}
            to={`${location.pathname}?tab=${tabValue}`}
          />
        );
      })}
    </MaterialUITabs>
  );
}

Tabs.propTypes = {
  tabPosition: PropTypes.string,
  onChange: PropTypes.func,
  tabValueList: PropTypes.array,
  labels: PropTypes.array,
};
