import React from "react";
import NavbarPage from "../NavbarPage";
import { Container, Col, Row, Card } from "react-bootstrap";
import CarouselSection from "../Homepage/CarouselSection";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const VisatypePage = () => {
  const navigate = useNavigate()
   
const handleCard = ()=>{
 navigate('/visa-form')
}

  return (
    <>
      <NavbarPage />
      <Container>
        <Row>
          <Col className="visatype-col">
            <h4>Home &gt;</h4>
            <h4>Country1 &gt;</h4>
            <h4>Country2 &gt;</h4>
          </Col>
        </Row>
        <div>
          <h3 className="p-0">Select your VISA type</h3>
        </div>
        <Row>
          <Col md="4">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="cardBody_visatype" onClick={handleCard}>
                <Card.Title className="visatype-card">Student VISA</Card.Title>
                <Card.Subtitle className="mb-2 text-muted visatype-card">
                  Valid for 6 months
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted visatype-card">
                  Expenses 109$
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="cardBody_visatype">
                <Card.Title className="visatype-card">Medical VISA</Card.Title>
                <Card.Subtitle className="mb-2 text-muted visatype-card">
                  Valid for 6 months
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted visatype-card">
                  Expenses 109$
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="cardBody_visatype">
                <Card.Title className="visatype-card">Tourist VISA</Card.Title>
                <Card.Subtitle className="mb-2 text-muted visatype-card">
                  Valid for 6 months
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted visatype-card">
                  Expenses  109$
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        <CarouselSection/>
      <Container className="banner-design">
        <Row>
        <img width={"50%"} src="https://cdn.pixabay.com/photo/2018/06/07/09/01/emotions-3459666_1280.jpg"/>
        </Row>
      </Container>
      <CarouselSection/>
      <Footer/>
    </>
  );
};

export default VisatypePage;
