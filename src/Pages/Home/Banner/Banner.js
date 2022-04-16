import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/img1.jpg';
import banner2 from '../../../images/banner/img2.jpg';
import banner3 from '../../../images/banner/img3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='container mt-4 '>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='rounded'>
                    <img
                        className="d-block w-100 rounded"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Sylhet Premium Trip</h3>
                        <p>It is a 2 days 3 Nights Sylhet Premium Trip</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>St. Martin Economy trip 2D+3N</h3>
                        <p>It is a St. Martin Economy Package for students specially</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Sajek Premium Trip</h3>
                        <p>
                            It is a 2 days 3 Nights Sajek Premium Trip.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;