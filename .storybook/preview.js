import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import StortRouter from "storybook-react-router";
import { muiTheme } from "storybook-addon-material-ui";

import { theme } from "../src/styles/materialUItheme";

addDecorator(StortRouter());
addDecorator(muiTheme([theme]));
addDecorator(withKnobs());
