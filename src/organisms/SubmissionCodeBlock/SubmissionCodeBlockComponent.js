import React from "react";
import PropTypes from "prop-types";

import CodeBlock from "../../atoms/CodeBlock";

function SubmissionCodeBlockComponent(props) {
  const submission = props.submission;
  const sourceCode = submission.sourceCode || "";
  const language = submission.language || "";

  return <CodeBlock language={language}>{sourceCode}</CodeBlock>;
}

SubmissionCodeBlockComponent.propTypes = {
  submission: PropTypes.shape({
    sourceCode: PropTypes.string,
    language: PropTypes.string,
  }).isRequired,
};

export default SubmissionCodeBlockComponent;
