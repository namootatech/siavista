import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const ServiceCarousel = ({ services }) => {
  return (
    <Carousel>
      {services.map((service, index) => (
        <Carousel.Item key={index}>
          <Container className='m-0 p-0'>
            <Row className='m-0 p-0'>
              <Col md={12} className='m-0 p-0'>
                <img
                  className='d-block w-100'
                  src={service.imageUrl}
                  alt={`Service ${index}`}
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ServiceCarousel;
