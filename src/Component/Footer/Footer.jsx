import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
      <div className="footer-section">
        <Row>
          <Col md="4">
            <Row className="footer-row">
              <Col>
                <h2>VISA</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae officia amet eius reiciendis minima atque suscipit fuga eaque. Eaque rerum magnam perferendis necessitatibus illo nesciunt nam voluptates velit ratione!</p>
              </Col>
            </Row>
          </Col>
          <Col md="8">
            <Row className="footer-row mx-auto">
              <Col md="3" className="footer-col">
                <h2>VISA</h2>
                <p>About us</p>
                <p>Jobs</p>
                <p>Contact us</p>
              </Col>
              <Col md="3" className="footer-col">
                <h2>Account</h2>
                <p>Login</p>
                <p>Ragister</p>
                <p>Faq</p>
              </Col>
              <Col md="3" className="footer-col">
                <h2>Address</h2>
                <p>Streeet XYZ</p>
                <p>India , Noida</p>
                <p>9123******</p>
              </Col>
              <Col md="3" className="footer-col">
                <h2>Legal</h2>
                <p>Privacy</p>
                <p>Terms and condition</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
  );
};

export default Footer;
