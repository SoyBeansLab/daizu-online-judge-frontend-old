import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContestsTemplate from "../templates/Contests.js";
import { contestsOperations } from "../state/ducks/contests";

const ContestsContainer = ({ contests, fetch }) => {
  const endpoint = "/contests";

  useEffect(() => {
    // contestsだけではからのhashに見えるので
    // その中の要素指定しないとundefinedか確認できない
    if (contests.upcoming === void 0) {
      fetch(endpoint);
    }
  }, [endpoint, fetch, contests]);

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
};

const mapStateToProps = state => ({
  contests: state.contestsState.contests.data,
});

const mapDispatchToProps = {
  fetch: contestsOperations,
};

const Contests = connect(mapStateToProps, mapDispatchToProps)(ContestsContainer);

export default Contests;
