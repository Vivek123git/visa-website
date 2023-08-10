import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container fluid className="p-0 pt-2 pb-4">
      <div className=" background-contact-img">
        <Col md="12" className="text-container-contact">
          <div className="services">
            <h3 className="text-light">Contact Us</h3>
          </div>
          <Container>
            <Row className="justify-content-center">
              <Col md="9" className="mx-auto">
                <Form>
                  <Row>
                    <Col md="6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          style={{ height: "60px" }}
                          type="text"
                          placeholder="Enter Your First Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          style={{ height: "60px" }}
                          type="text"
                          placeholder="Enter Your Last Name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control
                          style={{ height: "60px" }}
                          type="Number"
                          placeholder="Enter Your No."
                        />
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          style={{ height: "60px" }}
                          type="email"
                          placeholder="name@example.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                      </Form.Group>
                    </Col>
                </Row>
                </Form>
               <div className="btn d-flex justify-content-center"> <buttion className="main-btn">Read More</buttion> </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </Container>
  );
};

export default ContactUs;
