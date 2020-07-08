import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MaterialUIButton from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  button: {
    //    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function Button(props) {
  const classes = useStyles();

  return (
    <MaterialUIButton className={classes.button} {...props}>
      {props.text}
    </MaterialUIButton>
  );
}

// 受け取れるpropsの説明についてはMaterial UIのButtonのpropsを確認
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  variant: "contained",
  color: "inherit",
};
