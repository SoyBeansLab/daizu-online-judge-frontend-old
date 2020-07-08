import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import TopContents from "../../molecules/ContestTopContents";

function ContestTopComponent(props) {
  const { contestId } = useParams();
  const endpoint = `/contests/${contestId}`;

  const content = props.contest.top_content;
  const fetchContest = props.fetchContest;
  const isfetchedContest = props.isfetchedContest;

  useEffect(() => {
    if (!isfetchedContest) {
      fetchContest(endpoint);
    }
  }, [fetchContest, endpoint, isfetchedContest]);

  return <TopContents contestTopContent={content} />;
}

ContestTopComponent.propTypes = {
  contest: PropTypes.shape({
    top_content: PropTypes.string,
  }).isRequired,
  fetchContest: PropTypes.func.isRequired,
  isfetchedContest: PropTypes.bool.isRequired,
};

export default ContestTopComponent;
