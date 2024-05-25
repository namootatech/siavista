import Image from 'next/image';

import Layout from '@/components/layout';

import { Row, Col, Container } from 'react-bootstrap';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import SellingPoints from '@/components/selling-points';
import PartnerStrip from '@/components/partner-strip';

export default function CareersPage() {
  return (
    <Layout>
      <main className='overflow-hidden home-main'>
        <Row className='d-flex flex-row justify-content-center align-items-center'>
          <Col lg={8} md={10} sm={10} xs={10} className='mt-2 mb-5 py-4'>
            <div id='history-section'>
              <h2 className='text-orange mt-3 mb-2 display-4 funky-text'>
                Careers
              </h2>
              <h1 className='mt-3 mb-2 display-6 text-grey fw-light fw-bold '>
                Join Our Team
              </h1>
              <p className='text-grey lead fs-3'>
                We are always looking for talented individuals to join our team.
                If you are passionate about technology and want to work in a
                fast-paced environment, we would love to hear from you.
              </p>
              <p className='text-grey lead fs-3'>
                We offer competitive salaries, benefits, and a great work
                environment. If you are interested in joining our team, please
                send your resume to
                <a
                  href='mailto:info@siavistaelectrical.com'
                  className='text-orange'
                >
                  {' '}
                  careers@siavistaelectrical.com
                </a>
              </p>
              <p className='text-grey lead fs-3'>
                We are an equal opportunity employer and do not discriminate
                based on race, gender or sexual orientation.
              </p>
            </div>
          </Col>
        </Row>
      </main>
    </Layout>
  );
}
