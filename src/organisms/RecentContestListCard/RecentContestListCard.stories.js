import React from "react";
import RecentContestListCardComponent from "./RecentContestListCardComponent";

export default {
  title: "Organisms/RecentContestListCard",
  component: RecentContestListCardComponent,
};

export const RecentContestListCard = () => {
  const contestList = [
    {
      contest_id: "mitohato",
      contest_status: "current",
      contest_name: "Welcome Contest Now!",
      contest_date: new Date(),
    },
    {
      contest_id: "mitohato",
      contest_status: "upcoming",
      contest_name: "Welcome Contest future!",
      contest_date: new Date(),
    },
    {
      contest_id: "mitohato",
      contest_status: "recent",
      contest_name: "Welcome Contest owari!",
      contest_date: new Date(),
    },
  ];

  return <RecentContestListCardComponent contestList={contestList} />;
};
