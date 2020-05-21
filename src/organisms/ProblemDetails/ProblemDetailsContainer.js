import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import ProblemDetails from "../../molecules/ProblemInfo";

import { problemsOperations, problemsSelectors } from "../../state/ducks/problems";

function ProblemDetailsContainer(props) {
  const { problemId, contestId } = useParams();
  const url = `/contests/${contestId}/problems/${problemId}`;

  const fetchProblem = props.fetchProblem;
  const problem = props.problemDetails;

  useEffect(() => {
    fetchProblem(url);
  }, [fetchProblem, url]);

  return (
    <ProblemDetails
      problemId={problemId}
      problemName={problem.problem_name}
      problemText={problem.problem_detail}
      timeLimit={problem.time_limit}
      memoryLimit={problem.memoryLimit}
      score={problem.score}
    />
  );
}

ProblemDetailsContainer.propTypes = {
  fetchProblem: PropTypes.func,
  problemDetails: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  problemDetails: problemsSelectors.getProblemById(state, props),
});

const mapDispatchToProps = {
  fetchProblem: problemsOperations,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProblemDetailsContainer);
