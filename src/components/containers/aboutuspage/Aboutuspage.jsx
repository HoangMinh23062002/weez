import React from 'react';
import "../../../styles/components/__index.css";


import { Ellipse31, Ellipse31a, Ellipse31b, Rectangle45 } from "../../../assets/index";


const AboutUsPage = () => {
    return (
        <div className='container-fluid'>

            <div className='about-parking'>
                <div className="mess-content">
                    <h4><b>About EZParking</b></h4>
                    <hr color="black" width="100px" size="8px" align="left"/>
                    <p>Founded in 2023, EZParking has been making <br/>
                        it easier for drivers to find, book and pay for parking.<br/>
                        Help space owners earning passive incomes with their unused spaces.<br/>
                        Read on to find out how we became the Vietnam’s favourite parking app.</p>
                </div>
            </div>

            <div className="parking-work">
                <div>
                    <h4><b>How EZParking Works</b></h4>
                    <div className="row parking">
                        <div className="col-sm">
                            <img src={Ellipse31}/><br/><br/>
                            <h5><b>Looking</b></h5>
                            <p>Search and compare prices at thousands of parking facilities across VietNam</p>
                        </div>
                        <div className="col-sm">
                            <img src={Ellipse31a}/><br/><br/>
                            <h5><b>Booking</b></h5>
                            <p>Pay securely and receive a QR code to scan with the space owner</p>
                        </div>
                        <div className="col-sm">
                            <img src={Ellipse31b}/><br/><br/>
                            <h5><b>Parking</b></h5>
                            <p>When you arrive, follow the instructions included in your pass, park, and go!</p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="intro-messages">
                <div className="row messages-welcome">
                    <div className="col-sm">
                        <div className="content">
                            <h4><b>Welcome all of drivers to EZParking!</b></h4>
                            <p>Rover and Parking Panda are now part of the EZParking family! We’re excited to grow in
                                Vietnam by more than doubling our parking inventory and gaining a new team in Da
                                Nang.</p>
                            <br/>
                            <button className="learn-more-btn">Learn more</button>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img className='img-background' src={Rectangle45}></img>
                    </div>

                </div>
            </div>
            <div className="welcome-messages">
            </div>

        </div>
    );
}

export default AboutUsPage