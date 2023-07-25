import React from "react";
import NavbarPage from "../NavbarPage";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import BenifitsPage from "./BenifitsPage";
import CarouselSection from "./CarouselSection";
import TestimonialsPage from "./TestimonialsPage";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate()

    const handleVisa=()=>{
        navigate('/visa-type')
    }

  return (
    <>
      <NavbarPage />
      <Container fluid className="landing-container">
        <Row className="landing-row">
          <Col md="8">
            <h3 className="p-0">
              Online Travel Visa Check . Find Visa information for all Countries
            </h3>
            <h5>Simplifying travel around the world.</h5>
            <Row className="pt-4">
              <Col>
                <h5>Where I am from</h5>
                <Form.Select aria-label="Default select example">
                  <option>Travelling from</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <h5>Where I am going to</h5>
                <Form.Select aria-label="Default select example">
                  <option>Travelling to</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <div className="d-flex justify-content-end p-4"><Button onClick={handleVisa}>Get Started</Button></div>
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <img width={"400px"} src="https://d16zz69zs6o3lx.cloudfront.net/img/homepage/bg-hero-girl-en.png" />
          </Col>
        </Row>
      </Container>
      <CarouselSection/>
      <Container  className="banner-design">
        <Row>
        <img src="https://cdn.pixabay.com/photo/2019/09/03/16/47/travel-4449816_1280.jpg"/>
        </Row>
      </Container >
      <BenifitsPage/>
      <CarouselSection/>
      <Container className="banner-design">
        <Row>
        <img width={"50%"} src="https://cdn.pixabay.com/photo/2018/06/07/09/01/emotions-3459666_1280.jpg"/>
        </Row>
      </Container>
      <TestimonialsPage/>
      <CarouselSection/>
      <Footer/>
    </>
  );
};

export default LandingPage;
