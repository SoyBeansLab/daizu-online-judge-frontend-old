import React from "react";
//import { action } from '@storybook/addon-actions';

import NormalButton from "../atoms/app-button-normal";
import TextButton from "../atoms/app-button-text";
import CheckBox from "../atoms/app-checkbox";
import CodeBlock from "../atoms/app-code-block";
import DataTable from "../atoms/app-dataTable";
//import Footer from "../atoms/app-footer";
//import Header from "../atoms/app-header";
import SimpleTab from "../atoms/app-simpleTab";
import SimpleSlider from "../atoms/app-slider";
import SourceCodeField from "../atoms/app-sourcecode-field";
import CopyRight from "../atoms/app-copyright-text";

export default {
  title: "Atoms",
  component: NormalButton,
};

export const normal_button = () => <NormalButton buttonText={"click"} />;

export const text_button = () => <TextButton buttonText={"click"} />;

export const check_box = () => <CheckBox checkboxText={"X"} />;

export const code_block = () => <CodeBlock language="python" children="print(1)" />; //eslint-disable-line

export const data_table = () => <DataTable />;

//export const footer = () => <Footer />;

// export const feader = () => <Header />;

export const simple_tab = () => <SimpleTab />;

export const simple_slider = () => <SimpleSlider />;

export const source_code_field = () => <SourceCodeField />;

export const copyright = () => <CopyRight />;
