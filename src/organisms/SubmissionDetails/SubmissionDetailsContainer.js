import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SubmitStatusDetail from "../../molecules/SubmitStatusDetailTable";

import { submissionsSelectors } from "../../state/ducks/submissions";

function SubmissionDetailsContainer(props) {
  const submission = props.submission;

  const submitDate = submission.submit_data;
  const problemName = submission.problem_name;
  const problemId = submission.problem_id;
  const username = submission.username;
  const language = submission.language;
  const score = submission.score;
  const result = submission.result;
  const executeTime = submission.execute_time;
  const memory = submission.memory;
  const testCase = submission.test_case;

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
};

const mapStateToProps = (state, props) => ({
  submission: submissionsSelectors.getSubmissionById(state, props),
});

export default connect(mapStateToProps)(SubmissionDetailsContainer);
