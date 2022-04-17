import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className="bg-primary w-25"></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className="bg-primary w-25"></div>
            </div>
            <div>
                <button  className='btn btn-white w-75 border border-info d-block mx-auto'>
                    <span><FcGoogle /></span> <span className='px-1 mt-2'>Continue with  Google </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;