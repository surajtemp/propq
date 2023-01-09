import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Accordion from "react-bootstrap/Accordion";
import Footer from "./Components/footer";
import Header from "./Components/header";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import Link from "next/link";
import firebase from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { login } from "../server";
import loader from "../public/loader.svg"
import Image from "next/image";


export default function SigninTop() {
  const router = useRouter();
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();
  const [otpIsSent, setOtpIsSent] = useState(false);
  const [loaderVisible,setLoaderVisible]=useState(false);
  const [signInLoaderVisible,setSignInLoaderVisible]=useState(false);
  useEffect(() => {
    initializeApp({
      apiKey: "AIzaSyAgdnB53tN2vJpoK4WTwW3XRbplVVkSI10",

      authDomain: "propq-6a07f.firebaseapp.com",

      projectId: "propq-6a07f",

      storageBucket: "propq-6a07f.appspot.com",

      messagingSenderId: "341659201407",

      appId: "1:341659201407:web:a6d32dc53151830198b44a",

      measurementId: "G-QWXHSB0635",
    });
  }, []);

  const configureCaptcha = () => {
    const auth = getAuth();

    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + number.number;
    console.log(JSON.stringify(number));
    console.log(phoneNumber);
    setLoaderVisible(true);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        try {
          window.confirmationResult = confirmationResult;
          setOtpIsSent(true);
          setLoaderVisible(false);
          console.log("OTP has been sent");
        } catch (error) {
          console.log("error::" + error);
          setLoaderVisible(false);
        }

        // ...
      })
      .catch((error) => {
        console.log("error::" + error);
        // Error; SMS not sent
        // ...
      });
  };
  const onSubmitOtp = (e) => {
    e.preventDefault();
    if (otp == undefined) {
      alert("PLEASE ENTER OTP");
      return;
    }
    setSignInLoaderVisible(true)
    const code = otp.otp;
    console.log(code);
    confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        localStorage.setItem("accessToken", user.stsTokenManager.accessToken);
        login(user.stsTokenManager.accessToken).then((res) => {
          localStorage.setItem("refreshToken", res.data.data.refreshToken);
          console.log(res.data.data.refreshToken);
          localStorage.setItem("idAccessToken", res.data.data.accessToken);
          localStorage.setItem("isLoggedIn", true);
          console.log(res.data.data.accessToken);
          console.log(res.data.data._doc.email);
          //check if email name there or not
          // if (res.data.data.isNew == false) {
          //   router.push(
          //     `/dashboard?apartment=APARNA%20SERENE%20PARK.%20%20%20%20|%20APARTMENT`
          //   );
          // } else {
          //   router.push("/signInDetails");
          // }
          if (res.data.data._doc.email != undefined) {
            router.push(
              `/dashboard?apartment=APARNA%20SERENE%20PARK&type=apartment`
            );
            setSignInLoaderVisible(false)
          } else {
            router.push("/signInDetails");
          }
        });
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
        router.push("/");
      });
  };
  const resetCaptcha = () => {
    window.recaptchaVerifier.render().then(function (widgetId) {
      grecaptcha.reset(widgetId);
    });
    const phoneNumber = "+91" + number.number;
    console.log(JSON.stringify(number));
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).

        try {
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent");
        } catch (error) {
          console.log("error::" + error);
        }

        // ...
      })
      .catch((error) => {
        console.log("error::" + error);
        // Error; SMS not sent
        // ...
      });
  };

  const handleChangeNumber = (event) => {
    setNumber({ [event.target.name]: event.target.value });
  };
  const handleChangeOtp = (event) => {
    setOtp({ [event.target.name]: event.target.value });
  };
  return (
    <div>
      
      <main className="container-fluid signin-sec">
        <div className="row signin-row">
          <div className="col-md-4 offset-md-4">
            <div className="Why-propq-header cont-header">
              <img
                src="../logo-01.svg"
                width="auto"
                height="42"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </div>

            <div className="cont-form-sec">
              <h5 className="Sign-in-title">Welcome to PropQ</h5>
              <Form className="cont-forms">
                <Form.Group
                  className="input-section "
                  controlId="formBasicEmail"
                >
                  <div id="sign-in-button"></div>
                
                  <Form.Label>Enter your mobile number</Form.Label>
                  
                  <Form.Control
                    type="number"
                    placeholder="Enter number"
                    defaultValue={number}
                    required
                    onChange={handleChangeNumber}
                    name="number"
                  />
                  {/* <Link href="/signInOtp"> */}
                
                  <Button
                    variant={otpIsSent ? "secondary" : "primary"}
                    type="submit"
                    className="verify-btn"
                    onClick={onSignInSubmit}
                    disabled={otpIsSent ? true : false}
                   
                  >
                       Send OTP
                       {loaderVisible?<div class="spinner-border spinner-border-sm" role="status" style={{marginLeft: '0.8rem'}}>
  <span class="sr-only"></span>
</div>:<></>}
                 
                  </Button>
                  
                  {/* </Link> */}
                  </Form.Group>
                  {otpIsSent && (
                    <>
                    <Form.Text className="text-muted otp-dec-text">
                      <div> OTP has been sent</div>
                      <span onClick={resetCaptcha}>Resent OTP</span>
                    </Form.Text>
                    <Form.Group
                  className="input-section m-b-40px"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Enter OTP</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter number"
                    defaultValue={otp}
                    required
                    onChange={handleChangeOtp}
                    name="otp"
                  />
                </Form.Group>
                    </>
                  )}
               
              

                <Link href="/signInDetails">
                <Button
                  variant="primary"
                  type="submit"
                  className="cont-submit-btn"
                  // onClick={onSubmitOtp}
                >
                  Sign In
                  {signInLoaderVisible?<div class="spinner-border spinner-border-sm" role="status" style={{marginLeft: '0.8rem'}}>
  <span class="sr-only"></span>
</div>:<></>}
                </Button>
                </Link>
              </Form>
            </div>
          </div>
        </div>

        <hr className="seperator" />

        <Container className="footer-section">
          <Footer />
        </Container>
      </main>
    </div>
  );
}
