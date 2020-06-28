import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../atoms/Copyright";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "auto",
  },
  footer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
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
