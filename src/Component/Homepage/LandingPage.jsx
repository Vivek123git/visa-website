import React, { useEffect, useState } from "react";
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
import { getAllCountries } from "../AllApi/LandingApi";

const LandingPage = () => {
    const navigate = useNavigate()

  const [state , setState] = useState({
    citizenship:"",
    goingTo:""
  })
 const [countries , setCountries] = useState([])

  const fetchCountryName=async()=>{
   const fd = {};
   try {
    let res = await getAllCountries(fd)
    if (res.data.status) {
     setCountries(res.data.data)
    } else {
 
    }
   } catch (error) {
    
   }
  }

  useEffect(()=>{
   fetchCountryName()
  },[])

  const handleCountries=(e)=>{
    const {name, value} = e.target
    setState({
      ...state,
      [name]:value
    })
  }


    const handleVisa=()=>{
        // navigate('/visa-type')
        navigate("/visa-type", {
          state: {
            data: state,
          },
        })
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
                <Form.Select className="landing-form-select" aria-label="Default select example"
                name="citizenship"
                 onChange={(e)=>handleCountries(e)}>
                  <option>Travelling from</option>
                  {countries.length>0?
                  countries.map((elem,ind)=>{
                    return(
                      <option value={elem._id}>{elem.name}</option>
                    )
                  })
                  :""}
                </Form.Select>
              </Col>
              <Col md='3'>
                <h4 className="text-light">Where I am going to</h4>
                <Form.Select className="landing-form-select" aria-label="Default select example"
                name="goingTo"
                 onChange={(e)=>handleCountries(e)}>
                  <option>Travelling to</option>
                  {countries.length>0?
                  countries.map((elem,ind)=>{
                    return(
                      <option value={elem._id}>{elem.name}</option>
                    )
                  })
                  :""}
                </Form.Select>
                
              </Col>
              <Col md='3'>
              <div className="d-flex start-btn btn"><button className="main-btn" onClick={handleVisa}>Get Started</button></div>
              </Col>
            </Row>
          </Col>
        </div>
      </Container>
      <OurServices/>
      <CarouselSection/>
      <BenifitsPage/>
      <AboutSection/>
      <CarouselSection/>
      <ContactUs/>
      <TestimonialsPage/>
      <Footer/>
    </>
  );
};

export default LandingPage;
