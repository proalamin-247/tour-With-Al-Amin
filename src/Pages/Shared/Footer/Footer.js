// import React from 'react';

export default function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5 mb-2'>
            &copy; {year} Tour With Al-Amin. All rights reserved.
        </div>
    );
}