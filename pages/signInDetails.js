import { React, useState } from "react";
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
import { editProfile } from "../server";

export default function SigninDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitForm = () => {
    const data = {
      email: email,
      name: name,
    };
    const token = localStorage.getItem("idAccessToken");
    editProfile(data, token).then((res) => {
      console.log(res);
    });
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
                  className="input-section"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter name"
                    value={name}
                    onChange={handleChangeName}
                  />
                </Form.Group>
                <Form.Group
                  className="input-section m-b-40px"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                </Form.Group>

                <Link href="/dashboard">
                  <Button
                    variant="primary"
                    type="submit"
                    className="cont-submit-btn"
                    onClick={submitForm}
                  >
                    Sign In
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
