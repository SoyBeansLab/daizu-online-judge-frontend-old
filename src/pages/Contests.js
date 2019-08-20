import React, { useState, useEffect } from "react";
import ContestsTemplate from "../templates/Contests.js";
//import request from "../requests/requests.js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

mock.onGet("/contests").reply(200, {
  contests: {
    holdingContestLists: [
      {
        contestName: "Hello World",
        contestDate: "2019/04/04",
        contestTime: "120sec",
        contestNumber: 4,
        contestContent: "#Hello World!",
      },
    ],
    scheduledContestLists: [
      {
        contestName: "GitHub",
        contestDate: "2019/04/04",
        contestTime: "120sec",
        contestNumber: 4,
        contestContent: "#Hello World!",
      },
      {
        contestName: "WelcomeContest",
        contestDate: "2019/04/04",
        contestTime: "120sec",
        contestNumber: 4,
        contestContent: "#Hello World!",
      },
    ],
    finishedContestLists: [],
  },
});

export default function Home() {
  const [state, setState] = useState({ isDone: false, slideItems: [] });
  useEffect(() => {
    axios
      .get("contests")
      .then(function(response) {
        const data = { ...response.data.contests };
        setState({ isDone: true, slideItems: data });
      })
      .catch(function(error) {  //eslint-disable-line
        // console.log(error);
      })
      .finally(function() {});
  }, []);

  return (
    <ContestsTemplate
      holdingContestLists={state.isDone ? Object.values(state.slideItems.holdingContestLists) : []}
      scheduledContestLists={state.isDone ? Object.values(state.slideItems.scheduledContestLists) : []}
      finishedContestLists={state.isDone ? Object.values(state.slideItems.finishedContestLists) : []}
    />
  );
}
