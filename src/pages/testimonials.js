import moment from 'moment';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ResponsiveSlider from '@/components/slider';
import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';
import blurDataUrl from '@/lib/blur-data-url';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch('/api/testimonials/get-all');
      const data = await response.json();
      setTestimonials(data.testimonials);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  console.log(testimonials);

  const testimonialItems = testimonials?.map((testimonial) => (
    <div class='card my-4 testimonial border border-0 shadow-sm'>
      <div class='card-header text-center bg-light bg-gradient'>
        <h6 className='card-title'>
          {' '}
          {moment(testimonial.createdAt).format('MMMM Do, YYYY')}
        </h6>
      </div>
      <div class='card-body d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div className='col-md-4'>
            <Image
              className='img-fluid rounded-start'
              width={600}
              height={600}
              placeholder='blur'
              blurDataURL={blurDataUrl}
              src={testimonial.image || '/aboutBanner.png'} // Replace with default image path
              alt={testimonial.name + ' ' + testimonial.surname}
            />
          </div>
          <div className='col-md-8 text-left'>
            <p className='card-text text-left lead fs-6'>
              <q>
                <i>{testimonial.comment}</i>
              </q>
            </p>
          </div>
        </div>
      </div>
      <div class='card-footer border border-0 text-muted text-center'>
        <strong className='text-orange'>
          {' '}
          {testimonial.name} {testimonial.surname}
        </strong>
        <br />
        <small>{testimonial.role}</small>
        <br />{' '}
        <strong>
          <small>{testimonial.company}</small>
        </strong>
      </div>
    </div>
  ));

  return (
    <Layout
      seo={{
        title: 'Testimonials',
        description:
          'Explore testimonials from satisfied clients of Siavista Electrical, showcasing our commitment to providing high-quality electrical services, access control solutions, home automation, and security systems. Discover how our expertise and dedication have earned us trust across various industries.',
      }}
    >
      <div>
        <main className='container'>
          <div className='container mt-5'>
            <h2 className='fs-3 text-muted'>What Our Clients Say</h2>
            <p className='lead text-muted fs-5'>
              We're constantly striving to improve and deliver the best possible
              service to our clients. See what satisfied customers have to say
              about their experiences. If you've used our services and would
              like to share your feedback, we'd love to hear from you!{' '}
              <Link
                href='/leave-a-comment'
                className='text-orange text-decoration-none'
              >
                Leave a comment
              </Link>
              .
            </p>
            <div className='row my-5'>
              {loading && (
                <div>
                  <div class='spinner-border fs-1 text-warning' role='status'>
                    <span class='sr-only'></span>
                  </div>
                </div>
              )}
              {!loading && (
                <ResponsiveSlider items={testimonials}>
                  {testimonialItems}
                </ResponsiveSlider>
              )}
            </div>
            <div className='text-left my-5'>
              <p className='h4 fs-3 text-muted'>The Value of Client Feedback</p>
              <p className='text-muted lead fs-5'>
                Your feedback is invaluable to us. It helps us understand what
                we're doing well and where we can improve. Positive testimonials
                not only boost our morale, but also reassure potential clients
                about the quality of our services. We encourage you to share
                your honest experience with us, whether it's positive or
                negative.
              </p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Testimonials;
