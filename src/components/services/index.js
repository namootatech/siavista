import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ButtonLink from '@/components/button';

const Services = ({ services, columnSize }) => {
  return (
    <Container id='services'>
      <Row>
        {services.map((service, index) => (
          <Col md={columnSize} key={index} className='mb-5'>
            <Card className='text-left service-card border border-0 shadow hover-shadow-lg bg-body rounded-0'>
              <Card.Img
                className='service-card-image rounded-0'
                variant='top'
                src={service.imageUrl}
              />
              <Card.Body className='mb-5'>
                <Card.Title className='text-orange'>{service.title}</Card.Title>
                <Card.Text className='text-grey service-card-description'>
                  {service.description}
                </Card.Text>
              </Card.Body>
              <ButtonLink
                backgroundColor='#f9921d'
                textColor='#ffffff'
                text='Learn more'
                url='/services'
                fullWidth
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
