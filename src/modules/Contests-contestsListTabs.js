import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  // タブの設定
  tabs: {
    width: "100%",
    borderBottom: "0.8px solid #cfd8dc",
  },
}));

// 仮データを突っ込むため関数
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

// propsの型指定
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ContestsListTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.tabs}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        {/* 仮の項目 */}
        <Tab label="開催中" />
        <Tab label="開催予定" />
        <Tab label="終了" />
      </Tabs>
      {/* 仮データ */}
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
    </div>
  );
}
