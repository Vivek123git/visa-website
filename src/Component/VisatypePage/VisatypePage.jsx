import React from "react";
import NavbarPage from "../NavbarPage";
import { Container, Col, Row, Card } from "react-bootstrap";

const VisatypePage = () => {
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
              <Card.Body>
                <Card.Title className="visatype-card">VISA Type</Card.Title>
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
              <Card.Body>
                <Card.Title className="visatype-card">VISA Type</Card.Title>
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
              <Card.Body>
                <Card.Title className="visatype-card">VISA Type</Card.Title>
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
    </>
  );
};

export default VisatypePage;
