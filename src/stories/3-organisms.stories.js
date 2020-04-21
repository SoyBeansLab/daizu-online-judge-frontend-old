import React from "react";
import StoryRouter from "storybook-react-router";

import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Loading from "../organisms/Loading";

export default {
  title: "Organisms",
  component: "Footer",
  decorators: [StoryRouter()],
};

export const footer = () => <Footer />;

export const header = () => <Header />;

export const loading = () => <Loading />;
