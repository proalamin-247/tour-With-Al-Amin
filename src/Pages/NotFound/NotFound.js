import React from 'react';
import notFOundImg from '../../images/404.webp'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container text-center mt-5'>
            <img className='w-75' src={notFOundImg} alt="" />
        </div>
    );
};

export default NotFound;