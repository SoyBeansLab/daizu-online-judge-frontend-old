import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function ContestTopContents() {
  const classes = useStyles();
  const input = "# This is a header\n\nAnd this is a paragraph"; // markdown

  return (
    <Paper className={classes.root}>
      {/* markdownを表示する */}
      <ReactMarkdown source={input} />
    </Paper>
  );
}
