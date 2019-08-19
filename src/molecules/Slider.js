import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import SliderItem from "./SliderItem";

export default function HomeSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
  };
  const slideItemList = props.slideItemList;

  return (
    <Slider {...settings}>
      {slideItemList.map(row => (
        <div key={row.contestTitle}>
          <SliderItem
            contestTitle={row.contestTitle}
            contestDate={row.contestDate}
            contestTime={row.contestTime}
            contestContent={row.contestContent}
          />
        </div>
      ))}
    </Slider>
  );
}

HomeSlider.propTypes = {
  slideItemList: PropTypes.array,
};
