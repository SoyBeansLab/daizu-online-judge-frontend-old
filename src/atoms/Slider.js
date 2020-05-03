import React from "react";
import Slider from "react-slick";
import Button from "./Button";
import Card from "../pages/temp/test-card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
        <Button buttonText="はろーわーるど！" />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
    </Slider>
  );
}
