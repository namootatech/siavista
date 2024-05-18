import moment from 'moment';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ResponsiveSlider from '@/components/slider';
import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';
import ServiceCarousel from '@/components/about-carousel';
import { Container } from 'react-bootstrap';


const AboutUs = () => {
    const servicesData = [
        {
          imageUrl: 'about-carousel1.png',
          title: 'Design Service',
        },
        {
          imageUrl: 'about-carousel2.png',
          title: 'Electric fence installation',
        },
        {
          imageUrl: 'about-carousel1.png',
          title: 'Design Service',
        },
        {
          imageUrl: 'about-carousel2.png',
          title: 'Electric fence installation',
        },
    ];

  return (
    <Layout
      seo={{
        title: 'About Us',
        description:
          'About Siavista Electrical, showcasing our commitment to providing high-quality electrical services, access control solutions, home automation, and security systems. Discover how our expertise and dedication have earned us trust across various industries.',
      }}
    >
      <div>
        <main className='container'>
            <ServiceCarousel services={servicesData} className="mt-5"/>
            <Container>
              <div id="history-section">
                <h2 className="text-orange mt-3 mb2">Our Organization History &amp; Background</h2>
                <p className="text-grey">
                  Our vast &amp; extensive history has aided us to observe a mundane and stagnant routine of operation within our industry whilst partnered with other employers and companies, which was largely echoed by all our organization&apos;s stakeholders which have impacted our organization&apos;s growth and development through a journey of years, whilst flexibly handling different roles within our home away from home - Siavista. 
                </p>
                <p className="text-grey">
                  Throughout the process of observation and skills development in acquiring the tricks of the trade, we refused to be complaisant. In many ways, like energy (cannot be created or destroyed), fueled by a dream, creativity, hard word, and determination, we transformed into Siavista. An aspirational entity with a broader vision to utilize and employ more diversified, innovative, and integrated thinking and applications within our industry. Gazing back towards the beginning of what is now an eleven year journey, we have yearned to establish and integrate a core and fundamental pillar that will be routed from the innovation of technology… Which will strengthen our competitive advantage and deferential for &quot;the future&quot;.
                </p>
                <p className="text-grey">
                  Motivated from our passion and dedication to serve the industry, we desire to continually reproduce solution driven results that have surely provoked more than just smiles and pleasant emotions for hundreds of satisfied clients. Our proven results have helped us groom and expand our organizational interests into a &quot;One Stop Shop&quot; where we endeavor to echo our customer excentric values through our vast vendor networks and delivery of quality products that fulfil the needs of a variety of projects alike. This allowance created opportunities to fill market requirements that solved both domestic and commercial installation issues such as: basic electrics, access control (Intercom, gate, &amp; garage, motors), CCTV Cameras, &amp; lighting designs - &quot;We became their one solution to their needs&quot;.
                </p>
                <p className="text-grey">
                  The appreciation of growth has been witnessed through our own growth, and contractual relationships with businesses and companies that led us into memorable spaces such as <span className="text-orange">&quot;Kumba Iron Ore&quot;</span> situated in the <span className="text-orange">Northern Cape</span>. 
                </p>
              </div>
            </Container>
        </main>
      </div>
    </Layout>
  );
};

export default AboutUs;
