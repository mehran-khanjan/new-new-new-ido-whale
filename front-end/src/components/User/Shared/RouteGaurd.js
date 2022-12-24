import React from 'react';
import {Navigate} from 'react-router-dom';
import Header from '../../User/Shared/Header';
import {isUserLogin} from "../../../utils/localStorageActions";

const RouteGuard = () => {
    return (
        (isUserLogin()) ? <Header/> : <Navigate to="/connect-wallet"/>
    )
};

export default RouteGuard;