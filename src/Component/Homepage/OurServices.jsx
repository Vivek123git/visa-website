import React from "react";
import {Container,Row,Col} from 'react-bootstrap'

const OurServices = () => {
  return (
    <Container>
      <div className="services">
        <h3>Our Services</h3>
      </div>
      <Row className="service-row">
        <Col md="6">
          <div className="box">
            <div className="img-box">
              <img src="https://html.design/demo/viseas/images/s1.png" alt="" />
            </div>
            <div className="detail-box">
                <h5>Business Visa</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sapiente sequi consequatur laborum iure fugit illo. Iusto voluptas ea minus tempora tenetur. Accusamus laudantium vero facilis aut voluptas, quidem quis.</p>
           <div className="btn d-flex justify-content-center"> <buttion className="main-btn">Read More</buttion> </div> 
            </div>
          </div>
        </Col>
        <Col md="6">
        <div className="box">
            <div className="img-box">
              <img src="https://html.design/demo/viseas/images/s1.png" alt="" />
            </div>
            <div className="detail-box">
                <h5>Student Visa</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sapiente sequi consequatur laborum iure fugit illo. Iusto voluptas ea minus tempora tenetur. Accusamus laudantium vero facilis aut voluptas, quidem quis.</p>
           <div className="btn d-flex justify-content-center"> <buttion className="main-btn">Read More</buttion> </div> 
            </div>
          </div>
        </Col>
      </Row>
      <Row className="service-row">
        <Col md="6">
          <div className="box">
            <div className="img-box">
              <img src="https://html.design/demo/viseas/images/s1.png" alt="" />
            </div>
            <div className="detail-box">
                <h5>Medical Visa</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sapiente sequi consequatur laborum iure fugit illo. Iusto voluptas ea minus tempora tenetur. Accusamus laudantium vero facilis aut voluptas, quidem quis.</p>
           <div className="btn d-flex justify-content-center"> <buttion className="main-btn">Read More</buttion> </div> 
            </div>
          </div>
        </Col>
        <Col md="6">
        <div className="box">
            <div className="img-box">
              <img src="https://html.design/demo/viseas/images/s1.png" alt="" />
            </div>
            <div className="detail-box">
                <h5>Tourist Visa</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sapiente sequi consequatur laborum iure fugit illo. Iusto voluptas ea minus tempora tenetur. Accusamus laudantium vero facilis aut voluptas, quidem quis.</p>
           <div className="btn d-flex justify-content-center"> <buttion className="main-btn">Read More</buttion> </div> 
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;
