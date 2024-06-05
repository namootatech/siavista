import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
const inter = Inter({ subsets: ['latin'] });
import Hero from '@/components/hero';
import About from '@/components/about';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

import DottedBox from '@/components/dotted-box';
import OrangeBox from '@/components/orange-box';
import ButtonLink from '@/components/button';
export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    body: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email) => {
    // Basic email validation using regular expression
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateCellphone = (cellphone) => {
    // Validate South African cellphone number format (10 digits starting with 0)
    return /^0[0-9]{9}$/.test(cellphone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      setShowAlert(true);
      setIsLoading(false);
      return;
    } else if (!validateCellphone(formData.cellphone)) {
      setError(
        'Please enter a valid South African cellphone number (10 digits starting with 0).'
      );
      setShowAlert(true);
      setIsLoading(false);
      return;
    } else {
      setError(null);
      setShowAlert(false);
    }

    //console.log(formData);
    axios
      .post('/api/messages/add', formData)
      .then((response) => {
        //console.log(response.data);
        setShowThankYou(true);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error submitting message:', error);
        setError(
          'An error occurred while submitting your message. Please check your internet connection and try again.'
        );
        setShowAlert(true);
        setIsLoading(false);
      });
  };

  return (
    <Layout>
      <main
      // className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
      >
        <Row>
          <Col lg={7} order={2} className='order-lg-1'>
            <div className='d-none d-sm-block mt-lg-5 px-lg-5 py-lg-4 container '>
              <div id='hero-image-container'>
                <div id='dotted-box'>
                  <DottedBox />
                </div>
                <div id='hero-image'>
                  <img
                    className='img-fluid'
                    src='/gallery0.jpg'
                    alt='Hero Image'
                    fluid
                  />
                </div>
                <div id='orange-box'>
                  <OrangeBox />
                </div>
                <div id='orange-box2'>
                  <OrangeBox />
                </div>
              </div>
              <h6 className='mt-4 fw-bold'>Ongoing Support </h6>
              <p className='mt-3'>
                Our commitment extends beyond installation. We offer ongoing
                maintenance plans to ensure the continued smooth operation of
                your electrical systems and are readily available to address any
                future electrical needs.
              </p>
              <h6 className='mt-4 fw-bold'>
                {' '}
                Partner with Siavista Electrical for Peace of Mind
              </h6>
              <p>
                By choosing Siavista Electrical, you gain a partner dedicated to
                exceeding expectations. We possess a proven track record of
                success across diverse projects and prioritize exceptional
                customer service.
              </p>
              <div className='d-flex justify-content-start flex-column flex-lg-row'>
                <Button
                  variant='light'
                  className='rounded-0  bg-orange me-2  mb-2'
                  href='https://wa.me/27782468156'
                  target='_blank'
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </Button>
                <Button
                  variant='light'
                  className='rounded-0  bg-orange mx-2 mb-2'
                  href='https://web.facebook.com/profile.php?id=61560490621840'
                  target='_blank'
                >
                  <FaFacebook /> Facebook
                </Button>
                <Button
                  variant='light'
                  className='rounded-0  bg-orange mx-2 mb-2'
                  href='/'
                >
                  <FaLinkedin /> LinkedIn
                </Button>
              </div>
            </div>
            <div className='d-md-none d-xs-block'>
              <img
                className='img-fluid'
                src='/hero.png'
                alt='Hero Image'
                fluid
              />
            </div>
          </Col>
          <Col lg={5} order={1} className='order-lg-2 bg-dark-grey text-white'>
            <Row className='justify-content-center'>
              <Col md={10} sm={10} xs={10}>
                <div>
                  <h4 className='text-orange text-uppercase mt-5'>
                    Reach out to us
                  </h4>
                  <h5 className='text-white'>
                    Your Comprehensive Electrical Partner
                  </h5>
                  <p className='text-white'>
                    At Siavista Electrical, we understand the importance of a
                    reliable and experienced electrical contractor for your
                    project. We offer a comprehensive range of services,
                    ensuring a seamless experience from initial concept to final
                    acceptance of the completed installation.
                  </p>
                  <h5 className='text-white'>Ready to Discuss Your Project?</h5>
                  <p className='text-white'>
                    Just a few details, and we'll be in touch to discuss your
                    project and answer any questions you might have. It's that
                    simple! We can't wait to hear from you.
                  </p>
                  <Col md={12}>
                    <Form onSubmit={handleSubmit} className='text-white'>
                      <Form.Group controlId='fullName'>
                        <Form.Label className='text-white mb-2 mt-4'>
                          Full Name
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter your full name'
                          name='fullName'
                          value={formData.fullName}
                          onChange={handleChange}
                          className='text-muted'
                        />
                      </Form.Group>
                      <Form.Group controlId='email'>
                        <Form.Label className='text-white mb-2 mt-4'>
                          Email address
                        </Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Enter email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          className='text-muted'
                        />
                      </Form.Group>
                      <Form.Group controlId='cellphone'>
                        <Form.Label className='text-white mb-2 mt-4'>
                          Contact Number
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter cellphone number'
                          name='cellphone'
                          value={formData.cellphone}
                          onChange={handleChange}
                          className='text-muted'
                        />
                      </Form.Group>
                      <Form.Group controlId='subject'>
                        <Form.Label className='text-white mb-2 mt-4'>
                          Subject
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter subject'
                          name='subject'
                          value={formData.subject}
                          onChange={handleChange}
                          className='text-muted'
                        />
                      </Form.Group>
                      <Form.Group controlId='body'>
                        <Form.Label className='text-white mb-2 mt-4'>
                          Description
                        </Form.Label>
                        <br />
                        <br />
                        <Form.Control
                          as='textarea'
                          rows={3}
                          placeholder='Enter your message'
                          name='body'
                          value={formData.body}
                          onChange={handleChange}
                          className='text-muted mb-4 mt-4'
                        />
                      </Form.Group>
                      <div className='my-4 '>
                        {showAlert && error && (
                          <Alert
                            variant='danger'
                            onClose={() => setShowAlert(false)}
                            dismissible
                          >
                            <small className='fs-6'>{error}</small>
                          </Alert>
                        )}
                      </div>
                      <div className='row'>
                        <div className='col-md-6 my-4'>
                          <Button
                            variant='dark'
                            type='submit'
                            className='btn bg-hover-light  bg-orange rounded-0  px-4 py-2 me-2  border-0 shadow-sm'
                            disabled={isLoading || showThankYou}
                          >
                            Submit
                          </Button>
                        </div>
                        <div className='col-md-6 my-4 d-flex flex-row justify-content-end'>
                          {isLoading && (
                            <button
                              class='btn text-dark-grey-500  bg-orange rounded-0 px-4 py-2 me-2  border-0 shadow-sm'
                              type='button'
                              disabled
                            >
                              <span
                                class='spinner-border spinner-border-sm pr-4'
                                role='status'
                                aria-hidden='true'
                              ></span>{' '}
                              Submiting...
                            </button>
                          )}
                        </div>
                      </div>
                    </Form>
                    {showThankYou && (
                      <Alert variant='warning' className='text-center my-4'>
                        <small className='fs-6'>
                          Thank you for your feedback! We will review it
                          shortly.
                        </small>
                      </Alert>
                    )}
                  </Col>
                </div>
              </Col>
            </Row>
          </Col>
          <div className='d-md-none d-xs-block p-4 bg-grey'>
            <div className='d-flex justify-content-start flex-column flex-lg-row px-3'>
              <Button 
                variant='light' 
                className='rounded-0 mr-2 mx-2 mb-4'
                href='https://wa.me/27782468156'
                target='_blank'
              >
                <FaWhatsapp /> Chat on WhatsApp
              </Button>
              <Button 
                variant='light' 
                className='rounded-0 mx-2 mb-4'
                href='https://web.facebook.com/profile.php?id=61560490621840'
                target='_blank'
              >
                <FaFacebook /> Facebook
              </Button>
              <Button 
                variant='light' 
                className='rounded-0 mx-2 mb-4'
                href='/'
              >
                <FaLinkedin /> LinkedIn
              </Button>
            </div>
          </div>
        </Row>
      </main>
    </Layout>
  );
}
