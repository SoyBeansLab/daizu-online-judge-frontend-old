import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HomeTemplate from "../templates/Home.js";
import { contestsOperations } from "../state/ducks/contests";

const HomeContainer = ({ slideItemList, fetch }) => {
  const endpoint = "/contests";

  useEffect(() => {
    fetch(endpoint);
  }, [endpoint, fetch]);

  console.log(slideItemList);
  return <HomeTemplate slideItemList={Object.values(slideItemList)} />;
};

HomeContainer.propTypes = {
  slideItemList: PropTypes.object,
  fetch: PropTypes.func,
};

const mapStateToProps = state => ({
  slideItemList: state.contestsState.contests.data.upcoming || [],
});

const mapDispatchToProps = {
  fetch: contestsOperations,
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default Home;
