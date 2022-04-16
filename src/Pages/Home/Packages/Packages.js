import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('packages.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Current Hot Packages</h2>
            <div className='services-container'>
                {
                    services.map(service => <Package
                        key={service.id}
                        service={service}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;