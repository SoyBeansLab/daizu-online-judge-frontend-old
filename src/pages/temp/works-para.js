import React from "react";
import ContestsTable from "../../molecules/ContestsTable.js";
import ProblemsTable from "../../molecules/ProblemsTable.js";
import RankingTable from "../../molecules/RankingTable.js";

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

const Works = () => (
  <div>
    <h1>para works</h1>

    <h2>Contests Table</h2>
    <ContestsTable contestLists={contestsTableTestData} />

    <h2>Problem Table</h2>
    <ProblemsTable problemLists={problemListsTestData} />

    <h2>Ranking Table</h2>
    <RankingTable rankingList={rankingListTestData} />
  </div>
);

export default Works;
