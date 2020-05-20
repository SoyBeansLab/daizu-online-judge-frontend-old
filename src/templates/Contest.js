import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContestTabs from "../organisms/ContestTabPage";

const useStyles = makeStyles(theme => ({
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
