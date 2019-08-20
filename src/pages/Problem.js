import React, { useState, useEffect } from "react";
import ProblemTemplate from "../templates/Problem.js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

mock.onGet("/contest/uchipara/problems/hogehoge").reply(200, {
  problem: {
    contest_id: "uchipara",
    problem_id: "hogehoge",
    problem_name: "初めての競技プログラミング",
    time_limit: 2,
    memory_limit: 2,
    score: 100,
    writer: "uchipara",
    problem_detail: "ある2つの整数aとbが与えられます. 2つの整数の和を出力してください.",
  },
});

mock.onGet("/language").reply(200, {
  language_info: {
    languages: ["C", "C++", "Python", "Java"],
    languages_dict: { C: 0, "C++": 1, Python: 2, Java: 3 },
  },
});

export default function Problem() {
  const [state, setState] = useState({
    isProblemDone: false,
    isLanguageDone: false,
    problemData: {},
    languageData: {},
  });
  useEffect(() => {
    // contest_id
    // problem_id
    axios
      .get("/language")
      .then(function(response) {
        const data = { ...response.data.language_info };
        setState({
          isLanguageDone: true,
          languageData: data,
        });
      })
      .catch(function(error) { //eslint-disable-line
        // console.log(error)
      })
      .finally(function() {});
    axios
      .get("/contest/uchipara/problems/hogehoge")
      .then(function(response) {
        const data = response.data.problem;
        setState(state => ({ ...state, isProblemDone: true, problemData: data }));
      })
      .catch(function(error) { // eslint-disable-line
        // console.log(error);
      })
      .finally(function() {});
    // TODO: language情報を取るためのaxios.get
  }, []);

  return (
    <ProblemTemplate
      languageDictionary={state.isLanguageDone ? state.languageData.languages_dict : {}}
      languageLists={state.isLanguageDone ? state.languageData.languages : []}
      problemId={state.isProblemDone ? state.problemData.problem_id : ""}
      problemName={state.isProblemDone ? state.problemData.problem_name : ""}
      timeLimit={state.isProblemDone ? state.problemData.time_limit : 0}
      memoryLimit={state.isProblemDone ? state.problemData.memory_limit : 0}
      score={state.isProblemDone ? state.problemData.score : 0}
      problemText={state.isProblemDone ? state.problemData.problem_detail : ""}
    />
  );
}
