import React, { useEffect, useReducer } from "react";
import ContestTemplate from "../templates/Contest";
import PropTypes from "prop-types";
import { reducer } from "../reducer";
import axios from "axios";
import { request } from "../requests";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

mock.onGet("/contests/mitohato").reply(200, {
  contest_top_content: "## Hello World!",
  problem_list: [
    {
      problem_id: "hello_world",
      problem_order: "A",
      problem_name: "Hello World",
      time_limit: 2,
      memory_limit: 256,
      problem_score: 100
    },
    {
      problem_id: "hogehoge",
      problem_order: "B",
      problem_name: "hogehoge",
      time_limit: 2,
      memory_limit: 256,
      problem_score: 100
    }
  ]
});

export default function Contest(props) {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const contestId = props.match.params.contest_id; // url paramから取得

  useEffect(() => {
    request("/contests/" + contestId, dispatch);
  }, [contestId]);

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
