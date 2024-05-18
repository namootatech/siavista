import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pages from '@/config/pages';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Col, ProgressBar, Row } from 'react-bootstrap';

const kebabCaseToSentenceCase = (kebabCase) => {
  return kebabCase
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', cellphoneNumber: '' });

  const handleClose = () => {
    setIsLoading(true);
    axios
      .post('/api/call-me-back/add', formData)
      .then((res) => {
        setIsLoading(false);
        setShowThankYouMessage(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setShowErrorMessage(true);
      });
  };
  const justClose = () => {
    setShow(false);
    setShowThankYouMessage(false);
    setShowErrorMessage(false);
    setIsLoading(false);
    setFormData({ name: '', cellphoneNumber: '' });
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      {/* create a banner componenet that will be fixed above the nbav to show messages*/}
      <div className='bg-dark-grey text-white text-center p-2 banner'>
        <Row>
          <Col md={6} className='text-left'></Col>
          <Col
            md={6}
            className='text-right d-flex flex-row justify-content-end align-items-end'
          >
            <a
              href='tel:+27782468156'
              className='text-white text-decoration-none fw-light mx-3'
            >
              <i className='fas fa-phone-alt'></i>{' '}
              <small>+27 78 246 8156</small>
            </a>
            <a
              href='mailto:info@siavistaelectrical.co.za'
              className='text-white text-decoration-none fw-light mx-3'
            >
              <i className='fas fa-envelope'></i>
              <small>info@siavistaelectrical.co.za</small>
            </a>
            <Link
              href='/request-support'
              className='text-white text-decoration-none fw-light mx-3'
            >
              <small>Request support</small>
            </Link>
          </Col>
        </Row>
      </div>
      <Navbar
        collapseOnSelect
        expand='md'
        className='bg-dark-grey shadow shadow-lg '
        fixed='top'
      >
        <Modal
          show={show}
          onHide={justClose}
          centered
          backdrop='static'
          contentClassName='rounded-0 text-dark-grey-500 bg-grey text-white'
        >
          <Modal.Header closeButton className='text-white fw-bold'>
            <Modal.Title>Fill in you details below</Modal.Title>
          </Modal.Header>
          {!isLoading && !showThankYouMessage && !showErrorMessage && (
            <Modal.Body>
              <Form>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='John Doe'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlTextarea1'
                >
                  <Form.Label>Cellphone Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='e.g 0831234567'
                    name='cellphoneNumber'
                    value={formData.cellphoneNumber}
                    onChange={handleChange}
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
          )}
          {isLoading && (
            <Modal.Body className='text-center'>
              <p className='text-center text-warning fw-bold mt-2'>Loading</p>
              <h2 className='text-center display-2 fw-bold my-4'>
                {' '}
                Saving your details...
              </h2>
              <ProgressBar variant='warning' animated now={100} />
            </Modal.Body>
          )}
          {showThankYouMessage && (
            <Modal.Body className='text-center'>
              <p className='text-center text-dark fw-bold mt-2'>
                Thank you for reaching out to us
              </p>
              <h2 className='text-center display-4 text-success fw-bold my-4'>
                {' '}
                We will call you back shortly
              </h2>
              <Button
                variant='dark'
                className='text-center bg-orange text-white shadow shadow-lg rounded-0 border-0'
                onClick={justClose}
              >
                Close
              </Button>
            </Modal.Body>
          )}
          {showErrorMessage && (
            <Modal.Body className='text-center'>
              <p className='text-center mt-2 fw-bold text-danger'>
                An error occurred
              </p>
              <h2 className='text-center display-3 fw-bold my-4'>
                {' '}
                Please try again later
              </h2>
              <Button
                variant='dark'
                className='bg-orange text-white shadow shadow-lg rounded-0 border-0'
                onClick={justClose}
              >
                Close
              </Button>
            </Modal.Body>
          )}
          <Modal.Footer
            className={
              !isLoading && !showThankYouMessage && !showErrorMessage
                ? ''
                : 'd-none'
            }
          >
            <button
              className='nav-link text-decoration-none navigation-link bg-dark-grey text-white shadow shadow-lg px-4 bg-hover-dark-grey p-2 px-4 text-white  shadow shadow-lg'
              onClick={justClose}
            >
              Close
            </button>
            <button
              className='nav-link navigation-link text-white p-2 bg-orange text-white shadow shadow-lg px-4 bg-hover-dark-grey text-decoration-none'
              onClick={handleClose}
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
        <Container>
          <Navbar.Brand href='/'>
            {/* siavista Electrical */}
            <Image src='/newlogo202.png' fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Link
                href='/'
                className='text-decoration-none navigation-link nav-link'
              >
                Home
              </Link>
              <Link
                href='/about-us'
                className='text-decoration-none navigation-link nav-link'
              >
                About
              </Link>
              <NavDropdown
                title='Our services'
                id='basic-nav-dropdown'
                variant='dark'
                className='text-decoration-none navigation-link nav-link dropdown'
              >
                {pages.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.id}`}
                    className='text-decoration-none dropdown-item'
                    passHref
                  >
                    <NavDropdown.Item
                      variant='dark'
                      href={`/services/${service.id}`}
                    >
                      {kebabCaseToSentenceCase(service.id)}
                    </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown>
              <Link
                href='/galllery'
                className='text-decoration-none navigation-link nav-link'
              >
                Gallery
              </Link>
              <Link
                href='/testimonials'
                className='text-decoration-none navigation-link'
              >
                What our clients say
              </Link>
            </Nav>
            <Nav className='ctas'>
              <Link
                href='#'
                onClick={handleShow}
                className='nav-link text-decoration-none navigation-link bg-dark-grey-500 bg-hover-orange p-2 px-4 text-white  shadow shadow-lg'
              >
                Call me back
              </Link>
              <Link
                href='/contact'
                className='nav-link navigation-link text-white p-2 bg-orange text-white shadow shadow-lg px-4 bg-hover-dark-grey text-decoration-none'
              >
                Chat with us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
