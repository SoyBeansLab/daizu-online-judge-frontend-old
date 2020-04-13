import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderAppBar from "../molecules/HeaderAppBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    width: "20%",
    color: "#ffffff",
    border: "0",
  },
  button: {
    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderAppBar />
    </div>
  );
}
