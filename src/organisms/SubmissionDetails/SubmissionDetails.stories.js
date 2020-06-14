import React from "react";
import SubmissionDetailsComponent from "./SubmissionDetailsComponent";

export default {
  title: "Organisms/SubmissionDetails",
  component: SubmissionDetailsComponent,
};

export const SubmissionDetails = () => {
  return <SubmissionDetailsComponent submission={{}} fetchSubmission={() => {}} />;
};
