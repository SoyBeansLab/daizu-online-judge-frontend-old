import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContestsTemplate from "../templates/Contests.js";
import { contestsOperations, contestsSelectors } from "../state/ducks/contests";

const ContestsContainer = ({ contests, isfetched, fetch }) => {
  const endpoint = "/contests";

  useEffect(() => {
    if (!isfetched) {
      fetch(endpoint);
    }
  }, [endpoint, fetch, isfetched]);

  return (
    <ContestsTemplate
      currentContestLists={contests.current}
      upcomingContestLists={contests.upcoming}
      recentContestLists={contests.recent}
    />
  );
};

ContestsContainer.propTypes = {
  contests: PropTypes.shape({
    current: PropTypes.array,
    upcoming: PropTypes.array,
    recent: PropTypes.array,
  }),
  fetch: PropTypes.func,
  isfetched: PropTypes.bool,
};

const mapStateToProps = state => ({
  contests: contestsSelectors.contestsSelector(state),
  isfetched: contestsSelectors.isfetched(state),
});

const mapDispatchToProps = {
  fetch: contestsOperations,
};

const Contests = connect(mapStateToProps, mapDispatchToProps)(ContestsContainer);

export default Contests;
