import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import MascotCharacter from "../../atoms/MascotCharacter";
import TitleLogo from "../../atoms/TitleLogo";
import Button from "../../atoms/Button/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  mascot: {
    width: "10%",
    minWidth: "150px",
  },
  logo: {
    width: "300px",
  },
  button: {
    margin: theme.spacing(1),
    color: "#ffffff",
  },
  link: {
    color: theme.palette.primary.dark,
  },
}));

function NotSigninHomeComponent(props) {
  const classes = useStyles();

  const loginWithRedirect = props.loginWithRedirect;

  return (
    <div className={classes.root}>
      <MascotCharacter className={classes.mascot} />
      <TitleLogo className={classes.logo} />
      <Button text="Sign in" color="secondary" className={classes.button} onClick={loginWithRedirect} />
      <Link className={classes.link} href="#" onClick={loginWithRedirect}>
        アカウントがない人はコチラ
      </Link>
    </div>
  );
}

NotSigninHomeComponent.propTypes = {
  loginWithRedirect: PropTypes.func.isRequired,
};

export default NotSigninHomeComponent;
