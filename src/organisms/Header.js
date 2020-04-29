import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderAppBar from "../molecules/HeaderAppBar";
import { useAuth0 } from "../react-auth0-spa";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  title: {
    width: "20%",
    color: "#ffffff",
    border: "0",
  },
  button: {
    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function Header() {
  const classes = useStyles();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // eslint-disable-next-line
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className={classes.root}>
      <HeaderAppBar user={user} isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} />
    </div>
  );
}
