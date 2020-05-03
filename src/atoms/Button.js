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

export default function ButtonAtom(props) {
  const classes = useStyles();

  const text = props.text || "";
  const onClick = props.onClick || function() {};
  const variant = props.variant || "contained";
  const color = props.color || "inherit";
  const style = props.style || classes.button;

  return (
    <Button color={color} variant={variant} className={style} onClick={onClick}>
      {text}
    </Button>
  );
}

// 受け取れるpropsの説明についてはMaterial UIのButtonのpropsを確認
ButtonAtom.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};
