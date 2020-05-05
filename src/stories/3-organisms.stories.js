import React from "react";
import StoryRouter from "storybook-react-router";
import { muiTheme } from "storybook-addon-material-ui";

import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Loading from "../organisms/Loading";
import Slider from "../organisms/Slider";

import { theme } from "../materialui/theme";

export default {
  title: "Organisms",
  component: "Footer",
  decorators: [StoryRouter(), muiTheme([theme])],
};

export const footer = () => <Footer />;

export const header = () => <Header />;

export const loading = () => <Loading />;

export const slider = () => {
  const sliderTestData = [
    {
      contest_id: "hoge",
      contest_name: "hoge contest",
      contest_date: "2020/01/01",
      contest_time: 120,
      contest_description: "Hello World",
    },
    {
      contest_id: "hoge2",
      contest_name: "hoge2 contest",
      contest_date: "2020/01/02",
      contest_time: 120,
      contest_description: "Welcome",
    },
  ];
  return <Slider slideItemList={sliderTestData} />;
};
