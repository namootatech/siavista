import { Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Layout from '@/components/layout';
import SimpleHero from '@/components/SimpleHero';
import Card from 'react-bootstrap/Card';
import pages from '@/config/pages';
import Button from 'react-bootstrap/Button';
import { FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
} from 'react-icons/pi';
import ServiceCarousel from '@/components/about-carousel';

const numbers = [
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
];

const servicesData = [
  {
    imageUrl: '/about-carousel1.png',
    title: 'Design Service',
  },
  {
    imageUrl: '/about-carousel2.png',
    title: 'Electric fence installation',
  },
  {
    imageUrl: '/about-carousel1.png',
    title: 'Design Service',
  },
  {
    imageUrl: '/about-carousel2.png',
    title: 'Electric fence installation',
  },
];

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  return {
    props: {
      page: pages.find((page) => page.id === id) || {},
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: pages.map((page) => ({
      params: {
        id: page.id,
      },
    })),
    fallback: false,
  };
};

const LightingPage = ({ page }) => {
  console.log('Page', page);
  return (
    <Layout>
      <Row className='d-flex justify-content-center align-items-center m-0 p-0 min-vw-100'>
        <Col className='text-left m-0 p-0' md={12} sm={12} xs={12}>
          <SimpleHero {...page.hero} />

          <div className='bg-dark-grey text-white'>
            <Row className='p-4 d-flex justify-content-center align-items-center '>
              <Col md={10} className='p-4'>
                <h4 className='fs-1 text-orange m-md-4 funky-text'>
                  {page?.title}
                </h4>
                <Row className='p-4'>
                  <Col md={12} className='p-4'>
                    {page?.paragraphs?.map((p, index) => {
                      const Icon = numbers[index] || (() => null); // eslint-disable-line react/display-name
                      console.log('Icon', Icon, numbers[index]);
                      return <p className='fs-4 mt-2'>{p}</p>;
                    })}
                  </Col>
                  <Col md={12} className='p-4'>
                    <h3 className='fs-1 fw-bold text-orange funky-text my-4'>
                      We're ready to get the ball rolling'
                      <span className='text-white'> Are you ?</span>
                    </h3>

                    <button className='btn me-4 bg-dark-grey-500 text-white bg-hover-orange rounded-0 px-4 py-2'>
                      Contact us
                    </button>
                    <button className='btn bg-orange text-white rounded-0 bg-hover-dark-grey px-4 py-2 me-2 bg-'>
                      Get quote
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <ServiceCarousel services={servicesData} className='mt-5' />
            <Row className='p-4 d-flex justify-content-center align-items-center bg-oldlace text-dark-grey-500'>
              <Col md={10} className='p-4'>
                <h4 className='fs-2 my-4'>{page?.sellingPoints?.title}</h4>
                <div className='d-flex flex-row gap-2'>
                  {page?.sellingPoints?.points?.map((point) => (
                    <Card
                      key={point.title}
                      text={'light'}
                      style={{ width: '18rem' }}
                      className='mb-2 border-0 shadow shadow-sm bg-light text-dark-grey-500 rounded-0'
                    >
                      <Card.Body>
                        <Card.Title className='text-orange fw-bold fs-6'>
                          {point.title}{' '}
                        </Card.Title>
                        <Card.Text className='text-dark-grey-500 fs-6'>
                          {point.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
                <div className='d-flex justify-content-center bg-oldlace flex-column p-4'>
                  <h4 className='fs-2 my-4'>{page?.footer?.title}</h4>
                  <p className='fs-5'>{page?.footer?.description}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className='d-flex justify-content-center align-items-center m-0 p-0 min-vw-100'>
        <Col className='text-left m-0 p-0' md={12} sm={12} xs={12}>
          <div className='text-center p-4 d-flex justify-content-center flex-column align-items-center'>
            <p>Chat with us on: </p>
            <div className='d-flex justify-content-start flex-column flex-lg-row px-3'>
              <Button
                variant={'success'}
                className='border-0 bg-orange rounded-0 mr-2 mx-2 mb-4'
              >
                <FaWhatsapp /> Chat on WhatsApp
              </Button>
              <Button className='border-0 bg-orange rounded-0 mx-2 mb-4'>
                <FaFacebook /> Facebook
              </Button>
              <Button className='border-0 bg-orange rounded-0 mx-2 mb-4'>
                <FaLinkedin /> LinkedIn
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default LightingPage;
