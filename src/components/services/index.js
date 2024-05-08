
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = ({ services }) => {
  return (
    <Container>
      <Row>
        {services.map((service, index) => (
          <Col md={2} key={index} className="mb-5">
            <Card className="text-center service-card">
              <Card.Img variant="top" src={service.imageUrl} className="thumbnail" />
              <Card.Body>
                <Card.Title className="text-orange">{service.title}</Card.Title>
                <Card.Text className="text-grey">
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
