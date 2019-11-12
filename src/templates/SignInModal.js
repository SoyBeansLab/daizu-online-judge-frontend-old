import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import SignInModal from "../molecules/SignInModal";

const useStyles = makeStyles(theme => ({
  root: {
    // この設定 App.jsに書いたほうが良い説ある
    margin: theme.spacing(3),

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default function Contests() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignInModal />
    </div>
  );
}
