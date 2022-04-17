import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handaleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

    }
    const navigateRagister = event => {
        navigate('/register')
    }
    return (
        <div className='container w-25 mx-auto mt-5'>
            <h2 className='text-primary text-center'>Please Login...</h2>
            <Form onSubmit={handaleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Link to='/forgetpassword' className='text-primary pe-auto text-decoration-none'>Forget Password</Link>
                <Button variant="primary w-100 mt-3" type="submit">
                    Login
                </Button>
                <p className='mt-2'>Have not account? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRagister}>Please Register</Link></p>
            </Form>
        </div>
    );
};

export default Login;