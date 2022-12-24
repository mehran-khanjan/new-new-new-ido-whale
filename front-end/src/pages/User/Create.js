import React from 'react';
import {Helmet} from "react-helmet";
import CreateLaunchpad from "../../components/User/Create/CreateLaunchpad";

const Create = () => {
    return(
        <React.Fragment>
            <Helmet>
                <title>
                    Create a launchpad | IDO Whale
                </title>
            </Helmet>

            <CreateLaunchpad/>

        </React.Fragment>
    )
}

export default Create;