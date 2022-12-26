import React from 'react';
import Launchpads from "../../components/User/LaunchpadsList/Launchpads";
import {Helmet} from "react-helmet";

const LaunchpadsList = () => {
    return(
        <React.Fragment>
            <Helmet>
                <title>Launchpads List | IDO Whale</title>
            </Helmet>
            <Launchpads/>
        </React.Fragment>
    )
}

export default LaunchpadsList;