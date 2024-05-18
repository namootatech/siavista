import React from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const ImageUploader = ({ setTestimonialData }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleFileChange = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];

    // Upload image to Cloudinary
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'objss5xh'); // Replace with your Cloudinary upload preset
      formData.append('asset_folder', 'siavista'); // Optional (folder name in Cloudinary

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/namoota/image/upload',
        formData
      );

      const imageUrl = response.data.secure_url;
      setTestimonialData((prevData) => ({
        ...prevData,
        image: imageUrl,
      }));
      setIsLoading(false);
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  return (
    <Form.Group controlId='image' className='py-2'>
      <Form.Label className='text-dark-grey-500 fs-5'>Upload Image</Form.Label>
      <Form.Control
        type='file'
        onChange={handleFileChange}
        accept='image/*'
        className='text-muted border-0 shadow-sm rounded-0'
      />
      {isLoading && (
        <button
          class='btn text-light border border-secondary '
          type='button'
          disabled
        >
          <span
            class='spinner-border spinner-border-sm pr-4'
            role='status'
            aria-hidden='true'
          ></span>{' '}
          Uploading...
        </button>
      )}
    </Form.Group>
  );
};

export { ImageUploader };
