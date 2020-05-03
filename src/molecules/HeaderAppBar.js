import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import LinkButton from "../atoms/LinkButton";
import Button from "../atoms/Button";
import LinkTitleImage from "./LinkTitleImage";

export default function HeaderAppBar(props) {
  // const user = props.user;
  const isAuthenticated = props.isAuthenticated;
  const loginWithRedirect = props.loginWithRedirect;

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Container justify="flex-start">
          <LinkTitleImage />
        </Container>

        <LinkButton to="/" text="HOME" />
        <LinkButton to="/contests" text="CONTESTS" />
        {!isAuthenticated && <Button text="SIGN IN" variant="text" onClick={loginWithRedirect} />}
        {isAuthenticated && <Button text="SIGN OUT" variant="text" onClick={loginWithRedirect} />}
      </Toolbar>
    </AppBar>
  );
}

HeaderAppBar.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  loginWithRedirect: PropTypes.func,
};
