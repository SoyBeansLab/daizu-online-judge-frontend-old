import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  info: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderLeft: "5px solid rgb(0, 137, 123)",
    backgroundColor: "rgba(0, 137, 123, 0.1)",
  },
  warning: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderLeft: "5px solid rgb(255, 152, 9)",
    backgroundColor: "rgba(255, 152, 9, 0.1)",
  },
  error: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderLeft: "5px solid rgb(236, 64, 122)",
    backgroundColor: "rgba(236, 64, 122, 0.1)",
  },
}));

export default function Blockqoute(props) {
  const classes = useStyles();

  return (
    <blockquote className={classes.info} {...props}>
      {props.text}
    </blockquote>
  );
}

Blockqoute.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Blockqoute.defaultProps = {
  color: "info",
};
