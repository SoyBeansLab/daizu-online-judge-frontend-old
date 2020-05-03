import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button as MaterialUiButton } from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function Button(props) {
  const classes = useStyles();

  const text = props.text || "";
  const onClick = props.onClick || function() {};
  const variant = props.variant || "contained";
  const color = props.color || "inherit";
  const style = props.style || classes.button;

  return (
    <MaterialUiButton color={color} variant={variant} className={style} onClick={onClick}>
      {text}
    </MaterialUiButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};
