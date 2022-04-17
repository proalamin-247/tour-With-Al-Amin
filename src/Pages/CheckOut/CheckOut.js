import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TiArrowRightThick } from "react-icons/ti";
import { GrPaypal } from "react-icons/gr";
import { MdPayment } from "react-icons/md";

const CheckOut = () => {
    const [agree, setAgree] = useState(false);
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Please Confirm your Booking!</h2>
            <form className="row g-3">
               <div>
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="inputname" placeholder='Enter your full name' />
                    </div>
               </div>
                    <div className="col-md-6">
                        <label htmlFor="inputtext4" className="form-label">Primary Phone Number</label>
                        <input type="text" className="form-control" id="inputtext4" placeholder='Enter Your Valid Phone Number'/>
                    </div>
                <div className="col-md-6">
                    <label htmlFor="inputtext4" className="form-label">Secondary Phone Number</label>
                    <input type="text" className="form-control" id="inputtext4" placeholder='Enter Your Valid Phone Number' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Full Address</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
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
        </div>
    );
};

export default CheckOut;