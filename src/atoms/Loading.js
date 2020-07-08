import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Loading(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props}>
      <CircularProgress color="primary" size="10rem" />
    </div>
  );
}

Loading.propTypes = {
  className: PropTypes.object,
};
