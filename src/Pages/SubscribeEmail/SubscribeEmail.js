import React, { useRef } from 'react';
import './SubscribeEmail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form } from 'react-bootstrap';

const SubscribeEmail = () => {
    // const emailRef = useRef('');
    const tost = () => {
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Subscribe is pending',
            }
        )

        const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            functionThatReturnPromise,
            {
                success: 'Successfull Subscribe, Thanks',
            }
        )
    }

    const handaleSubmit = (event) => {
        event.preventDefault();
        document.getElementById('email').value = ' ';
        tost();
    }

    return (
        <section className="container my-5 subscribeEmailArea" id="subscribe">
            <div className="d-flex justify-content-center align-items-center p-5"
                id="subscribe">
                <div>
                    <h1 className="text-dark">Get the best holiday plan by <span className='text-primary'>expert</span></h1>
                    <p className="text-dark">Get updates on offers, specials and more</p>
                    <Form className='mt-3' onSubmit={handaleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" id='email' required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button className='mt-2' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
};

export default SubscribeEmail;