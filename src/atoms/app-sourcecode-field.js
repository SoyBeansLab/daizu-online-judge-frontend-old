import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    width: "50rem",
    minWidth: "25rem",
  },
  field: {
    marign: theme.spacing(1),
  },
}));

export default function SourceCodeField() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TextField
        classes={classes.field}
        label="Source Code"
        multiline
        rows="10"
        defaultValue="Copy and Paste your source code!"
        variant="filled"
        fullWidth
      />
    </Paper>
  );
}
