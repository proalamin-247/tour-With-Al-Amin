import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4 className='mt-1'>{name}</h4>
            <p><small>{description}</small></p>
            <p className='price-text'>{price} ৳/per person</p>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Book this service</button>
        </div>
    );
};

export default Service;