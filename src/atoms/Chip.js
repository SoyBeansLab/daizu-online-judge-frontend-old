import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MaterialUIChip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  correct: {
    color: "#ffffff",
    backgroundColor: theme.palette.judgeStatusColor.correct,
  },
  wrong: {
    color: "#ffffff",
    backgroundColor: theme.palette.judgeStatusColor.wrong,
  },
  other: {
    backgroundColor: theme.palette.judgeStatusColor.other,
  },
}));

export default function Chip(props) {
  const classes = useStyles();
  const result = props.result;

  if (result === "AC") {
    return <MaterialUIChip className={classes.correct} label={result} />;
  } else if (["WA", "TLE", "MLE", "RE", "CE", "OLE", "IE"].includes(result)) {
    return <MaterialUIChip className={classes.wrong} label={result} />;
  } else {
    return <MaterialUIChip className={classes.other} label={result} />;
  }
}

Chip.propTypes = {
  result: PropTypes.string.isRequired,
};
