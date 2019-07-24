import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function ContestTopContents() {
  const classes = useStyles();
  const input = "# This is a header\n\nAnd this is a paragraph";

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">hello</Typography>
      <ReactMarkdown source={input} />
    </Paper>
  );
}
