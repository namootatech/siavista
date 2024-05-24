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
          <Col lg={8} md={12} sm={10} xs={10} className='mt-2 mb-5 py-4'>
            <div id='history-section'>
              <h2 className='text-orange  display-4 funky-text my-4'>
                Compliance
              </h2>
              <h1 className=' display-6 text-grey fw-bold'>
                Our Commitment to Compliance
                <br /> and Sustainability
              </h1>
              <p className='text-grey lead fs-4 mb-4'>
                Siavista was founded in January 2000 with a vision to lead the
                electrical industry through excellence and responsible
                practices. We are proud to be at the forefront of compliance and
                sustainability in our operations.
              </p>
              <h2 className='text-orange  display-6 funky-text my-4'>
                B-BBEE Compliance
              </h2>
              <p className='text-grey lead fs-4 mb-4'>
                As a testament to our dedication to empowerment and equality, we
                have achieved Level 1 B-BBEE compliance. This reflects our
                unwavering commitment to contributing positively to the economic
                landscape of South Africa by fostering inclusivity and diversity
                within our workforce and business practices.
              </p>
              <h2 className='text-orange  display-6 funky-text my-4'>
                ISO Certifications
              </h2>
              <p className='text-grey lead fs-4 mb-4'>
                Our commitment to quality, environmental management, and
                occupational health and safety is demonstrated through our
                ISO9001, ISO14001, and ISO45001 certifications. These
                internationally recognized standards ensure that our services
                meet the highest quality benchmarks and that we conduct our
                operations in an environmentally responsible and safe manner.
              </p>
              <h2 className='text-orange  display-6 funky-text my-4'>
                Occupational Health and Safety
              </h2>
              <p className='text-grey lead fs-4 mb-4'>
                The well-being of our employees and clients is paramount. We
                adhere strictly to the Occupational Health and Safety Act, with
                a full-time, trained safety representative always on standby.
                Our proactive approach to safety mitigates risks and ensures a
                secure working environment for all.
              </p>
              <h2 className='text-orange  display-6 funky-text my-4'>
                Electrical Solutions
              </h2>
              <p className='text-grey lead fs-4 mb-4'>
                From commercial to industrial and domestic electrical
                installations and maintenance, we utilize state-of-the-art
                products to deliver high-quality services. Our expertise extends
                to high mast and building lighting, providing end-to-end
                electrical solutions that cater to our clients’ diverse needs.
              </p>
              <h2 className='text-orange  display-6 funky-text my-4'>
                Green Power Solutions
              </h2>
              <p className='text-grey lead fs-4 mb-4'>
                In our stride towards a greener world, Siavista offers
                innovative green power solutions. We strive to reduce the carbon
                footprint of our operations and promote sustainable practices.
                Our eco-friendly solutions not only benefit our clients but also
                contribute to the well-being of our planet.
              </p>
              <p className='text-grey lead fs-4 mb-4'>
                At Siavista, we believe in a future where business growth and
                environmental care go hand in hand. We are fully compliant with
                industry standards and continuously seek ways to enhance our
                contribution to a healthier, more sustainable world. For any
                queries send us an email at
                <a
                  href='mailto:info@siavistaelectrical.co.za?cc=siavistaelectrical@gmail.com&subject=Compliance%20Query'
                  className='text-orange'
                >
                  {' '}
                  compliance@siavistaelectrical.co.za
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </main>
    </Layout>
  );
}
