import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
}));

export default function LinkButton(props) {
  const classes = useStyles();

  return (
    <Button color="inherit" className={classes.button} component={Link} to={props.to}>
      {props.text}
    </Button>
  );
}

LinkButton.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};
