import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContestsTemplate from "../templates/Contests.js";
import { contestsOperations, contestsSelectors } from "../state/ducks/contests";

const ContestsContainer = ({ currentContests, upcomingContests, recentContests, isfetched, fetchContests }) => {
  const endpoint = "/contests";

  useEffect(() => {
    if (!isfetched) {
      fetchContests(endpoint);
    }
  }, [endpoint, fetchContests, isfetched]);

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
  fetchContests: PropTypes.func,
  isfetched: PropTypes.bool,
};

const mapStateToProps = state => ({
  currentContests: contestsSelectors.getCurrentContestList(state),
  upcomingContests: contestsSelectors.getUpcomingContestList(state),
  recentContests: contestsSelectors.getRecentContestList(state),
  isfetched: contestsSelectors.isfetchedContests(state),
});

const mapDispatchToProps = {
  fetchContests: contestsOperations.fetchContests,
};

const Contests = connect(mapStateToProps, mapDispatchToProps)(ContestsContainer);

export default Contests;
