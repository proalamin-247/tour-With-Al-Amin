import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer'>
            <div className='d-flex justify-content-around align-items-center p-5'>
                <div>
                    <h6>CONTACT INFORMATION</h6>
                    <p>137/12, B-25, Priangon, Mirpur-1, Dhaka-1216.</p>
                    <p><span className='fw-bold mb-0'>Phone: </span>01887218**</p>
                    <p><span className='fw-bold'>Email: </span>admin@tourwithalamin.com</p>
                </div>
                <div>
                    <h6>LEGAL</h6>
                    <Link to='/terms' className='pe-auto text-white text-decoration-none'>
                        Terms & Conditions
                    </Link>
                </div>
                <div>
                    <h6>SITEMAPS</h6>
                    <Link to='/about' className='pe-auto text-white text-decoration-none'>
                        About Us
                    </Link>
                </div>
            </div>
            <div className='text-center '>
                &copy; {year} <span className='fw-bold'>Tour With Al-Amin</span>. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;