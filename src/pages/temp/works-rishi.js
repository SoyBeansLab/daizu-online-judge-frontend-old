import React from "react";
import NormalButton from "../../atoms/app-button-normal";
import TextButton from "../../atoms/app-button-text";
import DataTable from "../../atoms/app-dataTable";
import Tabs from "../../atoms/app-simpleTab";
import SourceCodeField from "../../atoms/app-sourcecode-field";

const Works = () => (
  <div>
    <h1>rishi works</h1>
    <h2>buttons</h2>
    <NormalButton buttonText="はろーわーるど！！" />
    <TextButton buttonText="hoge" />
    <h2>table</h2>
    <DataTable />
    <h2>tab</h2>
    <Tabs />
    <h2>SourceCodeField</h2>
    <SourceCodeField />
  </div>
);

export default Works;
