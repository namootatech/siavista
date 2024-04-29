import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DottedBox from '@/components/dotted-box';
import OrangeBox from '@/components/orange-box'
import ButtonLink from '@/components/button';
const Hero = () => {
    return (
        <Container className="mt-5 mb-5"> 
            <Row>
                <Col lg={5} lgOrder={2}>
                    <div className="mb-5">
                        <h4 className="text-orange text-uppercase mt-5">Work with us</h4>
                        <h3 className="text-grey">Power up with our unmatched service!</h3>
                        <p className="text-grey">
                            The services rendered by Siavista can cover a project in its entirety from original concept to acceptance of completed installation work
                        </p>
                        <ButtonLink 
                            className="orange-btn"
                            backgroundColor="#f9921d" 
                            textColor="#ffffff"
                            text="explore more"
                            url="/services"
                        />
                    </div>
                </Col>
                <Col lg={7} lgOrder={1}>
                    <div id="hero-image-container">
                        <div id="dotted-box">
                            <DottedBox/>
                        </div>
                        <div id="hero-image">
                            <Image 
                                src="/hero.png"
                                fluid
                            />
                        </div>
                        <div id="orange-box">
                            <OrangeBox/>
                        </div>
                        <div id="orange-box2">
                            <OrangeBox/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Hero;
