import React from "react";
//import { action } from '@storybook/addon-actions';

import NormalButton from "../atoms/app-button-normal";
export default {
  title: "Molecules",
  component: NormalButton,
};

export const normal_button = () => <NormalButton buttonText={"click"} />;
