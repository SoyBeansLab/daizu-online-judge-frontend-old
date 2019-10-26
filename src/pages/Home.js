import React, { useState, useEffect } from "react";
import HomeTemplate from "../templates/Home.js";
//import request from "../requests/requests.js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

mock.onGet("/contests").reply(200, {
  upcoming: [
    // 予定されているやつ
    {
      contest_id: "mitohato",
      contest_name: "mito_contest",
      contest_date: "2019-08-17 12:00:00",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "Hello World!",
      problem_number: 2
    }
  ],
  current: [
    // 開催中のやつ
    {
      contest_id: "mitohato",
      contest_name: "mito_contest",
      contest_date: "2019-08-17 12:00:00",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "",
      problem_number: 2
    }
  ],
  recent: [] // 終了したやつ
});

export default function Home() {
  const [state, setState] = useState({ isDone: false, slideItems: [] });
  useEffect(() => {
    axios
      .get("contests")
      .then(function(response) {
        const data = {
          ...response.data.upcoming
        };
        setState({ isDone: true, slideItems: Object.values(data) });
      })
      .catch(function(error) {
        console.log(error); //eslint-disable-line
      })
      .finally(function() {});
  }, []);

  return <HomeTemplate slideItemList={state.isDone ? state.slideItems : []} />;
}
