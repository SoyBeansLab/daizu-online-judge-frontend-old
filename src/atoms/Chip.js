import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MaterialUIChip from "@material-ui/core/Chip";

const useStyles = makeStyles(() => ({
  chip: {
    color: "#f5f5f5",
  },
}));

export default function Chip(props) {
  const classes = useStyles();
  const result = props.result;

  if (result === "AC") {
    return <MaterialUIChip color="primary" className={classes.chip} label={result} />;
  } else if (result === "WA" || result === "TLE") {
    return <MaterialUIChip color="secondary" label={result} />;
  } else {
    return <MaterialUIChip label={result} />;
  }
}

Chip.propTypes = {
  result: PropTypes.string,
};
