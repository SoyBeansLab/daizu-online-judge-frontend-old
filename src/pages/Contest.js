import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import ContestTemplate from "../templates/Contest";
import { reducer } from "../reducer";
//import axios from "axios";
import { request } from "../requests";
import urljoin from "url-join";
//import { config } from "../config";

export default function Contest() {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const { contestId } = useParams(); // url paramから取得
  const endpoint = urljoin("/contests", contestId);

  useEffect(() => {
    request(endpoint, dispatch);
  }, [endpoint]);

  return (
    <ContestTemplate
      contestTopContent={state.data.contest_top_content}
      problemLists={state.data.problem_list}
      contestId={contestId}
    />
  );
}
