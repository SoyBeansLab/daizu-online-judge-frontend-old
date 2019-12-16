import React, { useEffect, useReducer } from "react";
import ProblemTemplate from "../templates/Problem";
import PropTypes from "prop-types";
import { reducer } from "../reducer";
import { request } from "../requests";
import urljoin from "url-join";

export default function Problem(props) {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const [lang, langDispatch] = useReducer(reducer, { loading: true, data: [] });
  const contestId = props.match.params.contest_id;
  const problemId = props.match.params.problem_id;
  const endpoint = urljoin("/contests", contestId, "/problems", problemId);

  useEffect(() => {
    request(endpoint, dispatch);
    request("/languages", langDispatch);
  }, [endpoint]);

  return (
    <ProblemTemplate
      problemId={state.data.problem_id}
      problemName={state.data.problem_name}
      timeLimit={state.data.time_limit}
      memoryLimit={state.data.memory_limit}
      score={state.data.score}
      problemText={state.data.problem_detail}
      languageLists={lang.data}
    />
  );
}

Problem.propTypes = {
  match: PropTypes.object,
};
