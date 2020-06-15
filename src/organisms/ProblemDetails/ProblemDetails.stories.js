import React from "react";
import { boolean, text, number } from "@storybook/addon-knobs";
import ProblemDetailsComponent from "./ProblemDetailsComponent";

export default {
  title: "Organisms/ProblemDetails",
  component: ProblemDetailsComponent,
};

export const ProblemDetails = () => {
  return (
    <ProblemDetailsComponent
      problemDetails={{
        problem_name: text("problemName", "name"),
        problem_detail: text("problemText", "text"),
        time_limit: number("timeLimit", 2),
        memory_limit: number("memoryLimit", 256),
        score: number("score", 100),
      }}
      fetchProblem={() => {}}
      isFetchedProblem={boolean("isFetchedProblem", true)}
    />
  );
};
