import Head from 'next/head';
import TestimonialForm from '@/components/testimonial-form';
import Layout from '@/components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Siavista Electrical | Testimonials</title>
          <meta name='description' content='Siavista Electrical Testimonials' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='container'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='row '>
                <div className='col-md-6 py-4 '>
                  <img
                    src='/electrician.jpg'
                    alt='Siavista Electrical Testimonials'
                    className='testimonial-header-image'
                  />
                  <h1 className='text-left gray-500 text-muted pt-4 fs-4 gray-500'>
                    We Value Your Feedback!
                  </h1>
                  <h3 className='text-left py2 fs-5 text-secondary'>
                    Leave us a comment
                  </h3>
                  <p className='text-left py-1 fs-6 gray-500 text-muted text-secondary'>
                    Thank you for choosing Siavista Electrical! We are committed
                    to exceeding your expectations through continuous innovation
                    and superior service.
                  </p>
                  <p className='text-left text-muted text-secondary'>
                    Your experience is important to us. We would be grateful if
                    you could take a few moments to share your feedback by
                    filling out this form.
                  </p>
                </div>
                <div className='col-md-6 py-4 testimonial-form-container'>
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
