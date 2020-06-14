import React from "react";
import ContestTopComponent from "./ContestTopComponent";

export default {
  title: "Organisms/ContestTop",
  component: ContestTopComponent,
};

export const ContestTop = () => {
  return <ContestTopComponent contest={{ top_content: "1" }} fetchContest={() => {}} isfetchedContest={true} />;
};
