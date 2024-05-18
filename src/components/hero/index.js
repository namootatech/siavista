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
    <Container className='mt-5 py-4'>
      <Row className=' mb-5 py-4'>
        <Col md={7} order={2} className='order-md-1 py-4'>
          <div id='hero-image-container'>
            <div id='dotted-box'>
              <DottedBox />
            </div>
            <div className='text-center' id='hero-image'>
              <Image src={image} alt='Hero Image' fluid />
            </div>
            <div id='orange-box'>
              <OrangeBox />
            </div>
            <div id='orange-box2'>
              <OrangeBox />
            </div>
          </div>
        </Col>
        <Col md={5} order={1} className='order-md-2'>
          <div>
            <h4 className='text-dark-grey text-uppercase mt-4 fs-1 fw-bold'>
              {title}
            </h4>
            <h4 className='text-orange  mt-4 fs-2 funky-text fw-bold'>
              {subtitle}
            </h4>
            <div className='text-dark-grey mt-3 fs-5'>{description}</div>
            {!noButton && (
              <ButtonLink
                backgroundColor='#f9921d'
                textColor='#ffffff'
                text='Get Started'
                url='/contact'
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
