
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ButtonLink from '@/components/button';

const Services = ({ services, columnSize }) => {
  return (
    <Container>
      <Row>
        {services.map((service, index) => (
          <Col md={columnSize} key={index} className="mb-5">
            <Card className="text-center service-card">
              <Card.Img className="service-card-image" variant="top" src={service.imageUrl} />
              <Card.Body className="mb-5">
                <Card.Title className="text-orange">{service.title}</Card.Title>
                <Card.Text className="text-grey service-card-description">
                  {service.description}
                </Card.Text>
                <ButtonLink
                  backgroundColor="#f9921d"
                  textColor="#ffffff"
                  text="explore more"
                  url="/services"
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
