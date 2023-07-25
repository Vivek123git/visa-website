import React from "react";
import { Row, Col } from "react-bootstrap";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <section className="footer-section">
        <Row className="footer-row">
          <Col md="2" className="footer-col">
            <h5>Document</h5>
            <p>Passport Photo</p>
            <p>Travel Document</p>
            <p>Embassy listing</p>
          </Col>
          <Col md="2" className="footer-col">
            <h5>VISA</h5>
            <p>About us</p>
            <p>Jobs</p>
            <p>Contact us</p>
          </Col>
          <Col md="2" className="footer-col">
          <h5>My Account</h5>
            <p>Login</p>
            <p>Ragister</p>
            <p>Faq</p>
          </Col>
          <Col md="2" className="footer-col">
          <h5>Address</h5>
            <p>Streeet XYZ</p>
            <p>India , Noida</p>
            <p>9123******</p>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Footer;