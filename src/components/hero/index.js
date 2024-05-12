import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DottedBox from '@/components/dotted-box';
import OrangeBox from '@/components/orange-box';
import ButtonLink from '@/components/button';

const Hero = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={7} order={2} className="order-md-1">
                    <div id="hero-image-container">
                        <div id="dotted-box">
                            <DottedBox />
                        </div>
                        <div className="text-center" id="hero-image">
                            <Image
                                className="rounded"
                                src="/electrician.jpg"
                                alt="Hero Image"
                                fluid
                            />
                        </div>
                        <div id="orange-box">
                            <OrangeBox />
                        </div>
                        <div id="orange-box2">
                            <OrangeBox />
                        </div>
                    </div>
                </Col>
                <Col md={5} order={1} className="order-md-2">
                    <div>
                        <h4 className="text-orange text-uppercase mt-4">Work with us</h4>
                        <h4 className="text-grey mt-4">Power up with our unmatched service!</h4>
                        <p className="text-grey mt-3">
                            The services rendered by Siavista can cover a project in its entirety from original concept to acceptance of completed installation work
                        </p>
                        <ButtonLink
                            className="orange-btn mt-3"
                            backgroundColor="#f9921d"
                            textColor="#ffffff"
                            text="explore more"
                            url="/services"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;
