import React from 'react';

const Hero = () => {
    return(
        <React.Fragment>
            <section className="hero" id="hero">
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-12">
                            {/*hero content (left)*/}
                            <div className="hero__content hero__content--left">
                                <span className="hero__tagline">IDO Whale </span>
                                <h2 className="hero__title">Play to Earn <br/>Ecosystem</h2>
                                <p className="hero__text">Metaverse Aggregator & Web 3.0 Launchpad</p>
                                <div className="hero__btns hero__btns--left">
                                    <a href="aggregator.html" className="hero__btn"><span>Explore</span></a>
                                    <a href="add.html" className="hero__btn hero__btn--nephrite"><span>Apply</span></a>
                                </div>

                                {/*bg animation*/}
                                <div id="canvas" className="hero__canvas"></div>
                                {/*end bg animation*/}

                                {/*game*/}
                                <div className="game game--hero" style={{backgroundColor: '#2a3755'}}>
                                    <div className="game__head">
                                        <div className="game__cover">
                                            <img src="img/games/3.png" alt=""/>
                                        </div>

                                        <div className="game__title">
                                            <h3 className="game__name">
                                                <a href="game.html">Realms Of Ethernity</a>
                                            </h3>
                                            <span className="game__blockchain">
										Blockchains
										<img src="img/blockchain/3.png" alt=""/>
										<img src="img/blockchain/5.png" alt=""/>
									</span>
                                        </div>
                                    </div>

                                    <p className="game__description">If you are going to use a passage of Lorem Ipsum,
                                        you need to be sure there isn't anything embarrassing hidden in the middle of
                                        text.</p>

                                    <ul className="game__list">
                                        <li>
                                            Devices <span>Web, Android, IOS</span>
                                        </li>
                                        <li>
                                            Free to play <span className="required">NFT Required</span>
                                        </li>
                                        <li>
                                            Play to earn <span className="required">Crypto</span>
                                        </li>
                                        <li>
                                            Status <span className="process">Presale</span>
                                        </li>
                                    </ul>

                                    <a href="game.html" className="game__more">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                                        </svg>
                                    </a>
                                </div>
                                {/*end game*/}
                            </div>
                            {/*end hero content*/}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Hero;