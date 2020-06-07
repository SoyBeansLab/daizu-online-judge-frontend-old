import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import ProblemDetails from "../organisms/ProblemDetails";
import CodeSubmit from "../organisms/CodeSubmit";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
}));

export default function Problem() {
  const classes = useStyles();
  const { contestId, problemId } = useParams();

  return (
    <div className={classes.root}>
      <ProblemDetails contestId={contestId} problemId={problemId} />
      <CodeSubmit />
    </div>
  );
}
