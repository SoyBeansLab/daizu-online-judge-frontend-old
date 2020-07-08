import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import ProblemDetails from "../../molecules/ProblemInfo";

function ProblemDetailsComponent(props) {
  const { problemId, contestId } = useParams();
  const url = `/contests/${contestId}/problems/${problemId}`;

  const fetchProblem = props.fetchProblem;
  const problem = props.problemDetails;
  const isFetchedProblem = props.isFetchedProblem;

  useEffect(() => {
    if (!isFetchedProblem) {
      fetchProblem(url);
    }
  }, [isFetchedProblem, fetchProblem, url]);

  return (
    <ProblemDetails
      problemId={problemId}
      problemName={problem.problem_name}
      problemText={problem.problem_detail}
      timeLimit={problem.time_limit}
      memoryLimit={problem.memory_limit}
      score={problem.score}
    />
  );
}

ProblemDetailsComponent.propTypes = {
  fetchProblem: PropTypes.func,
  problemDetails: PropTypes.object,
  isFetchedProblem: PropTypes.bool,
};

export default ProblemDetailsComponent;
