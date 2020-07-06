import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import MascotCharacter from "../../atoms/MascotCharacter";
import TitleLogo from "../../atoms/TitleLogo";
import Button from "../../atoms/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  mascot: {
    width: "40%",
    height: "40%",
  },
  button: {
    margin: theme.spacing(1),
    color: "#ffffff",
  },
}));

function NotSigninHomeComponent(props) {
  const classes = useStyles();

  const loginWithRedirect = props.loginWithRedirect;

  return (
    <div className={classes.root}>
      <MascotCharacter className={classes.mascot} />
      <TitleLogo />
      <Button text="Sign in" color="secondary" style={classes.button} onClick={loginWithRedirect} />
      <Link>アカウントがない人はコチラ</Link>
    </div>
  );
}

NotSigninHomeComponent.propTypes = {
  loginWithRedirect: PropTypes.func,
};

export default NotSigninHomeComponent;
