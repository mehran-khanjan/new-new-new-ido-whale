import React, {useState} from 'react';
import {Outlet, NavLink} from 'react-router-dom';
import Footer from "./Footer";
import Wallet from "./Wallet";

const Header = () => {
    const [headerClasses, setHeaderClasses] = useState('header__nav');

    const onMenuClick = (e) => {
        e.preventDefault();

        if (headerClasses === 'header__nav') {
            setHeaderClasses('header__nav header__nav--active');
        } else if(headerClasses === 'header__nav header__nav--active') {
            setHeaderClasses('header__nav');
        }
    }
    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                {/*btn*/}
                                <button className="header__btn" type="button" aria-label="header__nav" onClick={onMenuClick}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                {/*end btn*/}

                                {/*logo*/}
                                <a href="index.html" className="header__logo">
                                    {/*<img src="img/logo.svg" alt=""/>*/}
                                </a>
                                {/*end logo*/}

                                {/*tagline*/}
                                <span className="header__tagline">Play to earn <br/></span>
                                {/*end tagline*/}

                                {/*navigation*/}
                                <ul className={headerClasses} id="header__nav">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/launchpads">Explore</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/launchpads/create">Create</NavLink>
                                    </li>
                                </ul>
                                {/*end navigation*/}

                                <Wallet/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}

export default Header;