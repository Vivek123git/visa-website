import React, { useEffect, useState } from "react";
import NavbarPage from "../NavbarPage";
import { Container, Col, Row, Card } from "react-bootstrap";
import CarouselSection from "../Homepage/CarouselSection";
import Footer from "../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchVisa } from "../AllApi/LandingApi";
import Loder from "../Loader/Loader";

const VisatypePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const[isLoading , setisLoading] = useState(false)
  const [visaDetails, setVisaDetails] = useState([]);

  useEffect(()=>{
    fetchVisaType()
  },[])

  const fetchVisaType = async () => {
    setisLoading(true);
    const fd = {
      from_countries: location?.state?.data?.citizenship,
      to_countries: location?.state?.data?.goingTo,
    };
    try {
      let res = await fetchVisa(fd);
      setVisaDetails(res.data.data);
      setisLoading(false);
    } catch (error) {
      console.log(error,"error")
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchVisaType();
  }, []);

  const handleCard = (elem) => {
    //  navigate('/visa-form')
    navigate("/visa-form", {
      state: {
        data: elem,
      },
    });
  };

  const countryName = visaDetails.map((elem,ind)=> elem)

  
  // console.log(countryName[0].from_country.name,"loca")

  return (
    <>
      <NavbarPage />
      <Container>
        <Row>
          <Col className="visatype-col">
          {countryName.length > 0 && (
              <>
                <h4>Home &gt;</h4>
                <h4>{countryName[0].from_country.name} &gt;</h4>
                <h4>{countryName[0].to_country.name} &gt;</h4>
              </>
            )}
          </Col>
        </Row>
        <div>
          <h3 className="p-0">Select your VISA type</h3>
        </div>
        <Row>
          {visaDetails.length > 0
            ? visaDetails.map((elem, ind) => {
                return (
                  <Col md="4">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body
                        className="cardBody_visatype"
                        onClick={() => handleCard(elem)}
                      >
                        <Card.Title className="visatype-card">
                          {elem.visa_type.type}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted visatype-card">
                          Entry Allowed:{" "}
                          <span style={{ color: "#000", marginLeft: "15px" }}>
                            {elem.visa_details.entry_allowed.toString()==="true"?"Yes":"No"}
                          </span>
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted visatype-card">
                          Passport Required:{" "}
                          <span style={{ color: "#000", marginLeft: "15px" }}>
                            {elem.visa_details.passport_required.toString()==="true"?"Yes":"No"}
                          </span>
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted visatype-card">
                          Processing Time:{" "}
                          <span style={{ color: "#000", marginLeft: "15px" }}>
                            {elem.visa_details.processing_time}
                          </span>
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted visatype-card">
                          Validity:{" "}
                          <span style={{ color: "#000", marginLeft: "15px" }}>
                            {elem.visa_details.validity}
                          </span>
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted visatype-card">
                          Visa Required:{" "}
                          <span style={{ color: "#000", marginLeft: "15px" }}>
                            {" "}
                            {elem.visa_details.visa_required.toString()==="true"?"Yes":"No"}
                          </span>
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted visatype-card">
                          Expenses :{" "}
                          <span style={{ color: "#000", marginLeft: "15px" }}>
                            {elem.visa_details.fees.government_fees}
                          </span>
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            : ""}
          
        </Row>
      </Container>
      <CarouselSection />
      <Container className="banner-design">
        <Row>
          <img
            width={"50%"}
            src="https://cdn.pixabay.com/photo/2018/06/07/09/01/emotions-3459666_1280.jpg"
          />
        </Row>
      </Container>
      <CarouselSection />
      <Footer />
      <Loder loading={isLoading} />
    </>
  );
};

export default VisatypePage;
