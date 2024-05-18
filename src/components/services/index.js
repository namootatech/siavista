import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ButtonLink from '@/components/button';

const Services = ({ services, columnSize }) => {
  return (
    <Container id='services'>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col md={10}>
          <h2 className='text-center t my-4 p-4 fs-2 fw-bold text-uppercase text-dark-grey'>
            Our Services
          </h2>
          <Row className='gy-5 gx-5 mb-5'>
            {services.map((service, index) => (
              <Col
                lg={columnSize}
                md={6}
                xs={12}
                key={index}
                className='p-4 mb-5'
              >
                <Card className='text-left service-card border border-0 bg-body rounded-0 bg-transparent mb-4'>
                  <Card.Title className='text-orange text-left my-4 py-2 mt-4 fw-bold text-uppercase'>
                    {service.title}
                  </Card.Title>
                  <Card.Img
                    className='service-card-image rounded-0'
                    variant='top'
                    src={service.imageUrl}
                  />
                  <Card.Body className='fs-5 p-0 mt-4'>
                    <Card.Text className='text-dark-grey service-card-description p-0'>
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                  <a
                    className='btn px-4 py-2 border-2 bg-transparent text-dark-grey rounded-0 w-lg-50 my-4 border-dark-grey bg-hover-dark-grey mb-4'
                    href={`/services/${service.id} `}
                  >
                    Learn more
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
