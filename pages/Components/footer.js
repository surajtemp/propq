import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'




export default function Testimonial() {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-sm-3 onlydesk m-t-30">
                        <h3 className="foothead ">
                            <img src="../logo-01.svg" alt="Tijori" height="80" className="footerlogo" />
                        </h3>
                        <div className="footer-detail">
                        </div>
                        <div className="breaklarge"></div>
                    </div>
                    <div className="col-sm-3 m-t-30">
                        <h3 className="foothead">
                            Company
                        </h3>
                        <div classNameName='footer-menu-lists'>
                            <a className=" footer-detail" href="#calBackForm" id="" rel="modal:open">Faqs</a>
                            <a className=" footer-detail" href="#calBackForm" id="" rel="modal:open">Contact</a>                            
                        </div>

                        <div className="breaklarge"></div>
                    </div>
                    <div className="col-sm-3 m-t-30">
                        <h3 className="foothead">
                            Policies
                        </h3>
                        <div classNameName='footer-menu-lists'>
                            <a className=" footer-detail footercats" target="self" href="/policy">Privacy Policy</a>
                            <a className=" footer-detail footercats" target="self" href="/termsOFUse">Terms of Use</a>                            
                        </div>
                        <div className="breaklarge"></div>
                    </div>
                    <div className="col-sm-3 m-t-30">
                        <h3 className="foothead">
                            Connect with us
                        </h3>
                        <a className="social " target="_blank" href="#"><img src='../facebook.svg'/></a>
                        <a className="social" target="_blank" href="#"><img src='../instagram.svg'/></a>
                        <a className="social" target="_blank" href="#"><img src='../twitter.svg'/></a>
                        <a className="social" target="_blank" href="#"><img src='../LinkedIn.svg'/></a>
                    </div>
                </div>
            </Container>


        </div>
    )
}
