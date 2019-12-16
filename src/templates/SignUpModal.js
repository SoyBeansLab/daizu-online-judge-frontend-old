import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import SignUpModal from "../molecules/SignUpModal";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Contests() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignUpModal />
    </div>
  );
}
