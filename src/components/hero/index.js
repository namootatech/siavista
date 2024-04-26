import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'; // Correct import
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
    return (
        <Container className="mt-5 mb-5"> 
            <Row>
                <Col lg={5}>
                    <div>
                        <h1>Work with us</h1>
                        <p>Elevate your project with our unmatched service!
                        At Siavista Electrical, we aspire to become a trusted and respected industry leader, fostering a positive culture and transparent communication. 
                        Our commitment lies in continuous innovation, technological advancement, and superior service delivery, aimed at delighting our customers. 
                        Our success is driven by our focus on expedient service, building strong customer relationships, expertise in our field, and efficient supply chain management.
                        </p>
                    </div>
                </Col>
                <Col lg={7}>
                    <Image 
                        src="/hero.png"
                        fluid
                    />
                </Col>
            </Row>
        </Container>
    );
}
export default Hero;
