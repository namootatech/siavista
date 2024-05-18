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
    <Container className='mt-5 mb-5'>
      <Row>
        <Col md={2}></Col>
        <Col md={5}>
          <div id='about-description'>
            <h3 className='text-dark-grey'>World-class Electrical Services</h3>
            <p className='text-dark-grey text-justify'>
              At Siavista Electrical, our commitment lies in continuous
              innovation, technological advancement, and superior service
              delivery, aimed at delighting our customers. Our success is driven
              by our focus on expedient service, building strong customer
              relationships, expertise in our field, and efficient supply chain
              management.
            </p>
          </div>
        </Col>
        <Col md={5}>
          <Image src='/service2.png' fluid className='' />
          <div id='dotted-box2'>
            <DottedBox grid={[2, 2]} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
