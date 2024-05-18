import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonLink from '@/components/button';

import DottedBox from '@/components/dotted-box';
import OrangeBox from '@/components/orange-box';

const About = () => {
  return (
    <div className='bg-dark-grey-500 about-container'>
      <Row className='mt-4 h-100'>
        <Col md={6} sm={8} xs={12} className='mt-5 mb-5 py-4 h-100'>
          <div className='d-flex flex-column h-100 justify-content-center align-items-center  p-4  '>
            <h3 className='fw-bold text-orange funky-text display-6 shadow display-4 shadow-sm my-4'>
              World-class Electrical Services
            </h3>
            <p className='text-light text-center  fs-4'>
              At Siavista Electrical, our commitment lies in continuous
              innovation, technological advancement, and superior service
              delivery, aimed at delighting our customers. Our success is driven
              by our focus on expedient service, building strong customer
              relationships, expertise in our field, and efficient supply chain
              management.
            </p>
          </div>
        </Col>
        <Col md={6} sm={4} xs={12} className=' h-100  fade-image-container'>
          <div
            class='fade-image h-100'
            style={{
              background: "url('/service2.png') no-repeat center center",
              backgroundSize: 'cover',
              filter: 'brightness(1) contrast(1) grayscale(.5)',
            }}
          ></div>
        </Col>
      </Row>
    </div>
  );
};
export default About;
