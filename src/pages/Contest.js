import React, { useState, useEffect } from "react";
import ContestTemplate from "../templates/Contest";
import PropTypes from "prop-types";
//import request from "../requests/requests.js";
import axios from "axios";
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
  const [state, setState] = useState({
    isDone: false,
    items: []
  });
  const contestId = props.match.params.contest_id;
  useEffect(() => {
    axios
      .get("contests/" + contestId)
      .then(function(response) {
        const data = { ...response.data };
        setState({ isDone: true, items: data });
      })
      .catch(function(error) {
        console.log(error); //eslint-disable-line
      })
      .finally(function() {});
  }, [contestId]);

  return (
    <ContestTemplate
      contestTopContent={state.items.contest_top_content}
      problemLists={state.items.problem_list}
    />
  );
}

Contest.propTypes = {
  match: PropTypes.object
};
