import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "100%",
    minHeight: 250
  }
}));

export default function ContestTopContents(props) {
  const classes = useStyles();
  const contestTopContent = props.contestTopContent;

  return (
    <Paper className={classes.root}>
      {/* markdownを表示する */}
      <ReactMarkdown source={contestTopContent} />
    </Paper>
  );
}

ContestTopContents.propTypes = {
  contestTopContent: PropTypes.string
};
