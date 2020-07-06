import React from "react";
import HeaderComponent from "./HeaderComponent";
import { useAuth0 } from "@auth0/auth0-react";

export default function HeaderContainer() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // eslint-disable-next-line
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <HeaderComponent
      user={user}
      isAuthenticated={isAuthenticated}
      loginWithRedirect={loginWithRedirect}
      logoutWithRedirect={logoutWithRedirect}
    />
  );
}
