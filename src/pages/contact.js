import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
const inter = Inter({ subsets: ['latin'] });
import Hero from '@/components/hero';
import About from '@/components/about';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to send the form data
    setShowAlert(true);
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      body: '',
    });
  };

  return (
    <Layout>
      <main
      // className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
      >
        <Container className='mt-5'>
          <Row>
            <Col lg={7} order={2} className='order-lg-1'>
              <div id='hero-image-container'>
                <div id='dotted-box'>
                  <DottedBox />
                </div>
                <div id='hero-image'>
                  <img
                    className='img-fluid'
                    src='/hero.png'
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
              <p className='mt-3'>
                Welcome to Siavista Electrical! Contact us for all your
                electrical needs.
              </p>
              <div className='d-flex justify-content-start'>
                <Button variant='dark' className='mr-2 mx-2'>
                  <FaWhatsapp /> Chat on WhatsApp
                </Button>
                <Button variant='dark' className='mx-2'>
                  <FaFacebook /> Facebook
                </Button>
                <Button variant='dark' className='mx-2'>
                  <FaLinkedin /> LinkedIn
                </Button>
              </div>
            </Col>
            <Col lg={5} order={1} className='order-lg-2'>
              <div>
                <h4 className='text-orange text-uppercase mt-5'>
                  Work with us
                </h4>
                <h3 className='text-grey'>
                  Power up with our unmatched service!
                </h3>
                <p className='text-grey'>
                  The services rendered by Siavista can cover a project in its
                  entirety from original concept to acceptance of completed
                  installation work
                </p>
                <Col md={12}>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='fullName'>
                      <Form.Label className='text-secondary mb-2 mt-4'>
                        Full Name
                      </Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter your full name'
                        name='fullName'
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId='email'>
                      <Form.Label className='text-secondary mb-2 mt-4'>
                        Email address
                      </Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId='subject'>
                      <Form.Label className='text-secondary mb-2 mt-4'>
                        Subject
                      </Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId='body'>
                      <Form.Label className='text-secondary mb-2 mt-4'>
                        Message
                      </Form.Label>
                      <Form.Control
                        as='textarea'
                        rows={3}
                        placeholder='Enter your message'
                        name='body'
                        value={formData.body}
                        onChange={handleChange}
                        className='mb-4'
                      />
                    </Form.Group>
                    <Button variant='dark' type='submit'>
                      Submit
                    </Button>
                  </Form>
                  {showAlert && (
                    <Alert variant='success' className='mt-3'>
                      Thank you for contacting us!
                    </Alert>
                  )}
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
