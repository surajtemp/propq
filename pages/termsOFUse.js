import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Footer from './Components/footer';
import Header from './Components/header';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function Faq() {
    return (
        <div >
            <Header />
            <main className="container-fluid faq-section">
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <div className='Why-propq-header m-b-25'>
                            <h1>Terms & Conditions</h1>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </div>
                        <div className=''>
                            <section class="full-bleed">                           
                                <h3 id="1">General</h3>
                                <p>By using our website, you agree to the Terms of Use. We may change or update these terms so please check this page regularly. We do not represent or warrant that the information on our web site is accurate, complete, or current. This includes pricing and availability information. We reserve the right to correct any errors or omissions, and to change or update information at any time without giving prior notice.</p>
                                <hr></hr>                             
                                <h3 id="1">Correction of Errors and Inaccuracies</h3>
                                <p>The information on the site may contain typographical errors or inaccuracies and may not be complete or current. The Main Label therefore reserves the right to correct any errors, inaccuracies or omissions and to change or update information at any time with or without prior notice (including after you have submitted your order). Please note that such errors, inaccuracies or omissions may relate to product description, pricing, product availability, or otherwise.
                                </p>
                                <hr></hr>              
                                <h3 id="1">Correction of Errors and Inaccuracies</h3>
                                <p>By using our website, you agree to the Terms of Use. We may change or update these terms so please check this page regularly. We do not represent or warrant that the information on our web site is accurate, complete, or current. This includes pricing and availability information. We reserve the right to correct any errors or omissions, and to change or update information at any time without giving prior notice.</p>
                                <hr></hr>
                                <h5>Correction of Errors and Inaccuracies
                                </h5>
                                <p>The information on the site may contain typographical errors or inaccuracies and may not be complete or current. The Main Label therefore reserves the right to correct any errors, inaccuracies or omissions and to change or update information at any time with or without prior notice (including after you have submitted your order). Please note that such errors, inaccuracies or omissions may relate to product description, pricing, product availability, or otherwise.
                                </p>
                            </section>

                        </div>
                    </div>
                </div>

                <hr className="seperator" />

                <Container className='footer-section'>
                    <Footer />
                </Container>
            </main>
        </div>
    )
}