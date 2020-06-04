import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import LinkButton from "../../atoms/LinkButton";
import SigninMenuButton from "../../molecules/SigninMenuButton";
import LinkTitleImage from "../../molecules/LinkTitleImage";

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

export default function HeaderComponent(props) {
  const classes = useStyles();

  const user = props.user || {};
  const username = user.nickname || "Guest";
  const isAuthenticated = props.isAuthenticated;
  const loginWithRedirect = props.loginWithRedirect;
  const logoutWithRedirect = props.logoutWithRedirect;

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Container justify="flex-start">
            <LinkTitleImage />
          </Container>

          <LinkButton to="/" text="HOME" />
          <LinkButton to="/contests" text="CONTESTS" />
          <SigninMenuButton
            username={username}
            isAuthenticated={isAuthenticated}
            logoutWithRedirect={logoutWithRedirect}
            loginWithRedirect={loginWithRedirect}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderComponent.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  loginWithRedirect: PropTypes.func,
  logoutWithRedirect: PropTypes.func,
};