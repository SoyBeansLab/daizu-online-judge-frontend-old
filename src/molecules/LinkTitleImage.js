import React from "react";
import { Link } from "react-router-dom";
import TitleLogo from "../atoms/TitleLogo";

export default function LinkTitleImage() {
  return (
    <Link to="/">
      <TitleLogo />
    </Link>
  );
}
