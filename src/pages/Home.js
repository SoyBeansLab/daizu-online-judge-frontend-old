import React, { useState, useEffect } from "react";
import HomeTemplate from "../templates/Home.js";
//import request from "../requests/requests.js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

mock.onGet("/contests").reply(200, {
  contests: [
    {
      contestName: "Hello World",
      contestDate: "2019/04/04",
      contestTime: "120sec",
      contestContent: "#Hello World!",
    },
    {
      contestName: "Test",
      contestDate: "2019/04/04",
      contestTime: "120sec",
      contestContent: "#Hello World!",
    },
  ],
});

export default function Home() {
  const [state, setState] = useState({ isDone: false, slideItems: [] });
  useEffect(() => {
    axios
      .get("contests")
      .then(function(response) {
        const data = { ...response.data.contests };
        setState({ isDone: true, slideItems: Object.values(data) });
      })
      .catch(function(error) {  //eslint-disable-line
        // console.log(error);
      })
      .finally(function() {});
  }, []);

  return <HomeTemplate slideItemList={state.isDone ? state.slideItems : []} />;
}
