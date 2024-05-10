
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = ({ services, columnSize }) => {
  return (
    <Container>
      <Row>
        {services.map((service, index) => (
          <Col md={columnSize} key={index} className="mb-5">
            <Card className="text-center service-card">
              <Card.Img className="service-card-image" variant="top" src={service.imageUrl} />
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
