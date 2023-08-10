import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const BenifitsPage = () => {
  return (
    <>
   <Container className='benifitpage-container'>
    <div>
        <h3>Why Choose us</h3>
    </div>
    <Row>
        <Col md='3' className='benifitpage-col'>
            <h4>Speed and Simplicity</h4>
            <h6>Easy, traveler-friendly application process. Simple and much less complicated than dealing with foreign governments.</h6>
        </Col>
        <Col md='3' className='benifitpage-col'>
        <h4>Get Approved</h4>
        <h6>All documents are reviewed by a team of immigration experts. Our staff is well-trained and offers years of experience.</h6>
        </Col>
        <Col md='3' className='benifitpage-col'>
        <h4>Secure and safe</h4>
        <h6>World-class data centers and state-of-the-art security. Your credit card information will never be exposed to any government websites!</h6>
        </Col>
        <Col md='3' className='benifitpage-col'>
        <h4>Awesome support</h4>
        <h6>Our customer support is ready to help 24/7. We want you to enjoy your travels and avoid the stress of getting a visa! </h6>
        </Col>
    </Row>
    </Container> 
    </>
  )
}

export default BenifitsPage