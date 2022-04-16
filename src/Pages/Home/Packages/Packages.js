import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setpackages] = useState([]);
    useEffect(() => {
        fetch('packages.json')
            .then(res => res.json())
            .then(data => setpackages(data));
    }, [])

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Current Hot Packages</h2>
            <div className='packages-container'>
                {
                    packages.map(allPackage => <Package
                        key={allPackage.id}
                        allPackage={allPackage}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;