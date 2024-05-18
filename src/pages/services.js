import moment from 'moment';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';
import Services from '@/components/services';
import { Container } from 'react-bootstrap';


const AboutUs = () => {
  const servicesData = [
    {
      imageUrl: 'service3.png',
      title: 'Design Service',
      description: 'lighting design with architects we do appropriate electrical sketches for new buildings or those under renovation'
    },
    {
      imageUrl: 'electrician.jpg',
      title: 'Electric fence installation',
      description: 'We are accredited for electric fence installations. We have a certificate of compliance'
    },
    {
      imageUrl: 'service5.jpg',
      title: 'Access Control',
      description: 'We provide a variety of services for selective control surveillance, and access to locations or offices. '
    },
    {
      imageUrl: 'service2.png',
      title: 'Field Service',
      description: 'Emergency services during non-standard hours, troubleshooting, on-site inspections, commissioning, investigations, and proactive maintenance.'
    },
    {
      imageUrl: 'service6.jpg',
      title: 'Home Automation',
      description: 'Comprehensive automation solutions, such as curtain and lighting control, scene creation, and control through remote devices or touchscreen, whether you\'re nearby or far away.'
    },
    {
      imageUrl: 'service0.png',
      title: 'Load-shedding Solution',
      description: 'Green energy, Inverter installations as a backup system or with Solar panels Wind turbines Installations Generator Installations'
    }
  ];

  return (
    <Layout
      seo={{
        title: 'Services',
        description:
          'Siavista Electrical Services, showcasing our commitment to providing high-quality electrical services, access control solutions, home automation, and security systems. Discover how our expertise and dedication have earned us trust across various industries.',
      }}
    >
      <div>
        <main className='container'>
          <Services services={servicesData} columnSize={4}/>
        </main>
      </div>
    </Layout>
  );
};

export default AboutUs;
