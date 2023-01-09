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
import { contactUs } from "../server";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitData = () => {
    const data = {
      message: message,
      name: name,
      phone: phone,
      email: email,
    };
    console.log(data);
    contactUs(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Header />
      <main className="container-fluid faq-section">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="Why-propq-header cont-header">
              <h1>Get in Touch!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="cont-info-sec">
                  <LocationOnIcon className="cont-loc-icon" />
                  <p>Hyderabad. Telangana</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cont-info-sec">
                  <LocalPhoneIcon className="cont-loc-icon" />
                  <p>+91 8968 89 8892</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cont-info-sec">
                  <EmailIcon className="cont-loc-icon" />
                  <p>hello@propq.com</p>
                </div>
              </div>
            </div>

            <div className="cont-form-sec">
              <h6 className="cont-form-title">Contact Form</h6>
              <Form className="cont-forms">
                <Form.Group
                  className="input-section"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="string"
                    placeholder="Enter name"
                    value={name}
                    onChange={handleChangeName}
                  />
                  {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                </Form.Group>

                <Form.Group
                  className="input-section"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                </Form.Group>
                <Form.Group
                  className="input-section"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={handleChangePhone}
                  />
                  {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                </Form.Group>

                <Form.Group
                  className="input-section"
                  controlId="formBasicEmail"
                >
                  <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      value={message}
                      onChange={handleChangeMessage}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="cont-submit-btn"
                  onClick={submitData}
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
