import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SubmitStatusDetail from "../../molecules/SubmitStatusDetailTable";

import { submissionsOperations, submissionsSelectors } from "../../state/ducks/submissions";

function SubmissionDetailsContainer(props) {
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
      userName={username}
      language={language}
      score={score}
      result={result}
      executeTime={executeTime}
      memory={memory}
      testCase={testCase}
    />
  );
}

SubmissionDetailsContainer.propTypes = {
  submission: PropTypes.object,
  fetchSubmission: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  submission: submissionsSelectors.getSubmissionsBySubmitId(state, props),
});

const mapDispatchToProps = {
  fetchSubmission: submissionsOperations.fetchSubmission,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionDetailsContainer);
