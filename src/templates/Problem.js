import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import ProblemDetails from "../organisms/ProblemDetails";
import CodeSubmit from "../organisms/CodeSubmit";

import { useAuth0 } from "../react-auth0-spa";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
}));

export default function Problem() {
  const classes = useStyles();
  const { contestId, problemId } = useParams();
  const { isAuthenticated } = useAuth0();

  return (
    <div className={classes.root}>
      <ProblemDetails contestId={contestId} problemId={problemId} />
      {isAuthenticated && <CodeSubmit />}
    </div>
  );
}
