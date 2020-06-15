import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import HeaderComponent from "./HeaderComponent";

export default {
  title: "Organisms/Header",
  component: HeaderComponent,
};

export const Header = () => {
  return (
    <HeaderComponent
      user={{ nickname: text("nickname", "Guest") }}
      isAuthenticated={boolean("isAuthenticated", false)}
      loginWithRedirect={() => {}}
      logoutWithRedirect={() => {}}
    />
  );
};
