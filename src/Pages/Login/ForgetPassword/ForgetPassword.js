import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const emailRef = useRef('');
    let errorElement;

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    if (error) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message}</p>
        );
    }
    if (sending) {
        return <Loading></Loading>;
    }
    const handaleSubmit = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast.success("password reset link send your email",{
            theme: "colored"
        });
    }

    return (
        <div className='container p-5 w-25 mx-auto mt-5 border rounded'>
            <h2>Forget Password</h2>
            <Form className='mt-3' onSubmit={handaleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {errorElement}
                <Button className='mt-2' variant="primary w-100" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default ForgetPassword;