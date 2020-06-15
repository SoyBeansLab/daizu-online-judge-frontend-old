import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import ContestTopComponent from "./ContestTopComponent";

export default {
  title: "Organisms/ContestTop",
  component: ContestTopComponent,
};

export const ContestTop = () => {
  return (
    <ContestTopComponent
      contest={{ top_content: text("top_content", "1") }}
      fetchContest={() => {}}
      isfetchedContest={boolean("isfetchedContest", true)}
    />
  );
};
