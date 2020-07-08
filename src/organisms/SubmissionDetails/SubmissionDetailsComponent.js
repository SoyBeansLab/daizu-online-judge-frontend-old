import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import SubmitStatusDetail from "../../molecules/SubmitStatusDetailTable";

function SubmissionDetailsComponent(props) {
  const { contestId, submitId } = useParams();
  const endpoint = `/contests/${contestId}/submits/${submitId}`;

  const fetchSubmission = props.fetchSubmission;
  const submission = props.submission;

  const submitDate = submission.submitData;
  const problemName = submission.problemName;
  const problemId = submission.problemId;
  const username = submission.username;
  const language = submission.language;
  const score = submission.score;
  const result = submission.result;
  const executeTime = submission.executeTime;
  const memory = submission.memory;
  const testCase = submission.testCase;

  useEffect(() => {
    fetchSubmission(endpoint);
  }, [fetchSubmission, endpoint]);

  return (
    <SubmitStatusDetail
      submitDate={submitDate}
      problemName={problemName}
      problemId={problemId}
      contestId={contestId}
      userName={username}
      language={language}
      score={score}
      result={result || "WJ"}
      executeTime={executeTime}
      memory={memory}
      testCase={testCase}
    />
  );
}

SubmissionDetailsComponent.propTypes = {
  submission: PropTypes.object,
  fetchSubmission: PropTypes.func,
};

export default SubmissionDetailsComponent;
