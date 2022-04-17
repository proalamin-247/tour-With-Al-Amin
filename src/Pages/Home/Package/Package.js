import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package.css'

const Package = ({ allPackage }) => {
    const { id, name, img, description, price } = allPackage;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}/checkout`)
    }
    return (
        <div className='package'>
            <img src={img} alt="" />
            <h4 className='mt-1'>{name}</h4>
            <p><small>{description}</small></p>
            <p className='price-text'>{price} TK/per person</p>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Book this Trip</button>
        </div>
    );
};

export default Package;