import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Mascot from "../images/soy-da-.png";

const useStyles = makeStyles(() => ({
  mascot: {
    width: "10%",
    color: "#ffffff",
    border: "0",
  },
}));

export default function TitleImage() {
  const classes = useStyles();

  return <img src={Mascot} className={classes.mascot} />;
}
