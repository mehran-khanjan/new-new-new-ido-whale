import React from 'react';

const CreateLaunchpad = () => {
    return(
        <React.Fragment>
            <section className="section section--first">
                {/*section head*/}
                <div className="section__article-head">
                    <div className="container">
                        <div className="row">
                            {/*breadcrumb*/}
                            <div className="col-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb__item breadcrumb__item--active">Add a game</li>
                                </ul>
                            </div>
                            {/*end breadcrumb*/}

                            {/*section title*/}
                            <div className="col-12">
                                <div className="section__title section__title--left section__title--page">
                                    <h1>Add a new Blockchain Game</h1>
                                </div>
                            </div>
                            {/*end section title*/}
                        </div>
                    </div>

                    {/*bg animation*/}
                    <div id="canvas2" className="section__canvas"></div>
                    {/*end bg animation*/}
                </div>
                {/*end section head*/}

                {/*form*/}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form className="form form--big" action="#">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="name" className="form__label">Name</label>
                                            <input id="name" type="text" name="name" className="form__input"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="teaser" className="form__label">Teaser</label>
                                            <input id="teaser" type="text" name="teaser" className="form__input"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="description" className="form__label">Description</label>
                                            <textarea id="description" name="description"
                                                      className="form__textarea"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="form__group">
                                            <label htmlFor="form__gallery-upload" className="form__label">Main
                                                image</label>
                                            <div className="form__gallery">
                                                <label id="gallery1" htmlFor="form__gallery-upload">Upload cover</label>
                                                <input data-name="#gallery1" id="form__gallery-upload" name="gallery"
                                                       className="form__gallery-upload" type="file"
                                                       accept=".png, .jpg, .jpeg" multiple/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="form__group">
                                            <label htmlFor="trailer" className="form__label">Game video (Youtube
                                                link)</label>
                                            <input id="trailer" type="text" name="trailer"
                                                   className="form__input form__input--link"
                                                   placeholder="https://www.youtube.com/watch?v=xxxxxx"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="form__group">
                                            <label htmlFor="status" className="form__label">Public status</label>
                                            <select id="status" className="form__select" name="status">
                                                <option value="0">Alpha</option>
                                                <option value="1">Beta</option>
                                                <option value="2">Cancelled</option>
                                                <option value="3">Development</option>
                                                <option value="4">Live</option>
                                                <option value="5">Presale</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <span className="form__line"></span>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="form__group">
                                            <label htmlFor="blockchain" className="form__label">Blockchain</label>
                                            <select id="blockchain" className="form__select" name="blockchain"
                                                    multiple="multiple">
                                                <option value="0">Avalanche</option>
                                                <option value="1">Binance Smart Chain</option>
                                                <option value="2">Bitcoin</option>
                                                <option value="3">Cardano</option>
                                                <option value="4">Ethereum</option>
                                                <option value="5">Fantom</option>
                                                <option value="6">Flow</option>
                                                <option value="7">Harmony</option>
                                                <option value="8">Hive</option>
                                                <option value="9">Litecoin</option>
                                                <option value="10">Near</option>
                                                <option value="11">NEO</option>
                                                <option value="12">Polkadot</option>
                                                <option value="13">Polygon</option>
                                                <option value="14">Solana</option>
                                                <option value="15">Waves</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="form__group">
                                            <label htmlFor="devices" className="form__label">Devices</label>
                                            <select id="devices" className="form__select" name="devices"
                                                    multiple="multiple">
                                                <option value="0">All devices</option>
                                                <option value="1">Android</option>
                                                <option value="2">IOS</option>
                                                <option value="3">Linux</option>
                                                <option value="4">MAC</option>
                                                <option value="5">Playstation</option>
                                                <option value="6">Web</option>
                                                <option value="7">Windows</option>
                                                <option value="8">XBOX</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="form__group">
                                            <label htmlFor="ftp" className="form__label">Free to play</label>
                                            <select id="ftp" className="form__select" name="ftp">
                                                <option value="0">Yes</option>
                                                <option value="1">NFT Required</option>
                                                <option value="2">Crypto Required</option>
                                                <option value="3">Game Required</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="form__group">
                                            <label htmlFor="pte" className="form__label">Play to earn</label>
                                            <select id="pte" className="form__select" name="pte">
                                                <option className="form__select__option" value="0">No</option>
                                                <option className="form__select__option" value="1">NFT</option>
                                                <option className="form__select__option" value="2">Crypto</option>
                                                <option className="form__select__option" value="3">NFT & Crypto</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="form__group">
                                            <label htmlFor="genres" className="form__label">Game genres</label>
                                            <select id="genres" className="form__select" name="genres"
                                                    multiple="multiple">
                                                <option value="0">Action</option>
                                                <option value="1">Adventure</option>
                                                <option value="2">Arcade</option>
                                                <option value="3">Art</option>
                                                <option value="4">Battle-Royale</option>
                                                <option value="5">Board</option>
                                                <option value="6">Building</option>
                                                <option value="7">Card</option>
                                                <option value="8">Casual</option>
                                                <option value="9">Collectible</option>
                                                <option value="10">Dungeon</option>
                                                <option value="11">Educational</option>
                                                <option value="12">Escape</option>
                                                <option value="13">eSports</option>
                                                <option value="14">Fantasy</option>
                                                <option value="15">Fighting</option>
                                                <option value="16">Horror</option>
                                                <option value="17">Logic</option>
                                                <option value="18">Mining</option>
                                                <option value="19">MMO</option>
                                                <option value="20">MMORPG</option>
                                                <option value="21">MOBA</option>
                                                <option value="22">Move-To-Earn</option>
                                                <option value="23">Open-World</option>
                                                <option value="24">Platformer</option>
                                                <option value="25">PVP</option>
                                                <option value="26">Racing</option>
                                                <option value="27">RPG</option>
                                                <option value="28">Sci-Fi</option>
                                                <option value="29">Shooter</option>
                                                <option value="30">Simulation</option>
                                                <option value="31">Sports</option>
                                                <option value="32">Strategy</option>
                                                <option value="33">Survival</option>
                                                <option value="34">Tactical</option>
                                                <option value="35">Tower-Defense</option>
                                                <option value="36">Virtual-Reality</option>
                                                <option value="37">Virtual-World</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <span className="form__line"></span>
                                    </div>

                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="website" className="form__label">Website</label>
                                            <input id="website" type="text" name="website"
                                                   className="form__input form__input--link"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="twitter" className="form__label">Twitter</label>
                                            <input id="twitter" type="text" name="twitter"
                                                   className="form__input form__input--link"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="discord" className="form__label">Discord</label>
                                            <input id="discord" type="text" name="discord"
                                                   className="form__input form__input--link"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="telegram" className="form__label">Telegram</label>
                                            <input id="telegram" type="text" name="telegram"
                                                   className="form__input form__input--link"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="youtube" className="form__label">Youtube</label>
                                            <input id="youtube" type="text" name="youtube"
                                                   className="form__input form__input--link"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="facebook" className="form__label">Facebook</label>
                                            <input id="facebook" type="text" name="facebook"
                                                   className="form__input form__input--link"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <span className="form__line"></span>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="yourname" className="form__label">Your name</label>
                                            <input id="yourname" type="text" name="yourname" className="form__input"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="email" className="form__label">Email</label>
                                            <input id="email" type="text" name="email" className="form__input"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="contacts" className="form__label">Your other
                                                contacts</label>
                                            <textarea id="contacts" name="contacts"
                                                      className="form__textarea"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button type="button" className="form__btn form__btn--small">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/*end form*/}
            </section>
        </React.Fragment>
    )
}

export default CreateLaunchpad;