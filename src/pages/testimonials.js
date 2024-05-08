import moment from 'moment';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ResponsiveSlider from '@/components/slider';
import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';

const blurDataUrl =
  'data:image/jpeg;base64,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BQxoNaloNalqq0YA0Y0AAAZoI1gwAGAMGKFTW1NAqa2poMqa2pojKmtqaDKiqqKImpramgmoqqiqiaiqqKCaiqqKImoqqigmoqqioiamqqKImsramiMrCsAawBqolsFVFRMbBVxURFRRUVExUFXGxMVAVFREVBVRUTGwFNS0VQxoNGNAAB6LQNYaaMAaMaDRgChgCmpaDWpao1qWg0YArRgK01mgAMEawYDWDAGDFCpramgVNbU0GVNbU0RlTW1NBlRVVFEZUVVRQZXOrqKqIqaqooJrnV1FERU1VRQRU1VRRE1FVUVEZU1tTRCpawQGAqmpaC42JioKqKiIuKqoqIioKuKiIqAuNiYqCqjYmKgNaxoNalorWsAaMAejEjDStGaA1qWg0YAoYAoYKKanTQU1OmgoZpoKE6AoSA01mgNYMBrGADBihU1tTQKmtqaDKmtqaIVFVUUGVFVUURlTW1NBNRVVFVE1FVUUE1FVUURNRVVFETUVVRRE1NbU0E1NbU1EGFZog1OtBqkKgqoqIioKuKiIqCrjYmKiquNiYqAqKiIqCqiomNgKaloKGAqhgDRgD0Wms01hput1OmgrTWaaCtE63QUM0BQzQFGp1qitNS3QVpqdNBWms00G6azTQbprNZoN01ms0GjNZoNYazVGWstLWWgyspWWiMqa2poFRW1NBlRVVFEZU1tTQTUVVqKqJqKqooiaiqqKCaiqqKImoqqiiJqa2ptETU1tZURlYVgDdSApUQqUVUVERUFXFREVBVxURFRVXFREVAVFREVBVxsTGgpqWgoY0VowBowB6LROmsKo1hoN1upNFVrdTpoK1up00Fa1OmgrW6nTVFaazTQVpqdboN0ZpoK01Omg3TWaaDdZrNNBus1mmqGstNZoFqbW2ptAqbW2ptELU1tqbQZU2ttTaCamttTaIyprai1RlqK2poiaiqqKImoqqigmoqqiiJqKqoojKittRRGVNrbU2ojKzS1miNE63QVK2VCpRVxURKqCrioiVUVpcVESqgq4qIioCoqIioC42JjYKpqWgpqQVQwBowB6HTWGsK3W6nTQVpqdboN1up00Fa3U6aKvTU63QVpqdboN1up01RWms00G63U6aCtNTpoN01mmg3WazTQbrNZpqhrLTWaBay0tTaBay0tTaIWstLU2gWotbam0RlqbW2ptBlRa21Nq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';
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
    <Layout>
      <div>
        <Head>
          <title>Siavista Electrical | Testimonials</title>
          <meta name='description' content='Siavista Electrical Testimonials' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

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
