import React from "react";
import NavbarPage from "../NavbarPage";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import BenifitsPage from "./BenifitsPage";
import CarouselSection from "./CarouselSection";
import TestimonialsPage from "./TestimonialsPage";
import { useNavigate } from "react-router-dom";
import OurServices from "./OurServices";
import ContactUs from "./ContactUs";
import AboutSection from "./AboutSection";

const LandingPage = () => {
    const navigate = useNavigate()

    const handleVisa=()=>{
        // navigate('/visa-type')
    }

  return (
    <>
      <NavbarPage />
      <Container fluid className="landing-container ">
        <div className="landing-row background-img">
          <Col md="12" className="text-container">
            <h3 className="pt-4 p-0 text-light">
              Online Travel Visa Check . Find Visa information for all Countries
            </h3>
            <h5>Simplifying travel around the world.</h5>
            <Row className="pt-4">
            <Col md='3'>
                <h4 className="text-light">My Citizenship</h4>
                <Form.Select className="landing-form-select" aria-label="Default select example">
                  <option>Travelling from</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md='3'>
                <h4 className="text-light">Where I am from</h4>
                <Form.Select className="landing-form-select" aria-label="Default select example">
                  <option>Travelling from</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md='3'>
                <h4 className="text-light">Where I am going to</h4>
                <Form.Select className="landing-form-select" aria-label="Default select example">
                  <option>Travelling to</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                
              </Col>
              <Col md='3'>
              <div className="d-flex start-btn btn"><button className="main-btn" onClick={handleVisa}>Get Started</button></div>
              </Col>
            </Row>
          </Col>
          {/* <Col md="4">
            <img width={"400px"} src="https://d16zz69zs6o3lx.cloudfront.net/img/homepage/bg-hero-girl-en.png" />
          </Col> */}
        </div>
      </Container>
      <OurServices/>
      <CarouselSection/>
      <Container fluid className="banner-design p-0">
        <Row>
        <img src="https://cdn.pixabay.com/photo/2019/09/03/16/47/travel-4449816_1280.jpg"/>
        </Row>
      </Container >
      <BenifitsPage/>
      <AboutSection/>
      <CarouselSection/>
      {/* <Container className="banner-design">
        <Row>
        <img width={"50%"} src="https://cdn.pixabay.com/photo/2018/06/07/09/01/emotions-3459666_1280.jpg"/>
        </Row>
      </Container> */}
      <ContactUs/>
      <TestimonialsPage/>
      <Footer/>
    </>
  );
};

export default LandingPage;
