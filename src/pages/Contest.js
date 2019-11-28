import React, { useEffect, useReducer } from "react";
import ContestTemplate from "../templates/Contest";
import PropTypes from "prop-types";
import { reducer } from "../reducer";
//import axios from "axios";
import { request } from "../requests";
import urljoin from "url-join";
//import { config } from "../config";

export default function Contest(props) {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const contestId = props.match.params.contest_id; // url paramから取得
  const endpoint = urljoin("/contests", contestId);

  useEffect(() => {
    request(endpoint, dispatch);
  }, [endpoint]);

  return (
    <ContestTemplate
      contestTopContent={state.data.contest_top_content}
      problemLists={state.data.problem_list}
    />
  );
}

Contest.propTypes = {
  match: PropTypes.object
};
