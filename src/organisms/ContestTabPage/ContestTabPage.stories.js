import React from "react";
import ContestTabPageComponent from "./ContestTabPageComponent";

export default {
  title: "Organisms/ContestTabPage",
  component: ContestTabPageComponent,
};

export const ContestTabPage = () => {
  return (
    <ContestTabPageComponent
      rankings={[]}
      submissionsPage={0}
      isRegisted={true}
      setRankingPage={() => {}}
      setSubmissionsPage={() => {}}
      fetchRegistration={() => {}}
    />
  );
};
