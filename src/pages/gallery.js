import moment from 'moment';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ResponsiveSlider from '@/components/slider';
import Layout from '@/components/layout';
import Gallery from '@/components/gallery';
import Head from 'next/head';
import Link from 'next/link';
import ServiceCarousel from '@/components/about-carousel';
import { Row, Col, Container } from 'react-bootstrap';

const GalleryPage = () => {
 
  const images = [
    // {
    //     imageUrl: 'service2.png',
    //     category: '24/7 EMERGENCY RESPONSE',
    // },
    // {
    //     imageUrl: 'electrician.jpg',
    //     category: 'CERTIFIED ELECTRIC FENCE INSTALLATION',
    // },
    // {
    //     imageUrl: 'service5.jpg',
    //     category: 'ADVANCED ACCESS CONTROL SYSTEMS',
    // },
    {
        imageUrl: 'gallery0.jpg',
        category: 'LOAD SHEDDING SOLUTIONS',
    },
    {
        imageUrl: 'gallery4.jpg',
        category: 'SEAMLESS HOME AUTOMATION',
    },
    // {
    //     imageUrl: 'service3.png',
    //     category: 'DESIGN & PLANNING',
    // },
    // {
    //     imageUrl: 'service2.png',
    //     category: '24/7 EMERGENCY RESPONSE',
    // },
    // {
    //     imageUrl: 'electrician.jpg',
    //     category: 'CERTIFIED ELECTRIC FENCE INSTALLATION',
    // },
    // {
    //     imageUrl: 'service5.jpg',
    //     category: 'ADVANCED ACCESS CONTROL SYSTEMS',
    // },
    {
        imageUrl: 'gallery2.jpg',
        category: 'LOAD SHEDDING SOLUTIONS',
    },
    {
        imageUrl: 'gallery5.jpg',
        category: 'SEAMLESS HOME AUTOMATION',
    },
    // {
    //     imageUrl: 'service3.png',
    //     category: 'DESIGN & PLANNING',
    // },
    // {
    //     imageUrl: 'service2.png',
    //     category: '24/7 EMERGENCY RESPONSE',
    // },
    // {
    //     imageUrl: 'electrician.jpg',
    //     category: 'CERTIFIED ELECTRIC FENCE INSTALLATION',
    // },
    // {
    //     imageUrl: 'service5.jpg',
    //     category: 'ADVANCED ACCESS CONTROL SYSTEMS',
    // },
    {
        imageUrl: 'gallery3.jpg',
        category: 'LOAD SHEDDING SOLUTIONS',
    },
    {
        imageUrl: 'gallery6.jpg',
        category: 'SEAMLESS HOME AUTOMATION',
    },
    // {
    //     imageUrl: 'service3.png',
    //     category: 'DESIGN & PLANNING',
    // }
  ];

  return (
    <Layout
      seo={{
        title: 'Gallery',
        description:
          'Siavista Electrical Gallery, showcasing our commitment to providing high-quality electrical services, access control solutions, home automation, and security systems. Discover how our expertise and dedication have earned us trust across various industries.',
      }}
    >
      <div>
        <main className='container'>
          <Container className='p-5'>
            <Row className='d-flex flex-row justify-content-center align-items-center'>
              <Col lg={8} md={12} className='mt-2 mb-5 py-4'>
                <div id='gallery-section'>
                  <h2 className='text-orange mt-3 mb-4 display-4 fw-bold funky-text'>
                    Checkout What We've been doing
                  </h2>
                  <Gallery images={images} className="mt-5" />
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </Layout>
  );
};

export default GalleryPage;




