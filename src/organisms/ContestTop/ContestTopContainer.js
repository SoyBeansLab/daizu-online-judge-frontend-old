import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TopContents from "../../molecules/ContestTopContents";

import { contestsSelectors } from "../../state/ducks/contests";

function ContestTopContainer(props) {
  const content = props.contest.contest_description;

  return <TopContents contestTopContent={content} />;
}

ContestTopContainer.propTypes = {
  contest: PropTypes.shape({
    contest_description: PropTypes.string,
  }),
};

const mapStateToProps = (state, props) => ({
  contest: contestsSelectors.contestSelector(state, props),
});

const ContestTop = connect(mapStateToProps)(ContestTopContainer);

export default ContestTop;
