import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ContestTemplate from "../templates/Contest";

import { contestsOperations } from "../state/ducks/contests";
import { rankingsOperations } from "../state/ducks/rankings";
import { submissionsOperations } from "../state/ducks/submissions";

const ContestContainer = ({ fetchContests, fetchRanking, fetchSubmissions }) => {
  const { contestId } = useParams(); // url paramから取得
  const endpoint = `/contests/${contestId}`;

  useEffect(() => {
    fetchContests(endpoint);
    fetchRanking(`${endpoint}/ranking`);
    fetchSubmissions(`${endpoint}/submits`);
  }, [endpoint, fetchRanking, fetchSubmissions, fetchContests]);

  return <ContestTemplate />;
};

ContestContainer.propTypes = {
  fetchContests: PropTypes.func,
  fetchRanking: PropTypes.func,
  fetchSubmissions: PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  fetchRanking: rankingsOperations.rankingsOprations,
  fetchSubmissions: submissionsOperations.submissionsOprations,
  fetchContests: contestsOperations,
};

const Contest = connect(mapStateToProps, mapDispatchToProps)(ContestContainer);

export default Contest;
