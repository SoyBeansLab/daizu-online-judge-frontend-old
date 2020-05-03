import React from "react";
import { Link } from "react-router-dom";
import TitleImage from "../atoms/title-logo";

export default function LinkTitleImage() {
  return (
    <Link to="/">
      <TitleImage />
    </Link>
  );
}
