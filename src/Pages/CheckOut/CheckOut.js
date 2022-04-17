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
            <form class="row g-3">
               <div>
                    <div class="col-md-6">
                        <label for="inputName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="inputname" placeholder='Enter your full name' />
                    </div>
               </div>
                    <div class="col-md-6">
                        <label for="inputtext4" class="form-label">Primary Phone Number</label>
                        <input type="text" class="form-control" id="inputtext4" placeholder='Enter Your Valid Phone Number'/>
                    </div>
                <div class="col-md-6">
                    <label for="inputtext4" class="form-label">Secondary Phone Number</label>
                    <input type="text" class="form-control" id="inputtext4" placeholder='Enter Your Valid Phone Number' />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Full Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="form-check">
                    <input onClick={() => setAgree(!agree)} class="form-check-input" name='terms' type="checkbox" value="" id="flexCheckDefault" />
                    <label className={agree ? 'text-primary' : 'text-danger'} for="flexCheckDefault">
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