import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../atoms/app-copyright-text";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "auto",
  },
  footer: {
    padding: theme.spacing(2),
    backgroundColor: "#00897b",
    color: "#ffffff",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </div>
  );
}
