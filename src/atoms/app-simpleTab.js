import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
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

export default function SimpleTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        <Tab label="てすと" />
        <Tab label="two" />
        <Tab label="three" />
      </Tabs>
      {/* 仮データ */}
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
    </div>
  );
}
