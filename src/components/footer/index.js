import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Arrow from '@/components/arrow.svg';
import PartnerStrip from '../partner-strip';

// style={{ position: "fixed", bottom: 0, width: "100%" }}
const Footer = () => {
  return (
    <footer className='bg-light'>
      <PartnerStrip />
      <section class='section project-in-mind m-0 bg-dark-grey '>
        <div class='container bg-dark-grey text-white p-4'>
          <div className='row gx-x'>
            <div className='col-md-6 col-sm-12 p-4'>
              <h2 class='display-1 fw-bold p-4'>
                Have a project on your mind?
              </h2>
            </div>
            <div className='col-md-6 col-sm-12 p-4'>
              <h3 class='h4 my-4'>Contact Info</h3>
              <p class='my-4'>
                Address:{' '}
                <span class='text-grey'>
                  Crystal Grove, Amber Road, Burgundy Estate, Cape Town
                </span>
                <br />
                Email:{' '}
                <span class='text-grey'>info@siavistaelectrical.com</span>
                <br />
                Cell: <span class='text-grey'>+27 78 246 8156</span>
              </p>
              <Link href='/contact' class='cta-button w-inline-block my-4'>
                <div class='cta-button-text fs-2 fw-bold text-dark-grey'>
                  Let’s get it done!
                </div>
                <Arrow class='cta-button-arrow' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Container className='p-4'>
        <Row className='align-items-center'>
          <Col md={6} className='text-center text-md-start mb-4 mb-md-0'>
            <p className='mb-0'>
              Copyright © 2024 Siavista Electrical - All Rights Reserved.
            </p>
          </Col>

          <Col md={6} className='text-center text-md-end'>
            <p className='mb-0'>
              Developed by <strong className='text-orange'>Namoota</strong>
            </p>
          </Col>
          <Col md={6} className='text-center text-md-start mb-4 mb-md-0'>
            <Link
              href='/leave-a-comment'
              className='text-dark-grey text-decoration-none'
            >
              <p className='text-orange'>Leave us a comment</p>
            </Link>
          </Col>
        </Row>
        <Row className='justify-content-center mt-4 mb-4'>
          <Col className='text-center'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark-grey me-3'
            >
              <i className='bi bi-facebook fs-4'></i>
            </a>
            <a
              href='https://www.twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark-grey me-3'
            >
              <i className='bi bi-twitter fs-4'></i>
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark-grey me-3'
            >
              <i className='bi bi-instagram fs-4'></i>
            </a>
            <a
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark-grey'
            >
              <i className='bi bi-linkedin fs-4'></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
