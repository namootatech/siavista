import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DottedBox from '@/components/dotted-box';
import OrangeBox from '@/components/orange-box';
import ButtonLink from '@/components/button';

const Hero = ({ image, title, subtitle, description, noButton }) => {
  return (
    <div className='mt-1 bg-light shadow shadow-sm simple-hero'>
      <Row
        className='m-0'
        style={{
          background: `url(${image}) no-repeat center center`,
          backgroundSize: 'cover',
        }}
      >
        <Col
          md={6}
          order={2}
          className='order-md-1 p-0 h-100 simple-hero-img'
          style={{
            background: `url(${image}) no-repeat center center`,
            backgroundSize: 'cover',
          }}
        ></Col>
        <Col
          md={6}
          order={1}
          className='order-md-2 bg-oldlace text-white p-4 h-100 simple-hero-text'
        >
          <div className='d-flex flex-column justify-content-center align-items-center h-100'>
            <Row className='d-flex flex-column justify-content-center align-items-center h-100'>
              <div className='col-md-8'>
                <h4 className='text-dark-grey text-uppercase mt-4 fs-2 fw-bold'>
                  {title}
                </h4>
                <h4 className='text-orange  mt-1 fs-3 mb-4 funky-text fw-bold'>
                  {subtitle}
                </h4>
                <p className='text-grey mt-4 fs-5'>{description}</p>
                {!noButton && (
                  <ButtonLink
                    backgroundColor='#f9921d'
                    textColor='#ffffff'
                    text='Get Started'
                    url='/contact'
                    fullWidth
                  />
                )}
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
