import React from "react";
import LoadingAtoms from "../atoms/app-loading";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "90vh",
        flexFlow: "wrap",
        justifyContent: "space-around",
      }}
    >
      <LoadingAtoms />
    </div>
  );
}
