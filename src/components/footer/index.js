import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5" style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <p className="mb-0">Copyright © 2024 Siavista Electrical - All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">Developed by <strong>Namoota</strong></p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col className="text-center">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
              <i className="bi bi-twitter fs-4"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
