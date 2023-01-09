import Head from 'next/head';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'




export default function Testimonial() {
    return (
        <div>
            <Carousel className='Testimonial-section'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 testimonial-img-sec"
                        src="../../white-bg.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption-sec'>
                        <div className='row'>
                            <div className='col-md-8 offset-md-2'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img className='img-fluid testi-profile' src='../../testimonial.jpg' />
                                    </div>
                                    <div className='col-md-8 testimonial-text'>
                                        <div className='testi-content-sec'>

                                            <div className='quote-top'>
                                                <img className='img-fluid quote-icon-size' src='../../Quotes_icon.svg' />
                                            </div>
                                            <div className='quote-bottom'>
                                                <img className='img-fluid quote-icon-size' src='../../Quotes_icon.svg' />
                                            </div>

                                            <p className='fst-italic'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                            <div className='profile-name-sec'>
                                                <h3>John Stone</h3>
                                                <p className='fst-italic'>CEO, XYZ company</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 testimonial-img-sec"
                        src="../../white-bg.webp"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='caption-sec'>
                        <div className='row'>
                            <div className='col-md-8 offset-md-2'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img className='img-fluid testi-profile' src='../../testimonial.jpg' />
                                    </div>
                                    <div className='col-md-8 testimonial-text'>
                                        <div className='testi-content-sec'>

                                            <div className='quote-top'>
                                                <img className='img-fluid quote-icon-size' src='../../Quotes_icon.svg' />
                                            </div>
                                            <div className='quote-bottom'>
                                                <img className='img-fluid quote-icon-size' src='../../Quotes_icon.svg' />
                                            </div>

                                            <p className='fst-italic'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                            <div className='profile-name-sec'>
                                                <h3>John Stone</h3>
                                                <p className='fst-italic'>CEO, XYZ company</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 testimonial-img-sec"
                        src="../../white-bg.webp"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='caption-sec'>
                        <div className='row'>
                            <div className='col-md-8 offset-md-2'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img className='img-fluid testi-profile' src='../../testimonial.jpg' />
                                    </div>
                                    <div className='col-md-8 testimonial-text'>
                                        <div className='testi-content-sec'>

                                            <div className='quote-top'>
                                                <img className='img-fluid quote-icon-size' src='../../Quotes_icon.svg' />
                                            </div>
                                            <div className='quote-bottom'>
                                                <img className='img-fluid quote-icon-size' src='../../Quotes_icon.svg' />
                                            </div>

                                            <p className='fst-italic'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                            <div className='profile-name-sec'>
                                                <h3>John Stone</h3>
                                                <p className='fst-italic'>CEO, XYZ company</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    )
}
