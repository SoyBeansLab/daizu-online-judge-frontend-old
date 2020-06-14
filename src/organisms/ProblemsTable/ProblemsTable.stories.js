import React from "react";
import ProblemsTableComponent from "./ProblemsTableComponent";

export default {
  title: "Organisms/ProblemsTable",
  component: ProblemsTableComponent,
};

export const ProblemsTable = () => {
  return <ProblemsTableComponent problemList={[]} fetchProblems={() => {}} isFetched={true} />;
};
