import React from "react";
import DataTable from "../../molecules/ContestsTable.js";

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

const Works = () => (
  <div>
    <h1>para works</h1>
    <DataTable contestLists={contestsTableTestData} />
  </div>
);

export default Works;
