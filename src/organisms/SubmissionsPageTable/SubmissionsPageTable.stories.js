import React from "react";
import { number, array } from "@storybook/addon-knobs";
import SubmissionsPageTableComponent from "./SubmissionsPageTableComponent";

export default {
  title: "Organisms/SubmissionsPageTable",
  component: SubmissionsPageTableComponent,
};

export const SubmissionsPageTable = () => {
  return (
    <SubmissionsPageTableComponent
      submissions={array("submissions", [])}
      page={number("page", 0)}
      total={number("total", 50)}
      setSubmissionsPage={() => {}}
      fetchSubmissions={() => {}}
    />
  );
};
