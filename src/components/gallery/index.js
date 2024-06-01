import React from 'react';
import { Carousel } from 'react-bootstrap';

const categories = [
    'LOAD SHEDDING SOLUTIONS',
    'SEAMLESS HOME AUTOMATION',
    'DESIGN & PLANNING',
    '24/7 EMERGENCY RESPONSE',
    'CERTIFIED ELECTRIC FENCE INSTALLATION',
    'ADVANCED ACCESS CONTROL SYSTEMS',
];

const Gallery = ({ images }) => {
    const categorizedImages = categories.map(category => {
        return {
            category,
            images: images.filter(image => image.category === category)
        };
    });

    return (
        <div>
            {categorizedImages.map((group, index) => (
                <div key={index} className='mt-5'>
                    <h2 className="gallery-category-heading">{group.category}</h2>
                    <Carousel>
                        {group.images.map((image, idx) => (
                            <Carousel.Item key={idx}>
                                <img
                                    className="d-block w-100"
                                    src={image.imageUrl}
                                    alt={group.category}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
