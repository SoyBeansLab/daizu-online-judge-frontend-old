import React from "react";
import ContestsTable from "../../molecules/ContestsTable.js";
import ProblemsTable from "../../molecules/ProblemsTable.js";
import RankingTable from "../../molecules/RankingTable.js";
import ContestsListTabs from "../../molecules/ContestsListTabs.js";
import SubmitStatusTable from "../../molecules/SubmitStatusTable.js";
import ContestsTabs from "../../molecules/ContestTabs.js";

import Contests from "../../templates/Contests.js";
import Contest from "../../templates/Contest.js";

const contestsTableTestData = [
  {
    contestName: "Hello Worold",
    contestDate: "2019/03/04",
    contestTime: 120,
    problemNumber: 4,
  },
  {
    contestName: "Hello Worold2",
    contestDate: "2019/03/05",
    contestTime: 120,
    problemNumber: 4,
  },
];

const contestsTableTestData2 = [
  {
    contestName: "Hell World",
    contestDate: "2019/03/01",
    contestTime: 220,
    problemNumber: 10,
  },
  {
    contestName: "Hello Worold2",
    contestDate: "2019/03/05",
    contestTime: 120,
    problemNumber: 4,
  },
];

const problemListsTestData = [
  {
    problemId: "hoge1",
    problemName: "Hello World",
    memoryLimit: 256,
    timeLimit: 2,
    problemScore: 100,
  },
  {
    problemId: "hoge2",
    problemName: "Fizz Buzz",
    memoryLimit: 256,
    timeLimit: 2,
    problemScore: 400,
  },
];

const rankingListTestData = [
  {
    rankUserId: "nemu_sou",
    rankTotal: "1",
    rankScore: 200,
  },
  {
    rankUserId: "mitohato",
    rankTotal: "2",
    rankScore: 200,
  },
];

const submitStatusListsTestData = [
  {
    submitId: "123456",
    problemName: "Douteki keikaku plan",
    userName: "nemu_sou",
    result: "AC",
    language: "C++",
    score: 100,
    submitDate: "2019-05-05",
  },
  {
    submitId: "143456",
    problemName: "Deeplearning",
    userName: "mitohato",
    result: "AC",
    language: "Kotlin",
    score: 100,
    submitDate: "2019-05-011",
  },
];

const Works = () => (
  <div>
    <h1>para works</h1>

    <h2>Contests Table</h2>
    <ContestsTable contestLists={contestsTableTestData} />

    <h2>Problem Table</h2>
    <ProblemsTable problemLists={problemListsTestData} />

    <h2>Ranking Table</h2>
    <RankingTable rankingList={rankingListTestData} />

    <h2>Submit Status Table</h2>
    <SubmitStatusTable submitStatusLists={submitStatusListsTestData} />

    <h2>Contest Tabs</h2>
    <ContestsTabs
      contestTopContent={"# Hello World"}
      problemLists={problemListsTestData}
      submitStatusLists={submitStatusListsTestData}
      rankingList={rankingListTestData}
    />

    <h2>Contest Template </h2>
    <Contest
      contestTopContent={"# Hello World \n\n this is top content"}
      problemLists={problemListsTestData}
      submitStatusLists={submitStatusListsTestData}
      rankingList={rankingListTestData}
    />

    <h2>Contests Template</h2>
    <Contests
      holdingContestLists={contestsTableTestData}
      scheduledContestLists={contestsTableTestData2}
      finishedContestLists={contestsTableTestData}
    />
  </div>
);

export default Works;
