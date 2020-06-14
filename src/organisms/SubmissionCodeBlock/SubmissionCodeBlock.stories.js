import React from "react";
import SubmissionCodeBlockComponent from "./SubmissionCodeBlockComponent";

export default {
  title: "Organisms/SubmissionCodeBlock",
  component: SubmissionCodeBlockComponent,
};

export const SubmissionCodeBlock = () => {
  return <SubmissionCodeBlockComponent submission={{ sourceCode: "print", language: "C++" }} />;
};
