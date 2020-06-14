import React from "react";
import SubmissionsPageTableComponent from "./SubmissionsPageTableComponent";

export default {
  title: "Organisms/SubmissionsPageTable",
  component: SubmissionsPageTableComponent,
};

export const SubmissionsPageTable = () => {
  return (
    <SubmissionsPageTableComponent
      submissions={[]}
      page={0}
      total={50}
      setSubmissionsPage={() => {}}
      fetchSubmissions={() => {}}
    />
  );
};
