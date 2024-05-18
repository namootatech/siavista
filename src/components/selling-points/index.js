import { Row, Col, Container } from 'react-bootstrap';
import { MdEngineering } from 'react-icons/md'; // For 'Electrical Experts'
import { GiTargeted } from 'react-icons/gi'; // For 'Focused Expertise - Targeted Results'
import { FaRegHandshake } from 'react-icons/fa'; // For 'Maximum Results - Minimum Investment'

const SellingPoints = () => {
  return (
    <Container id='selling-points' className='p-4 bg-dark-grey selling-points'>
      <Container className='my-4 p-4'>
        <Row className='p-4'>
          <Col md={4} sm={12} className='text-center p-4 '>
            <h3 className='text-white fs-1 fw-bold'>Trusted Partner</h3>
            <h4 className='text-orange fs-2 fw-bold'>Electrical Success</h4>
            <MdEngineering size='7em' className='text-dark-grey-500 mt-4' />
            <p className='text-white fs-5 p-4 mh-75'>
              {' '}
              At the heart of our company lies a team of Electrical Experts,
              each meticulously selected for their extensive knowledge and
              unwavering commitment to the electrical trade.
            </p>
            <p className='text-white fs-5 p-4'>
              Our professionals are not only adept at navigating the
              complexities of electrical systems but also bring a wealth of
              experience from working across diverse environments.
            </p>
          </Col>
          <Col md={4} sm={12} className='text-center p-4 '>
            <h3 className='text-white fs-1 fw-bold'>Focused Expertise</h3>
            <h4 className='text-orange fs-2 fw-bold'>Targeted Results</h4>
            <GiTargeted size='7em' className='text-dark-grey-500 mt-4' />
            <p className='text-white fs-5 p-4 mh-75'>
              {' '}
              Our company ethos, ‘Focused Expertise - Targeted Results,’
              reflects our strategic approach to electrical services.
            </p>
            <p className='text-white fs-5 p-4'>
              {' '}
              We delve deep into understanding the specific requirements of each
              project, allowing us to deploy targeted solutions that address the
              core of your electrical challenges.
            </p>
          </Col>
          <Col md={4} sm={12} className='text-center p-4'>
            <h3 className='text-white fs-1 fw-bold'>Maximum Results</h3>
            <h4 className='text-orange fs-2 fw-bold'>Minimum Investment</h4>
            <FaRegHandshake size='7em' className='text-dark-grey-500 mt-4' />
            <p className='text-white fs-5 p-4 mh-75'>
              {' '}
              The principle of ‘Maximum Results - Minimum Investment’ is woven
              into the fabric of our service delivery model.
            </p>
            <p className='text-white fs-5 p-4'>
              We are committed to providing our clients with high-caliber
              electrical services and equipment that yield maximum functionality
              and longevity, all while maintaining an eye on cost-efficiency.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SellingPoints;
