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
      <div className='d-none d-lg-block'>
        <Banner showModal={show} onClose={handleClose} />
      </div>
      <Navbar collapseOnSelect expand='lg' className='bg-dark-grey '>
        <Container fluid>
          <Navbar.Brand href='/'>
            {/* siavista Electrical */}
            <Image
              src='/newlogo202.png'
              width={189}
              height={58}
              placeholder='blur'
              blurDataURL={blurDataUrl}
              priority
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />

          <div className='fs-5 w-100 d-xs-block d-sm-block d-md-none d-lg-none d-xl-none'>
            <Navbar.Collapse className='me-auto' id='responsive-navbar-nav'>
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
                href='/gallery'
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
            </Navbar.Collapse>
            <Navbar.Collapse className=''>
              <Banner showModal={show} onClose={handleClose} mobile />
            </Navbar.Collapse>
            <Navbar.Collapse className='ctas'>
              <Link
                href='#'
                onClick={handleShow}
                className='p-sm-4 nav-link text-decoration-none navigation-link bg-dark-grey-500 bg-hover-orange p-2 px-4 text-white  shadow shadow-sm'
              >
                Call me back
              </Link>
              <Link
                href='/contact'
                className='p-sm-4 nav-link navigation-link p-2 bg-orange shadow shadow-sm px-4 bg-hover-light text-decoration-none'
              >
                Chat with us
              </Link>
            </Navbar.Collapse>
          </div>

          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='d-none lg-block'
          >
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
                href='/gallery'
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
            <Nav className='d-md-none d-lg-none d-sm-block  d-xs-block'>
              <Banner showModal={show} onClose={handleClose} mobile />
            </Nav>
            <Nav className='ctas'>
              <Link
                href='#'
                onClick={handleShow}
                className='nav-link text-decoration-none navigation-link bg-dark-grey-500 bg-hover-orange p-2 px-4 text-white  shadow shadow-sm'
              >
                Call me back
              </Link>
              <Link
                href='/contact'
                className='nav-link navigation-link p-2 bg-orange shadow shadow-sm px-4 bg-hover-light text-decoration-none'
              >
                Chat with us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='d-none d-lg-block'>
        <NextBreadcrumb />
      </div>
    </div>
  );
};
export default NavigationBar;
