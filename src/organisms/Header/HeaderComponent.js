import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import LinkButton from "../../atoms/Button/LinkButton";
import SigninMenuButton from "../../molecules/SigninMenuButton";
import LinkTitleImage from "../../molecules/LinkTitleImage";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    backgroundColor: theme.palette.primary.light,
  },
  title: {
    width: "20%",
    color: theme.palette.primary.contrastText,
    border: "0",
  },
  button: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
}));

export default function HeaderComponent(props) {
  const classes = useStyles();

  const user = props.user;
  const username = user.nickname || "Guest";
  const isAuthenticated = props.isAuthenticated;
  const loginWithRedirect = props.loginWithRedirect;
  const logoutWithRedirect = props.logoutWithRedirect;

  return (
    <AppBar className={classes.root} position="static" elevation={0}>
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

HeaderComponent.propTypes = {
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loginWithRedirect: PropTypes.func.isRequired,
  logoutWithRedirect: PropTypes.func.isRequired,
};

HeaderComponent.defaultProps = {
  user: {},
};
