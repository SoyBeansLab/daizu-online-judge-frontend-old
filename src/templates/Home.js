import React from "react";
import PropTypes from "prop-types";

import Slider from "../organisms/Slider";
import NotSinginHome from "../organisms/NotSinginHome/NotSigninHomeComponent";

import { useAuth0 } from "@auth0/auth0-react";

export default function Home(props) {
  const slideItemList = props.slideItemList;

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      {!isAuthenticated && <NotSinginHome loginWithRedirect={loginWithRedirect} />}
      {isAuthenticated && <Slider slideItemList={slideItemList} />}
      {/* 寂しいので何らかのコンテンツ欲しい */}
    </div>
  );
}

Home.propTypes = {
  slideItemList: PropTypes.array,
};
