import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ImageUploader } from '../image-uploader'; // Create this component separately
import axios from 'axios';

const TestimonialForm = () => {
  const [testimonialData, setTestimonialData] = useState({
    name: '',
    surname: '',
    cellphone: '',
    email: '',
    comment: '',
    role: '',
    company: '',
    image: null,
  });

  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    // Basic email validation using regular expression
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateCellphone = (cellphone) => {
    // Validate South African cellphone number format (10 digits starting with 0)
    return /^0[0-9]{9}$/.test(cellphone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonialData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(testimonialData.email)) {
      setError('Please enter a valid email address.');
      setShowAlert(true);
      setIsLoading(false);
      return;
    } else if (!validateCellphone(testimonialData.cellphone)) {
      setError(
        'Please enter a valid South African cellphone number (10 digits starting with 0).'
      );
      setShowAlert(true);
      setIsLoading(false);
      return;
    } else {
      setError(null);
      setShowAlert(false);
    }

    //console.log(testimonialData);
    axios
      .post('/api/testimonials/add', testimonialData)
      .then((response) => {
        //console.log(response.data);
        setShowThankYou(true);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error submitting testimonial:', error);
        setError(
          'An error occurred while submitting your testimonial. Please check your internet connection and try again.'
        );
        setShowAlert(true);
        setIsLoading(false);
      });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className='bg-oldface text-dark-grey-500   fs-6'
    >
      <p className=' py-6 px-4 text-center pt-4 pb-4 fs-2 text-orange funky-text fw-bold '>
        Let us know how we did
        <br />
        and how we can continue to improve!
      </p>
      <div className='py-6 px-4 '>
        <div className='row '>
          <div className='col-md-6'>
            <Form.Group controlId='name'>
              <Form.Label className='text-dark-grey-500'>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={testimonialData.name}
                onChange={handleChange}
                required
                className='text-grey  shadow-sm rounded-0 fw-light'
                placeholder='First Name'
              />
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group controlId='surname'>
              <Form.Label className='text-dark-grey-500'>Surname</Form.Label>
              <Form.Control
                type='text'
                name='surname'
                value={testimonialData.surname}
                onChange={handleChange}
                required
                className='text-grey  shadow-sm rounded-0 fw-light'
                placeholder='Last Name'
              />
            </Form.Group>
          </div>
        </div>
        <div className='row pt-2'>
          <div className='col-md-6'>
            <Form.Group controlId='name'>
              <Form.Label className='text-dark-grey-500'>Role</Form.Label>
              <Form.Control
                type='text'
                name='role'
                value={testimonialData.role}
                onChange={handleChange}
                required
                className='text-grey  shadow-sm rounded-0 fw-light'
                placeholder='e.g. CEO, Manager, etc.'
              />
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group controlId='surname'>
              <Form.Label className='text-dark-grey-500'>Company</Form.Label>
              <Form.Control
                type='text'
                name='company'
                value={testimonialData.company}
                onChange={handleChange}
                required
                className='text-grey  shadow-sm rounded-0 fw-light'
                placeholder='Company Name'
              />
            </Form.Group>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <Form.Group controlId='cellphone' className='my-2'>
              <Form.Label className='text-dark-grey-500'>
                Cellphone Number
              </Form.Label>
              <Form.Control
                type='tel'
                name='cellphone'
                value={testimonialData.cellphone}
                onChange={handleChange}
                required
                className='text-grey  shadow-sm rounded-0 fw-light'
                placeholder='e.g. 0821234567'
              />
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group controlId='email' className='my-2'>
              <Form.Label className='text-dark-grey-500'>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={testimonialData.email}
                onChange={handleChange}
                required
                className='text-grey  shadow-sm rounded-0 fw-light'
                placeholder='e.g. email@example.com'
              />
            </Form.Group>
          </div>
        </div>

        <Form.Group controlId='comment' className='my-2'>
          <Form.Label className='text-dark-grey-500'>Comment</Form.Label>
          <Form.Control
            as='textarea'
            rows={6}
            name='comment'
            value={testimonialData.comment}
            onChange={handleChange}
            required
            className='text-grey  shadow-sm rounded-0 fw-light'
          />
        </Form.Group>
        <ImageUploader setTestimonialData={setTestimonialData} />
        <div className='my-2 '>
          {showAlert && error && (
            <Alert
              variant='danger'
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <small className='fs-6'>{error}</small>
            </Alert>
          )}
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Button
              variant='dark'
              type='submit'
              className='btn bg-hover-light  bg-orange rounded-0  px-4 py-2 me-2  border-0 shadow-sm'
              disabled={isLoading || showThankYou}
            >
              Submit
            </Button>
          </div>
          <div className='col-md-6 my-4 d-flex flex-row justify-content-end'>
            {isLoading && (
              <button
                class='btn text-dark-grey-500  bg-orange rounded-0 px-4 py-2 me-2  border-0 shadow-sm'
                type='button'
                disabled
              >
                <span
                  class='spinner-border spinner-border-sm pr-4'
                  role='status'
                  aria-hidden='true'
                ></span>{' '}
                Submiting...
              </button>
            )}
          </div>
        </div>
      </div>
      {showThankYou && (
        <Alert variant='warning' className='mx-4 text-center'>
          <small className='fs-6'>
            Thank you for your feedback! We will review your testimonial and
            publish it shortly.
          </small>
        </Alert>
      )}
      <br />
    </Form>
  );
};

export default TestimonialForm;
