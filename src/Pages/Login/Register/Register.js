import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;

    if (error) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message}</p>
        );
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home');
    }

    const handaleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

    }
    return (
        <div className='container w-25 mx-auto mt-5'>
            <h2 className='text-primary text-center'>Please Register...</h2>
            <Form onSubmit={handaleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Full name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <div className="form-check">
                    <input onClick={() => setAgree(!agree)} className="form-check-input" name='terms' type="checkbox" value="" id="flexCheckDefault" />
                    <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="flexCheckDefault">
                        Tour With Al-Amin <Link to='/terms' className='pe-auto text-decoration-none'>
                            Terms and Conditions
                        </Link>
                    </label>
                </div>
                <Button variant="primary" disabled={!agree} className='btn bg-primary text-white mt-2 w-100' type="submit">
                    Register
                </Button>
                <p className='mt-2'>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none'>Please Login</Link></p>
            </Form>
            {errorElement}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;