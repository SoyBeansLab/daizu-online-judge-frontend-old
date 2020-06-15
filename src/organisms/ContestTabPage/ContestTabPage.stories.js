import React from "react";
import { array, number, boolean } from "@storybook/addon-knobs";
import ContestTabPageComponent from "./ContestTabPageComponent";

export default {
  title: "Organisms/ContestTabPage",
  component: ContestTabPageComponent,
};

export const ContestTabPage = () => {
  return (
    <ContestTabPageComponent
      rankings={array("ranking", [])}
      submissionsPage={number("SubmissionPage", 0)}
      isRegisted={boolean("isRegisted", true)}
      setRankingPage={() => {}}
      setSubmissionsPage={() => {}}
      fetchRegistration={() => {}}
    />
  );
};
