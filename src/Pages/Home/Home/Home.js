import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import SubscribeEmail from '../../SubscribeEmail/SubscribeEmail';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <SubscribeEmail></SubscribeEmail>
            <Footer></Footer>
        </div>
    );
};

export default Home;