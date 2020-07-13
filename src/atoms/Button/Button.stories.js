import React from "react";
import { text } from "@storybook/addon-knobs";

import Button from "./Button";
import LinkButton from "./LinkButton";

export default {
  title: "Atoms/Button",
};

export const Button_ = () => {
  return (
    <Button
      text={text("text", "Text")}
      variant={text("variant", "contained")}
      color={text("color", "inherit")}
      onClick={() => {}}
    />
  );
};

export const LinkButton_ = () => {
  return <LinkButton text={text("text", "Text")} to={text("to", "/")} />;
};
