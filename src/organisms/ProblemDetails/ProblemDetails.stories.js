import React from "react";
import ProblemDetailsComponent from "./ProblemDetailsComponent";

export default {
  title: "Organisms/ProblemDetails",
  component: ProblemDetailsComponent,
};

export const ProblemDetails = () => {
  return <ProblemDetailsComponent problemDetails={{}} fetchProblem={() => {}} isFetchedProblem={true} />;
};
