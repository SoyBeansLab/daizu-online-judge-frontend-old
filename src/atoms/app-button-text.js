import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// css
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function TextButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Button variant="text" color="secondary" className={classes.button}>
        {props.buttonText}
      </Button>
    </div>
  );
}

// propsの型指定
TextButton.propTypes = {
  buttonText: PropTypes.string,
};
