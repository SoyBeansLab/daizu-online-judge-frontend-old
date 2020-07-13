import React from "react";

import JudgeStatusChip from "./JudgeStatusChip";
import ContestStatusChip from "./ContestStatusChip";

export default {
  title: "Atoms/Chip",
};

export const JudgeStatusChip_ = () => {
  // correct "AC";
  // wrong ["WA", "TLE", "MLE", "RE", "CE", "OLE", "IE"];

  return (
    <div>
      <JudgeStatusChip result="AC" />
      <JudgeStatusChip result="WA" />
      <JudgeStatusChip result="RE" />
      <JudgeStatusChip result="CE" />
      <JudgeStatusChip result="IE" />
      <JudgeStatusChip result="TLE" />
      <JudgeStatusChip result="OLE" />
      <JudgeStatusChip result="MLE" />
      <JudgeStatusChip result="WJ" />
    </div>
  );
};

export const ContestStatusChip_ = () => {
  return (
    <div>
      <ContestStatusChip contestStatus="current" />
      <ContestStatusChip contestStatus="upcoming" />
      <ContestStatusChip contestStatus="recent" />
    </div>
  );
};
