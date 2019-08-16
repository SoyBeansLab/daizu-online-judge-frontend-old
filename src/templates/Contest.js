import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContestTabs from "../molecules/ContestTabs";

const useStyles = makeStyles(theme => ({
  root: {
    // この設定 App.jsに書いたほうが良い説ある
    margin: theme.spacing(3),
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
}));

export default function Contests() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContestTabs />
    </div>
  );
}
