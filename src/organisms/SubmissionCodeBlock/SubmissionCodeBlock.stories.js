import React from "react";
import { text } from "@storybook/addon-knobs";
import SubmissionCodeBlockComponent from "./SubmissionCodeBlockComponent";

export default {
  title: "Organisms/SubmissionCodeBlock",
  component: SubmissionCodeBlockComponent,
};

export const SubmissionCodeBlock = () => {
  return (
    <SubmissionCodeBlockComponent
      submission={{ sourceCode: text("sourceCode", "#include"), language: text("language", "C++") }}
    />
  );
};
