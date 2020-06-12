import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HomeTemplate from "../templates/Home.js";
import { contestsOperations, contestsSelectors } from "../state/ducks/contests";

const HomeContainer = ({ slideItemList, isfetched, fetchContests }) => {
  const endpoint = "/contests";

  useEffect(() => {
    if (!isfetched) {
      fetchContests(endpoint);
    }
  }, [endpoint, fetchContests, isfetched]);

  return <HomeTemplate slideItemList={slideItemList} />;
};

HomeContainer.propTypes = {
  slideItemList: PropTypes.array,
  fetchContests: PropTypes.func,
  isfetched: PropTypes.bool,
};

const mapStateToProps = state => ({
  slideItemList: contestsSelectors.getUpcomingContestList(state),
  isfetched: contestsSelectors.isfetchedContests(state),
});

const mapDispatchToProps = {
  fetchContests: contestsOperations.fetchContests,
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default Home;
