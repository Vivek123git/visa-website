import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { fetchApplication } from "../../AllApi/LandingApi";
import Loder from "../../Loader/Loader";

const VisaValidation = ({ step, setStep, data }) => {
  const [isLoading, setisLoading] = useState(false);
  const [application, setApplication] = useState([]);
  const [checkBox, setCheckBox] = useState({});

  const fetchApplicationForms = async () => {
    setisLoading(true);
    const fd = {
      from_countries: data.data.from_country._id,
      to_countries: data.data.to_country._id,
      visa_type: data.data.visa_type._id,
    };
    try {
      let res = await fetchApplication(fd);
      setApplication(res.data.data);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log(error, "error");
    }
  };

  useEffect(() => {
    fetchApplicationForms();
  }, []);

  const handleCheckBox = (e) => {
    const { id, checked } = e.target;
    setCheckBox((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleSave = () => {
    setStep(step + 1);
  };
  

  return (
      <Container style={{padding:"40px"}}>
        <Row>
          <Col md={12}>
            <Form>
            <h2>{application[0]?.to_country.name}</h2>
              {application.length > 0
                ? application.map((elem) =>
                    elem.fields.map((curElem) =>
                      curElem.type === "check" ? (
                        <React.Fragment key={curElem._id}>
                          <Form.Group>
                            <div>
                              <Form.Check
                                className="form-input-radio"
                                type="checkbox"
                                checked={checkBox[curElem.value]}
                                id={curElem._id}
                                label={curElem.value}
                                onChange={handleCheckBox}
                              />
                            </div>
                          </Form.Group>
                        </React.Fragment>
                      ) : null
                    )
                  )
                : ""}
            </Form>
            <Col md={3} style={{ textAlign: "center" }}>
              <button className="save-btn" onClick={handleSave}>
                Save and Continue
              </button>
            </Col>
            {/* <Col md={4} style={{ textAlign: "center" }}>
          <button className="save-btn" onClick={handleBack}>
            Back
          </button>
        </Col> */}
          </Col>
        </Row>
        <Loder loading={isLoading} />
      </Container>
  );
};

export default VisaValidation;
