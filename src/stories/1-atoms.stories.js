import React from "react";

import CheckBox from "../atoms/CheckBox";
import CodeBlock from "../atoms/CodeBlock";
import DataTable from "../atoms/DataTable";
import SimpleTab from "../atoms/SimpleTab";
import SourceCodeField from "../atoms/SourceCodeField";
import CopyRight from "../atoms/Copyright";
import TitleImage from "../atoms/TitleLogo";
import Button from "../atoms/Button";
import Loading from "../atoms/Loading";
import Pagination from "../atoms/Paginations";
import Tabs from "../atoms/Tabs";
import Blockqoute from "../atoms/Blockqoute";

export default {
  title: "Atoms",
};

export const check_box = () => <CheckBox checkboxText={"X"} />;

export const code_block = () => <CodeBlock language="python" children="print(1)" />; //eslint-disable-line

export const data_table = () => <DataTable />;

export const simple_tab = () => <SimpleTab />;

export const source_code_field = () => <SourceCodeField />;

export const copyright = () => <CopyRight />;

export const title_image = () => <TitleImage />;

export const button = () => <Button to="" text="TEST" />;

export const loading = () => <Loading />;

export const pagination = () => <Pagination />;

export const tabs = () => {
  const labels = ["テスト1", "テスト2", "テスト3", "テスト4"];
  const tabValueList = ["content1", "content2", "content3", "content4"];
  return <Tabs labels={labels} tabValueList={tabValueList} tabPosition={tabValueList[0]} />;
};

export const blockqoute = () => {
  return (
    <div>
      <Blockqoute color="info" text="info" />
      <Blockqoute color="warning" text="warning" />
      <Blockqoute color="error" text="error" />
    </div>
  );
};
