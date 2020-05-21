import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import ProblemDetails from "../organisms/ProblemDetails";
import CodeSubmit from "../molecules/CodeSubmit";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
}));

export default function Problem(props) {
  const classes = useStyles();
  const { problemId } = useParams();

  return (
    <div className={classes.root}>
      <ProblemDetails problemId={problemId} />
      <CodeSubmit languageLists={props.languageLists} languageDict={props.languageDict} />
    </div>
  );
}

Problem.propTypes = {
  languageLists: PropTypes.array,
  languageDict: PropTypes.object,
  problemID: PropTypes.string,
  problemName: PropTypes.string,
  timeLimit: PropTypes.number,
  memoryLimit: PropTypes.number,
  score: PropTypes.number,
  problemText: PropTypes.string,
};
