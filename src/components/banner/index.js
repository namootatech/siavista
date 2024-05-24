import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Banner = ({ showModal, onClose, mobile }) => {
  const [show, setShow] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', cellphoneNumber: '' });

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  const handleClose = () => {
    setIsLoading(true);
    axios
      .post('/api/call-me-back/add', formData)
      .then((res) => {
        setIsLoading(false);
        setShowThankYouMessage(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setShowErrorMessage(true);
      });
  };
  const justClose = () => {
    onClose();
    setShow(false);
    setShowThankYouMessage(false);
    setShowErrorMessage(false);
    setIsLoading(false);
    setFormData({ name: '', cellphoneNumber: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div
        className={`${
          mobile
            ? 'border shadow-sm rounded-2 bg-secondary mt-4'
            : 'bg-orange text-white-force text-center p-1 banner'
        }`}
      >
        <Row>
          <Col
            lg={4}
            className={`${
              mobile
                ? 'mt-4 mb-2 fs-5 text-center d-flex flex-column gap-2 justify-content-center align-items-center'
                : 'text-left d-flex flex-lg-row flex-column justify-content-start align-items-start'
            } d-flex`}
          >
            <Link
              href='/compliance'
              className={`${
                mobile
                  ? ' w-100 text-center d-flex p-3 justify-content-center text-decoration-none bg-hover-orange text-white-force  text-white-force'
                  : 'text-white-trans text-decoration-none  mx-3'
              } d-flex`}
            >
              <small>Compliance</small>
            </Link>
            <Link
              href='/careers'
              className={`${
                mobile
                  ? ' w-100 text-center d-flex p-3 justify-content-center text-decoration-none bg-hover-orange text-white-force  text-white-force'
                  : 'text-white-trans text-decoration-none  mx-3'
              } d-flex`}
            >
              <small>Careers</small>
            </Link>
          </Col>

          <Col
            lg={8}
            className={`${
              mobile
                ? ' mb-5 fs-5 text-center d-flex flex-column gap-2 justify-content-center align-items-center'
                : 'text-right d-flex flex-lg-row flex-column justify-content-end align-items-end'
            } d-flex`}
          >
            <a
              href='tel:+27782468156'
              className={`${
                mobile
                  ? ' w-100 text-center d-flex p-3 justify-content-center text-decoration-none bg-hover-orange text-white-force  text-white-force'
                  : 'text-white-trans text-decoration-none  mx-3'
              } d-flex`}
            >
              <i className='fas fa-phone-alt'></i>{' '}
              <small>+27 78 246 8156</small>
            </a>
            <a
              href='mailto:info@siavistaelectrical.co.za'
              className={`${
                mobile
                  ? ' w-100 text-center d-flex p-3 justify-content-center text-decoration-none bg-hover-orange text-white-force  text-white-force'
                  : 'text-white-trans text-decoration-none  mx-3'
              } d-flex`}
            >
              <i className='fas fa-envelope'></i>
              <small>info@siavistaelectrical.co.za</small>
            </a>
            <Link
              href='/contact'
              className={`${
                mobile
                  ? ' w-100 text-center d-flex p-3 justify-content-center text-decoration-none bg-hover-orange text-white-force  text-white-force'
                  : 'text-white-trans text-decoration-none  mx-3'
              } d-flex`}
            >
              <small>Request support</small>
            </Link>
          </Col>
        </Row>
      </div>
      <Modal
        show={show}
        onHide={justClose}
        centered
        backdrop='static'
        contentClassName='rounded-0 bg-dark text-light'
      >
        <Modal.Header closeButton className='text-light fw-bold'>
          <Modal.Title>Fill in you details below</Modal.Title>
        </Modal.Header>
        {!isLoading && !showThankYouMessage && !showErrorMessage && (
          <Modal.Body>
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='John Doe'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Cellphone Number</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g 0831234567'
                  name='cellphoneNumber'
                  value={formData.cellphoneNumber}
                  onChange={handleChange}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
        )}
        {isLoading && (
          <Modal.Body className='text-center'>
            <p className='text-center text-warning fw-bold mt-2'>Loading</p>
            <h2 className='text-center display-2 fw-bold my-4'>
              {' '}
              Saving your details...
            </h2>
            <ProgressBar variant='warning' animated now={100} />
          </Modal.Body>
        )}
        {showThankYouMessage && !showErrorMessage && !isLoading && (
          <Modal.Body className='text-center'>
            <p className='text-center text-dark fw-bold mt-2'>
              Thank you for reaching out to us
            </p>
            <h2 className='text-center display-4 text-success fw-bold my-4'>
              {' '}
              We will call you back shortly
            </h2>
            <Button
              variant='dark'
              className='text-center bg-orange text-white-force shadow shadow-lg rounded-0 border-0'
              onClick={justClose}
            >
              Close
            </Button>
          </Modal.Body>
        )}
        {showErrorMessage && (
          <Modal.Body className='text-center'>
            <p className='text-center mt-2 fw-bold text-danger'>
              An error occurred
            </p>
            <h2 className='text-center display-3 fw-bold my-4'>
              {' '}
              Please try again later
            </h2>
            <Button
              variant='dark'
              className='bg-orange text-white-force shadow shadow-lg rounded-0 border-0'
              onClick={justClose}
            >
              Close
            </Button>
          </Modal.Body>
        )}
        <Modal.Footer
          className={
            !isLoading && !showThankYouMessage && !showErrorMessage
              ? ''
              : 'd-none'
          }
        >
          <button
            className='nav-link text-decoration-none navigation-link  text-white-force shadow shadow-lg px-4 bg-hover-light p-2 px-4 text-white-force  shadow shadow-lg'
            onClick={justClose}
          >
            Close
          </button>
          <button
            className='nav-link navigation-link text-white-force p-2 bg-orange bg-hover-light text-white-force shadow shadow-lg px-4 text-decoration-none'
            onClick={handleClose}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Banner;
