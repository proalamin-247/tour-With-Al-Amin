import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TiArrowRightThick } from "react-icons/ti";
import { GrPaypal } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const [agree, setAgree] = useState(false);

    const handaleSubmit = (event) => {
        event.preventDefault();
        // document.getElementById('email').value = ' ';
        toast("Wow so easy !");
        document.getElementById('inputName').value = ' ';
        document.getElementById('number1').value = ' ';
        document.getElementById('number2').value = ' ';
        document.getElementById('address').value = ' ';
        document.getElementById('inputCity').value = ' ';
        document.getElementById('inputState').value = ' ';
        document.getElementById('inputZip').value = ' ';
        document.getElementById('flexCheckDefault').checked = false;;
    }
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Please Confirm your Booking!</h2>
            <form onSubmit={handaleSubmit} className="row g-3">
               <div>
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder='Enter your full name' required/>
                    </div>
               </div>
                    <div className="col-md-6">
                        <label htmlFor="inputtext4" className="form-label">Primary Phone Number</label>
                    <input type="text" className="form-control" id="number1" placeholder='Enter Your Valid Phone Number' required/>
                    </div>
                <div className="col-md-6">
                    <label htmlFor="inputtext4" className="form-label">Secondary Phone Number</label>
                    <input type="text" className="form-control" id="number2" placeholder='Enter Your Valid Phone Number' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Full Address</label>
                    <textarea className="form-control" id="address" rows="3" required></textarea>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <input type="text" className="form-control" id="inputState" required/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" required/>
                </div>
                <div className="form-check">
                    <input onClick={() => setAgree(!agree)} className="form-check-input" name='terms' type="checkbox" value="" id="flexCheckDefault" />
                    <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="flexCheckDefault">
                        Tour With Al-Amin <Link to='/termsAndConditions' className='pe-auto text-decoration-none'>
                            Terms and Conditions
                        </Link>
                    </label>
                </div>
                <Button variant="primary" disabled={!agree} className='btn bg-primary text-white mt-2 w-100' type="submit">
                    Booking Confirm <TiArrowRightThick /> Pay Now ( <GrPaypal /> / <MdPayment/>)
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;