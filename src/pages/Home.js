import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HomeTemplate from "../templates/Home.js";
import { contestsOperations, contestsSelectors } from "../state/ducks/contests";

const HomeContainer = ({ slideItemList, isfetched, fetch }) => {
  const endpoint = "/contests";

  useEffect(() => {
    if (!isfetched) {
      fetch(endpoint);
    }
  }, [endpoint, fetch, isfetched]);

  return <HomeTemplate slideItemList={slideItemList} />;
};

HomeContainer.propTypes = {
  slideItemList: PropTypes.array,
  fetch: PropTypes.func,
  isfetched: PropTypes.bool,
};

const mapStateToProps = state => ({
  slideItemList: contestsSelectors.upcomingContestsSelector(state),
  isfetched: contestsSelectors.isfetched(state),
});

const mapDispatchToProps = {
  fetch: contestsOperations,
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default Home;
