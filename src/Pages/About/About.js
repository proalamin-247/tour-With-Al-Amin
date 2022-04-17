import React from 'react';
import me from '../../images/me.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container mt-5 ok'>
            <h1 className='text-center'>About</h1>
            <div className='about-area p-2'>
                <div className='me mt-3'>
                    <img src={me} alt="" />
                    <h3>Md Al Amin</h3><h6>Founder, Tour With Al Amin</h6>
                </div>
                <div className='mt-3'>
                    <p className='mt-3 mb-2'>Tour With Al-Amin was founded by Md Al Amin who shared her dream and vision to create a platform that will serve the purpose of Bangladeshi travel lovers.</p>
                    <p className='mt-0'>Tour With Al-Amin is the country’s first and leading online travel booking platform. Initially started with the dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy-to-use website, travel services are on your palm. The dynamic website lets you book your resort, find your perfect holiday destination from our holiday packages around Bangladesh.</p>
                </div>
            </div>
        </div>
    );
};

export default About;