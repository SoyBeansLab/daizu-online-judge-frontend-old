import React, { useEffect, useReducer } from "react";
import SubmitStatusState from "../templates/SubmitStatusStatu";
import PropTypes from "prop-types";
import { reducer } from "../reducer";
import { request } from "../requests";
import urljoin from "url-join";

export default function SubmitStatusDetail(props) {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const contestId = props.match.params.contest_id; // url paramから取得
  const submitId = props.match.params.submit_id; // url paramから取得
  const endpoint = urljoin("/contests", contestId, "/submits/", submitId);

  useEffect(() => {
    request(endpoint, dispatch);
  }, [endpoint]);

  return (
    <SubmitStatusState
      submitId={state.data.submit_id}
      submitDate={state.data.submit_date}
      problemName={state.data.problem_name}
      userName={state.data.username}
      language={state.data.language}
      score={state.data.score}
      result={state.data.result}
      executeTime={state.data.execute_time}
      memory={state.data.memory}
      sourceCode={state.data.sourceCode}
    />
  );
}

SubmitStatusDetail.propTypes = {
  match: PropTypes.object,
};
