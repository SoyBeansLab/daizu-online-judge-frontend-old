import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../images/daizuLogo.png";

const useStyles = makeStyles(() => ({
  title: {
    width: "20%",
    //color: "#ffffff",
    border: "0",
  },
}));

export default function TitleImage() {
  const classes = useStyles();

  return <img src={Logo} alt="logo" className={classes.title} />;
}
