import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pages from '@/config/pages';
import Banner from '../banner';
import blurDataUrl from '@/lib/blurDataUri';

import NextBreadcrumb from '../breadcrumb';

const kebabCaseToSentenceCase = (kebabCase) => {
  return kebabCase
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log('globvalshowmodal', show);

  return (
    <div className='super-nav'>
      {/* create a banner componenet that will be fixed above the nbav to show messages*/}
      <Banner showModal={show} onClose={handleClose} />
      <Navbar collapseOnSelect expand='lg' className='bg-dark-grey '>
        <Container fluid>
          <Navbar.Brand href='/'>
            {/* siavista Electrical */}
            <Image
              src='/newlogo202.png'
              width={201}
              height={78}
              layout='responsive'
              placeholder='blur'
              blurDataURL={blurDataUrl}
              priority
            />
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
                className='nav-link navigation-link p-2 bg-orange shadow shadow-lg px-4 bg-hover-light text-decoration-none'
              >
                Chat with us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NextBreadcrumb />
    </div>
  );
};
export default NavigationBar;
