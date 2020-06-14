import React from "react";
import HeaderComponent from "./HeaderComponent";

export default {
  title: "Organisms/Header",
  component: HeaderComponent,
};

export const Header = () => {
  return (
    <HeaderComponent user={{}} isAuthenticated={false} loginWithRedirect={() => {}} logoutWithRedirect={() => {}} />
  );
};
