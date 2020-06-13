import React from "react";

import LinkTitleImage from "../molecules/LinkTitleImage";
import CodeSubmit from "../molecules/CodeSubmit";
import ContestTabs from "../molecules/ContestTabs";
import DataTable from "../molecules/SubmitStatusTable";
import SubmitStatusTable from "../molecules/SubmitStatusDetailTable";
import ContestTopContents from "../molecules/ContestTopContents";
import ContestsTable from "../molecules/ContestsTable";
import ProblemInfo from "../molecules/ProblemInfo";
import DataTableX from "../molecules/ProblemsTable";
import DataTableY from "../molecules/RankingTable";
import SliderItem from "../molecules/SliderItem";
import SinginMenuButton from "../molecules/SigninMenuButton";

export default {
  title: "Molecules",
  component: LinkTitleImage,
};

export const lint_title_image = () => <LinkTitleImage />;

export const code_submit_field = () => <CodeSubmit />;

export const contest_tabs = () => <ContestTabs />;

export const submit_status_table = () => <DataTable />;

export const submit_status_detail = () => <SubmitStatusTable />;

export const contest_top_content = () => <ContestTopContents contestTopContent="# test" />;

export const contests_table = () => <ContestsTable />;

export const problem_info = () => <ProblemInfo />;

export const problems_table = () => <DataTableX />;

export const ranking_table = () => <DataTableY />;

export const slider_item = () => <SliderItem />;

export const singin_menu_button = () => <SinginMenuButton />;
