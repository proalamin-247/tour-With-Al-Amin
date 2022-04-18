import React from 'react';
import './SubscribeEmail.css'

const SubscribeEmail = () => {
    const subscribeBtn=()=>{
        
    }
    return (
        <section className="container my-5 subscribeEmailArea" id="subscribe">
            <div className="d-flex justify-content-center align-items-center p-5"
                id="subscribe">
                <div>
                    <h1 className="text-dark">Get the best holiday plan by <span className='text-primary'>expert</span></h1>
                    <p className="text-dark">Get updates on offers, specials and more</p>
                    <input className="form-control" type="email" name="" id="" placeholder="Your email" />
                    <p><small>We care about the protection of your data. </small></p>
                    <button onClick={subscribeBtn} className="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default SubscribeEmail;