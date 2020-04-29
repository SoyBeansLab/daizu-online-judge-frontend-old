import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function LinkButton(props) {
  const classes = useStyles();
  const text = props.text || "";
  const onClick = props.onClick || function() {};

  return (
    <Button color="inherit" className={classes.button} onClick={onClick}>
      {text}
    </Button>
  );
}

LinkButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
