import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import TopContents from "../../molecules/ContestTopContents";

import { contestsOperations, contestsSelectors } from "../../state/ducks/contests";

function ContestTopContainer(props) {
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

ContestTopContainer.propTypes = {
  contest: PropTypes.shape({
    top_content: PropTypes.string,
  }),
  fetchContest: PropTypes.func,
  isfetchedContest: PropTypes.bool,
};

const mapStateToProps = (state, props) => ({
  contest: contestsSelectors.contestSelector(state, props),
  isfetchedContest: contestsSelectors.isfetchedContest(state, props),
});

const mapDispatchToProps = {
  fetchContest: contestsOperations.fetchContest,
};

const ContestTop = connect(mapStateToProps, mapDispatchToProps)(ContestTopContainer);

export default ContestTop;
