import React from "react";
import { boolean, array, text, number } from "@storybook/addon-knobs";
import ProblemsTableComponent from "./ProblemsTableComponent";

export default {
  title: "Organisms/ProblemsTable",
  component: ProblemsTableComponent,
};

export const ProblemsTable = () => {
  return (
    <ProblemsTableComponent
      problemList={array("problemList", [
        {
          order: number("order", 1),
          problem_name: text("ProblemName", "hoge"),
          problem_detail: text("problemDetail", "hoge"),
          time_limit: number("timeLimit", 2),
          memory_limit: number("memoryLimit", 256),
          score: number("score", 100),
        },
        {
          order: number("order", 2),
          problem_name: text("ProblemName", "hoge"),
          problem_detail: text("problemDetail", "hoge"),
          time_limit: number("timeLimit", 2),
          memory_limit: number("memoryLimit", 256),
          score: number("score", 100),
        },
      ])}
      fetchProblems={() => {}}
      isFetched={boolean("isFetched", true)}
    />
  );
};
