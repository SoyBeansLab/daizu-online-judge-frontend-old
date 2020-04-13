import React from "react";
import StoryRouter from "storybook-react-router";
//import { action } from '@storybook/addon-actions';

import HeaderAppBar from "../molecules/HeaderAppBar";

export default {
  title: "Molecules",
  component: HeaderAppBar,
  decorators: [StoryRouter()],
};

export const header_appbar = () => <HeaderAppBar />;
