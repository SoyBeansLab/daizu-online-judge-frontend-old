import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";

class HomeSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrow: true,
    };

    return (
      <Slider {...settings}>
        <div>
          <SliderItem
            contestTitle="contestTitle-1"
            contestDate="2019.11.11"
            contestTime="16:00-17:00"
            contestContent="これはテストです"
          />
        </div>
        <div>
          <SliderItem
            contestTitle="contestTitle-2"
            contestDate="2019.12.12"
            contestTime="16:00-17:00"
            contestContent="これはテストです"
          />
        </div>
        <div>
          <SliderItem
            contestTitle="contestTitle-3"
            contestDate="2019.01.01"
            contestTime="16:00-19:00"
            contestContent="text is text"
          />
        </div>
      </Slider>
    );
  }
}

export default HomeSlider;
