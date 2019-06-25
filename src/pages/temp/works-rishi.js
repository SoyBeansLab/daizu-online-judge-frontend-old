import React from "react";
import NormalButton from "../../atoms/app-button-normal";
import TextButton from "../../atoms/app-button-text";
import DataTable from "../../atoms/app-dataTable";
import Tabs from "../../atoms/app-simpleTab";

const Works = () => (
  <div>
    <h1>rishi works</h1>
    <NormalButton buttonText="huga" />
    <TextButton buttonText="hoge" />
    <DataTable />
    <Tabs />
  </div>
);

export default Works;
