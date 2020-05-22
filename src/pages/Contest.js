import React from "react";
import { connect } from "react-redux";
import ContestTemplate from "../templates/Contest";

const ContestContainer = () => {
  return <ContestTemplate />;
};

ContestContainer.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const Contest = connect(mapStateToProps, mapDispatchToProps)(ContestContainer);

export default Contest;
