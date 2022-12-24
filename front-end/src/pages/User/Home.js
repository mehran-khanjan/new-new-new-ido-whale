import React from 'react';
import Hero from "../../components/User/Home/Hero";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>
                    Decentralized launchpad protocol to launch crypto projects | IDO Whale
                </title>
            </Helmet>
            <Hero/>
        </React.Fragment>
    )
}

export default Home;