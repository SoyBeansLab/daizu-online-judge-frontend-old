import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import LinkButton from "../atoms/LinkButton";
import SigninMenuButton from "./SigninMenuButton";
import LinkTitleImage from "./LinkTitleImage";

export default function HeaderAppBar(props) {
  const user = props.user || {};
  const username = user.nickname || "Guest";
  const isAuthenticated = props.isAuthenticated;
  const loginWithRedirect = props.loginWithRedirect;
  const logoutWithRedirect = props.logoutWithRedirect;

  return (
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
  );
}

HeaderAppBar.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  loginWithRedirect: PropTypes.func,
  logoutWithRedirect: PropTypes.func,
};
