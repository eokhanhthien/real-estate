import React from "react";
import { GetUserInfoReturns } from "zmp-sdk";
import { Swiper } from "zmp-ui";

const Banner: React.FunctionComponent = ({}) => {
  return (
    <Swiper autoplay duration={4000} loop>
      <Swiper.Slide>
        <img
          className="slide-img"
          src="https://i.pinimg.com/736x/82/51/20/825120a49ffc9d14c64cc3c23b29f0fb.jpg"
          alt="slide-1"
        />
      </Swiper.Slide>
      <Swiper.Slide>
        <img
          className="slide-img"
          src="https://img.freepik.com/free-psd/real-estate-house-property-web-banner-template_120329-1947.jpg"
          alt="slide-2"
        />
      </Swiper.Slide>
      <Swiper.Slide>
        <img
          className="slide-img"
          src="https://img.freepik.com/free-psd/real-estate-house-property-web-banner-template_120329-1947.jpg"
          alt="slide-3"
        />
      </Swiper.Slide>
    </Swiper>
  );
};

export default Banner;
