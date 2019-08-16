import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ProblemInfo from "../molecules/ProblemInfo";
import CodeSubmit from "../molecules/CodeSubmit";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
}));

export default function Problem(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProblemInfo
        problemID={props.problemID}
        problemName={props.problemName}
        timeLimit={props.timeLimit}
        memoryLimit={props.memoryLimit}
        score={props.score}
        problemText={props.problemText}
      />
      <CodeSubmit languageLists={props.languageLists} languageDictionary={props.languageDictionary} />
    </div>
  );
}

Problem.propTypes = {
  languageDictionary: PropTypes.object,
  languageLists: PropTypes.array,
  problemID: PropTypes.string,
  problemName: PropTypes.string,
  timeLimit: PropTypes.number,
  memoryLimit: PropTypes.number,
  score: PropTypes.number,
  problemText: PropTypes.string,
};
