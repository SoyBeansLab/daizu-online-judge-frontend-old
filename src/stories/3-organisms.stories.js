import React from "react";
import StoryRouter from "storybook-react-router";

import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default {
  title: "Organisms",
  component: "Footer",
  decorators: [StoryRouter()],
};

export const footer = () => <Footer />;

export const header = () => <Header />;
