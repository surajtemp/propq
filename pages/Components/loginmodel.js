import { React, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useRouter } from "next/router";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  FloatingLabel,
  Modal
} from "react-bootstrap";
import Link from "next/link";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { login } from "../../server";

export default function LoginModel({show}) {
  const router = useRouter();
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();

  useEffect(() => {
    const app = initializeApp({
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
    auth.languageCode = "it";

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
  const onSubmitOtp = (e) => {
    e.preventDefault();
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
          console.log(res.data.data.accessToken);
          if (res.data.data.isNew == false) {
            router.push("/dashboard");
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

  const handleChangeNumber = (event) => {
    setNumber({ [event.target.name]: event.target.value });
  };
  const handleChangeOtp = (event) => {
    setOtp({ [event.target.name]: event.target.value });
  };
  return (
    <>
     <Modal show={show} >
      <div className="">
        <main className="signin-sec">
          <div className="row signin-row">
            <div className="">
              <div className="cont-form-sec form-sec-bg">
                <h5 className="Sign-in-title">Welcome to PropQ</h5>
                <Form className="cont-forms">
                  <Form.Group
                    className="input-section "
                    controlId="formBasicEmail"
                  >
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
                    <button className="verify-btn" onClick={onSignInSubmit}>
                      Send OTP
                    </button>
                    {/* </Link> */}
                    <Form.Text className="text-muted otp-dec-text">
                      OTP has been sent to 8989898989 <span>Resent OTP</span>
                    </Form.Text>
                  </Form.Group>
                  <Form.Group
                    className="input-section m-b-40px"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Entet OTP</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter number"
                      defaultValue={otp}
                      required
                      onChange={handleChangeOtp}
                      name="otp"
                    />
                  </Form.Group>

                  {/* <Link href="/#"> */}
                  <Button
                    variant="primary"
                    type="submit"
                    className="cont-submit-btn"
                    onClick={onSubmitOtp}
                  >
                    Sign In
                  </Button>
                  {/* </Link> */}
                </Form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="overlay-bg"></div>
      </Modal>
    </>
  );
}
