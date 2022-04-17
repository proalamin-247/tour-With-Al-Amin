import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='qna-area'>
            <div className='qus-1'>
                <h4>Difference between authentication and authorization?</h4>
                <div className='d-flex mt-3'>
                    <div className='me-5'>
                        <h5>Authentication</h5>
                        <p>Authentication confirms your identity to grant access to the system.</p>
                        <p>It is the process of validating user credentials to gain user access.</p>
                        <p>It determines whether user is what he claims to be.</p>
                        <p>Authentication usually requires a username and a password.</p>
                        <p>Authentication is the first step of authorization so always comes first.</p>
                    </div>
                    <div className='ms-5'>
                        <h5>Authorization</h5>
                        <p>Authorization determines whether you are authorized to access the resources.</p>
                        <p>It is the process of verifying whether access is allowed or not.</p>
                        <p>It determines what user can and cannot access.</p>
                        <p>Authentication factors required for authorization may vary, depending on the security level.</p>
                        <p>Authorization is done after successful authentication.</p>
                    </div>
                </div>
            </div>
            <div className="qus-1">
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase manages all data real-time in the database.Give users a quick, intuitive sign-in process with Firebase Authentication. Allow users to sign in to your app with their Facebook, Twitter, Google or GitHub account with less than 5 minutes of work.</p>
                <h5>TOP ALTERNATIVES TO FIREBASE AUTHENTICATION</h5>
                <li>Auth0</li>
                <li>MongoDB</li>
                <li>Passport</li>
                <li>Okta</li>
                <li>JSON Web Token</li>
                <li>Amazon Cognito</li>
                <p>and have much more</p>
            </div>
            <div className="qus-1">
                <h4>What other services does firebase provide other than authentication</h4>
                <p>Firebase is originally developed by Firebase inc and later acquired by Google. It provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business</p>
                <h5>There are many services which Firebase provides, Most useful of them are:</h5>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions</li>
                <li>Cloud Messaging</li>
                <li>Dynamic Links</li>
                <li>Remote Config</li>
                <li>Cloud Firestore</li>
                <p>and have much more</p>
            </div>
        </div>
    );
};

export default Blogs;