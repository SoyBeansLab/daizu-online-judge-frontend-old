import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import LinkButton from "../atoms/app-link-button";
import LinkTitleImage from "./LinkTitleImage";

export default function HeaderAppBar() {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Container justify="flex-start">
          <LinkTitleImage />
        </Container>

        <LinkButton to="/" text="HOME" />
        <LinkButton to="/contests" text="CONTESTS" />
        <LinkButton to="/signin" text="SIGN IN" />
      </Toolbar>
    </AppBar>
  );
}
