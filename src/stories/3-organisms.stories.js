import React from "react";
import StoryRouter from "storybook-react-router";
import { muiTheme } from "storybook-addon-material-ui";

import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Loading from "../organisms/Loading";

import { theme } from "../materialui/theme";

export default {
  title: "Organisms",
  component: "Footer",
  decorators: [StoryRouter(), muiTheme([theme])],
};

export const footer = () => <Footer />;

export const header = () => <Header />;

export const loading = () => <Loading />;
