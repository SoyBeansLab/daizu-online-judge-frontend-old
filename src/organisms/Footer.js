import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../atoms/app-copyright-text";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "#00897b",
    color: "#ffffff",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </div>
  );
}
