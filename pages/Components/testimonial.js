import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'




export default function Testimonial() {
    return (
        <div>

            <div classNameName='row'>
                <div classNameName='testimonial3'>
                    <div className="item testimonial2">
                        <div className="card card-shadow border-0 mb-4 ">
                            <div className="card-body">
                                <p className="font-weight-light mb-3 testi-text">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</p>
                                <div className="d-block d-md-flex align-items-center">
                                    <span className="thumb-img-testi"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/1.jpg" alt="wrapkit" className="rounded-circle" /></span>
                                    <div className="ml-3">
                                        <div classNameName='profile-name-sec'>
                                            <h3>John Stone</h3>
                                            <p classNameName=''>CEO, XYZ company</p>
                                        </div>
                                        <div className="font-10">
                                            <a href="" className="text-success"><i className="icon-star"></i></a>
                                            <a href="" className="text-success"><i className="icon-star"></i></a>
                                            <a href="" className="text-success"><i className="icon-star"></i></a>
                                            <a href="" className="text-success"><i className="icon-star"></i></a>
                                            <a href="" className="text-muted"><i className="icon-star"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
