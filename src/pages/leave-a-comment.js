import Head from 'next/head';
import TestimonialForm from '@/components/testimonial-form';
import Layout from '@/components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout
      seo={{
        title: 'Testimonials',
        description:
          'Share your experience with Siavista Electrical by writing a testimonial. Your feedback helps us understand your satisfaction with our high-quality electrical services, access control solutions, home automation, and security systems. Join others in contributing to our mission of excellence.',
      }}
    >
      <div>
        <main className='container bg-oldlace'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='row '>
                <div className='col-md-6 m-0 p-4 '>
                  <img
                    src='/electrician.jpg'
                    alt='Siavista Electrical Testimonials'
                    className='testimonial-header-image'
                  />
                  <h1 className='text-left pt-4 fs-2 funky-text text-orange fw-bold'>
                    We Value Your Feedback!
                  </h1>
                  <h3 className='text-left py2 fs-3 text-dark-grey-500 '>
                    Leave us a comment
                  </h3>
                  <p className='text-left py-1 fs-5 text-dark-grey-500  lead'>
                    Thank you for choosing Siavista Electrical! We are committed
                    to exceeding your expectations through continuous innovation
                    and superior service.
                  </p>
                  <p className='text-left fs-5 text-dark-grey-500  lead'>
                    Your experience is important to us. We would be grateful if
                    you could take a few moments to share your feedback by
                    filling out this form.
                  </p>
                </div>
                <div className='col-md-6 m-0 p-0 testimonial-form-container bg-oldlace'>
                  <TestimonialForm />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
