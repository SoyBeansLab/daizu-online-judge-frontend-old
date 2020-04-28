import React from "react";
import PropTypes from "prop-types";
import Slider from "../molecules/Slider";

export default function Home(props) {
  const slideItemList = props.slideItemList || [];

  return (
    <div>
      <Slider slideItemList={Object.values(slideItemList)} />
      {/* 寂しいので何らかのコンテンツ欲しい */}
    </div>
  );
}

Home.propTypes = {
  slideItemList: PropTypes.array,
};
