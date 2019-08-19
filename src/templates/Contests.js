import React from "react";
import ContestsListTabs from "../molecules/ContestsListTabs";
import { makeStyles } from "@material-ui/core/styles";
import Typograhy from "@material-ui/core/Typography";

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
      <Typograhy variant="h5" className={classes.heading}>
        コンテスト一覧
      </Typograhy>
      <ContestsListTabs />
    </div>
  );
}
