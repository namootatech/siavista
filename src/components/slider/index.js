import React from 'react';
import Slider from 'react-slick';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return <></>;
}

function ResponsiveSlider({ children, items }) {
  var settings = {
    dots: true,
    className: 'slider-center',
    centerMode: true,
    infinite: true,
    speed: 1000,
    //autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default ResponsiveSlider;
