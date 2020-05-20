import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ContestTemplate from "../templates/Contest";
import { reducer } from "../reducer";
//import axios from "axios";
import { request } from "../requests";
//import { config } from "../config";
import { contestsOperations } from "../state/ducks/contests";
import { rankingsOperations } from "../state/ducks/rankings";
import { submissionsOperations } from "../state/ducks/submissions";

const ContestContainer = ({ fetchContests, fetchRanking, fetchSubmissions }) => {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const { contestId } = useParams(); // url paramから取得
  const endpoint = `/contests/${contestId}`;

  useEffect(() => {
    fetchContests(`/contests/${contestId}`);
    fetchRanking(`/contests/${contestId}/ranking`);
    fetchSubmissions(`/contests/${contestId}/submits`);
    request(endpoint, dispatch);
  }, [endpoint, fetchRanking, contestId, fetchSubmissions, fetchContests]);

  return <ContestTemplate problemLists={state.data.problem_list} />;
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
