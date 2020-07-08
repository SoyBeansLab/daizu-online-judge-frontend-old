import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../images/daizuLogo.png";

const useStyles = makeStyles(() => ({
  title: {
    width: "180px",
    //color: "#ffffff",
    border: "0",
  },
}));

export default function TitleImage(props) {
  const classes = useStyles();

  return <img src={Logo} alt="logo" className={classes.title} {...props} />;
}

TitleImage.propTypes = {
  className: PropTypes.string,
};
