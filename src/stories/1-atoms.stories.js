import React from "react";
import StoryRouter from "storybook-react-router";

import CheckBox from "../atoms/CheckBox";
import CodeBlock from "../atoms/CodeBlock";
import DataTable from "../atoms/DataTable";
import SimpleTab from "../atoms/SimpleTab";
import SimpleSlider from "../atoms/Slider";
import SourceCodeField from "../atoms/SourceCodeField";
import CopyRight from "../atoms/Copyright";
import TitleImage from "../atoms/TitleLogo";
import Button from "../atoms/Button";
import Loading from "../atoms/Loading";
import Pagination from "../atoms/Paginations";

export default {
  title: "Atoms",
  component: Button,
  decorators: [StoryRouter()],
};

export const check_box = () => <CheckBox checkboxText={"X"} />;

export const code_block = () => <CodeBlock language="python" children="print(1)" />; //eslint-disable-line

export const data_table = () => <DataTable />;

//export const footer = () => <Footer />;

// export const feader = () => <Header />;

export const simple_tab = () => <SimpleTab />;

export const simple_slider = () => <SimpleSlider />;

export const source_code_field = () => <SourceCodeField />;

export const copyright = () => <CopyRight />;

export const title_image = () => <TitleImage />;

export const button = () => <Button to="" text="TEST" />; // 透明なButton

export const loading = () => <Loading />;

export const pagination = () => <Pagination />;
