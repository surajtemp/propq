import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'






export default function TopLocalities() {
    return (
        <div>



            <div className='locality-card-new p-3rounded'>
                <div className='Location-title'>
                    <h6>Kollur</h6>
                    <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                </div>
                <div className='location-status'>
                    <p className='dropicon'>-6.82 </p>
                </div>
            </div>



            {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">

                    <Tab eventKey="profile" title="Profile">
                        <div className='localities-list-section'>
                            <div className='locality-cards-sec'>
                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>


                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>

                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>
                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>
                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>
                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>
                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="home" title="Home">
                        <div className='localities-list-section'>
                            <div className='locality-cards-sec'>
                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>


                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>

                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>
                                <div className='locality-card shadow-sm p-3 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </Tab>

                    <Tab eventKey="contact" title="Contact" >
                        <div className='localities-list-section'>
                            <div className='locality-cards-sec'>
                                <div className='locality-card shadow-sm p-3 mb-5 bg-white rounded'>
                                    <div className='Location-title'>
                                        <h6>Kollur</h6>
                                        <h6 className='f-w-700'>₹3.2 K/sq.ft</h6>
                                    </div>
                                    <div className='location-status'>
                                        <p>-6.82 <span className="glyphicon glyphicon-plus"></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs> */}












        </div>
    )
}
