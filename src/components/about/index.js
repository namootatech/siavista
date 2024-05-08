import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonLink from '@/components/button';

const About = () => {
    return (
        <Container className="mt-5 mb-5"> 
            <Row>
                <Col md={2}>
                    <div>
                        <h4 className="text-uppercase text-orange">About us</h4>
                    </div>
                </Col>
                <Col md={5}>
                    <div id="about-description">
                        <h3 className="text-grey">World-class Electrical Services</h3>
                        <p className="text-grey">
                        At Siavista Electrical, our commitment lies in continuous innovation, technological advancement, and superior service delivery, aimed at delighting our customers. 
                        Our success is driven by our focus on expedient service, building strong customer relationships, expertise in our field, and efficient supply chain management.
                        </p>
                    </div>
                </Col>
                <Col md={5}>
                    <div>
                        <Image
                            src="/service1.jpg"
                            fluid
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default About;
