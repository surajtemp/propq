import Head from "next/head";
import Image from "next/image";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useEffect, useContext } from "react";
import SearchAuto from "./Components/SearchAuto";
import Testimonial from "./Components/testimonial";
import TopLocalities from "./Components/topLocalities";
import Footer from "./Components/footer";
import Header from "./Components/header";
import CarousalSection from "./Components/carousalSection";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { DataContext } from "../context";

function initializeFirebase() {
  //initialize firebase
  const app = initializeApp({
    apiKey: "AIzaSyAgdnB53tN2vJpoK4WTwW3XRbplVVkSI10",

    authDomain: "propq-6a07f.firebaseapp.com",

    projectId: "propq-6a07f",

    storageBucket: "propq-6a07f.appspot.com",

    messagingSenderId: "341659201407",

    appId: "1:341659201407:web:a6d32dc53151830198b44a",

    measurementId: "G-QWXHSB0635",
  });
  const analytics = getAnalytics(app);
  console.log(analytics);
}

export default function Home() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  const value = useContext(DataContext);
  console.log(value);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container-fluid ">
        <Header />

        <div className="home-banner">
          <div className="col-md-6 offset-md-3">
            <div className="header-search d-flex align-items-center justify-content-center">
              <div>
                <div className="Search-Heading">
                  <h1>
                    Make smart <span>real estate</span> decisions
                  </h1>
                </div>
                <div className="search-text">
                  <p>
                    Deep-dive market analysis on a property with actual
                    transaction data
                  </p>
                </div>
                <div className="search-form">
                  <SearchAuto />
                </div>
              </div>
            </div>
          </div>
          {/* <div className='backimage'></div> */}
          <hr></hr>
        </div>

        <Container className="Why-propq-section">
          <div className="row Why-propq-header">
            <div className="col-md-6 offset-md-3">
              <h1>Why PropQ?</h1>
              {/* <h1>Why PROP<span className='strokeme'>Q</span>?</h1> */}
              <p>
                PROPQ helps you to stay ahead of the crowd using advanced
                learning models built on actual transactions data
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="Why-prop-feature-icon">
                <img
                  src="/buyer.svg"
                  width="auto"
                  height="48"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                <h4>For Buyers </h4>
                <p>
                  With Institutional grade data within a click, you invest more
                  wisely!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Why-prop-feature-icon">
                <img
                  src="/seller.svg"
                  width="auto"
                  height="48"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                <h4>For Sellers</h4>
                <p>
                  Analyze the market trend to sell faster at a smarter price
                  point!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Why-prop-feature-icon">
                <img
                  src="/agent.svg"
                  width="auto"
                  height="48"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                <h4>For Agents/Intermediaries</h4>
                <p>
                  Offer your customers up-to-date information on market trends
                  and price trends with PROPQ's advanced data driven analytics.
                </p>
              </div>
            </div>
          </div>
        </Container>

        <div className="testimonial-section1">
          <div className="testimonial-header">
            <h1>Testimonials.</h1>
            <p>See what people are saying.</p>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="row">
                <div className="col-md-4">
                  <Testimonial />
                </div>
                <div className="col-md-4">
                  <Testimonial />
                </div>
                <div className="col-md-4">
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container className="Top-Localities-sec">
          <div className="Why-propq-header">
            <h1>Top Localities</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="top-localities-list">
            <div className="row">
              <div className="col-md-3">
                <TopLocalities />
              </div>
              <div className="col-md-3">
                <TopLocalities />
              </div>
              <div className="col-md-3">
                <TopLocalities />
              </div>
              <div className="col-md-3">
                <TopLocalities />
              </div>
              <div className="col-md-3">
                <TopLocalities />
              </div>
              <div className="col-md-3">
                <TopLocalities />
              </div>
              <div className="col-md-3">
                <TopLocalities />
              </div>
              <div className="col-md-3">
                <TopLocalities />
              </div>
            </div>
          </div>
        </Container>

        <hr></hr>

        <Container className="Top-Localities-sec">
          <div className="Why-propq-header">
            <h1>Carousal Section</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="top-localities-list">
            <CarousalSection />
          </div>
        </Container>

        <hr className="seperator" />

        <Container className="footer-section">
          <Footer />
        </Container>
      </main>
    </div>
  );
}