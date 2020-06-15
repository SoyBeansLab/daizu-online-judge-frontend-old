import React from "react";
import { number, array } from "@storybook/addon-knobs";
import RankingPageTableComponent from "./RankingPageTableComponent";

export default {
  title: "Organisms/RankingPageTable",
  component: RankingPageTableComponent,
};

export const RankingPageTable = () => {
  return (
    <RankingPageTableComponent
      ranking={array("ranking", [])}
      page={number("page", 0)}
      total={number("total", 50)}
      setRankingPage={() => {}}
      fetchRanking={() => {}}
    />
  );
};
