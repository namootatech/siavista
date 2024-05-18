import React from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function PartnerStrip() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
  };
  return (
    <div className='container'>
      <div className='row partner-strip '>
        <div className='col-md-12 "slider-container"'>
          <Slider {...settings} className='row'>
            <div
              className='partner-container'
              style={{ with: '400px', height: '40%' }}
            >
              <img src='/partners/partner1.png' style={{ height: '60%' }} />
            </div>
            <div className='partner-container' style={{ with: '400px' }}>
              <img src='/partners/partner2.png' />
            </div>
            <div className='partner-container' style={{ with: '400px' }}>
              <img src='/partners/partner3.png' />
            </div>
            <div className='partner-container' style={{ with: '400px' }}>
              <img src='/partners/partner4.png' />
            </div>
            <div className='partner-container' style={{ with: '400px' }}>
              <img src='/partners/partner5.png' />
            </div>
            <div className='partner-container ' style={{ with: '400px' }}>
              <img src='/partners/partner6.png' />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
