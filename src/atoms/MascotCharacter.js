import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Mascot from "../images/soy-da-.png";

const useStyles = makeStyles(() => ({
  mascot: {
    width: "10%",
    color: "#ffffff",
    border: "0",
  },
}));

export default function TitleImage(props) {
  const classes = useStyles();

  return <img src={Mascot} alt="mascot" className={classes.mascot} {...props} />;
}

TitleImage.propTypes = {
  className: PropTypes.object,
};
