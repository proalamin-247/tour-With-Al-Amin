import React, { useRef } from 'react';

const ForgetPassword = () => {
    const emailRef = useRef('');
    let errorElement;

    const handaleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        
        console.log(email);
    }

    return (
        <div className='container p-5 w-25 mx-auto mt-5 border rounded'>
            <h2>Forget Password</h2>
            <form onSubmit={handaleSubmit} className='mt-2'>
                <div className="mb-3">
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    <div id="emailHelp" className="form-text">type your account email, which you use create tyour account</div>
                </div>
                {errorElement}
                <button onClick={resetPassword} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ForgetPassword;