import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContestsTemplate from "../templates/Contests.js";
import { contestsOperations, contestsSelectors } from "../state/ducks/contests";

const ContestsContainer = ({ currentContests, upcomingContests, recentContests, isfetched, fetch }) => {
  const endpoint = "/contests";

  useEffect(() => {
    if (!isfetched) {
      fetch(endpoint);
    }
  }, [endpoint, fetch, isfetched]);

  return (
    <ContestsTemplate
      currentContestLists={currentContests}
      upcomingContestLists={upcomingContests}
      recentContestLists={recentContests}
    />
  );
};

ContestsContainer.propTypes = {
  currentContests: PropTypes.array,
  upcomingContests: PropTypes.array,
  recentContests: PropTypes.array,
  fetch: PropTypes.func,
  isfetched: PropTypes.bool,
};

const mapStateToProps = state => ({
  currentContests: contestsSelectors.currentContestsSelector(state),
  upcomingContests: contestsSelectors.upcomingContestsSelector(state),
  recentContests: contestsSelectors.recentContestsSelector(state),
  isfetched: contestsSelectors.isfetched(state),
});

const mapDispatchToProps = {
  fetch: contestsOperations,
};

const Contests = connect(mapStateToProps, mapDispatchToProps)(ContestsContainer);

export default Contests;
