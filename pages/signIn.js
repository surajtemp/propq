import React from "react";
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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export default function SignIn() {
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
                  className="input-section m-b-40px"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Enter your mobile number</Form.Label>
                  <Form.Control type="email" placeholder="Enter number" />
                  <Link href="/signInOtp">
                    <button className="verify-btn">verify</button>
                  </Link>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="cont-submit-btn"
                >
                  Submit
                </Button>
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
