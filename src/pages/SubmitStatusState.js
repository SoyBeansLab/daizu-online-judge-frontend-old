import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import SubmitStatusState from "../templates/SubmitStatusStatu";
import { reducer } from "../reducer";
import { request } from "../requests";
import urljoin from "url-join";

export default function SubmitStatusDetail() {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const { contestId, submitId } = useParams();
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
