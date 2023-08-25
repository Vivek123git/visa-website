import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { fetchApplication } from "../../AllApi/LandingApi";
import { application_submit_api } from "../../AllApi/LandingApi";
import Loder from "../../Loader/Loader";
import Footer from "../../Footer/Footer";

const VisaFormDetails = ({ step, setStep, data }) => {
  const [isLoading, setisLoading] = useState(false);
  const [application, setApplication] = useState([]);
  const [applicationAdd, setApplicationAdd] = useState([]);
  // const [applicationFile, setApplicationFile] = useState({
  //   "64d9f2be1dcbca00c8058a23": null, // image
  //    "64d9f2e21dcbca00c8058a2a": null, // Passport Copy
  //    "64dc90c212a5cfa64a6eba9c": null, // Pan Card
  //    "64e2f1b76c0368453839e682": null  // Supporting Document
  // });
  const [formData, setFormData] = useState([]);

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

  console.log("formData", formData);

  const handleApplicationAdd = (e) => {
    const { id, value, type, files } = e.target;

    if (type === "file") {
      if (files && files.length > 0) {
        const file = files[0];
        const newFileName = id;
        const fileType = file.name.split(".");
        const newFileType = fileType[fileType.length - 1];
        const fakeFile = new File([file], newFileName + "." + newFileType, {
          type: file.type,
        });
        if (Object.keys(formData).length > 0) {
          // If formData is not blank
          setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };
            const existingFile = updatedFormData[id];

            if (existingFile) {
              // If fakeFile ID matches an existing element, update it
              existingFile[0] = fakeFile;
            } else {
              // If fakeFile ID doesn't match, add it as a new element
              updatedFormData[id] = [fakeFile];
            }
            return updatedFormData;
          });
        } else {
          // If formData is blank, simply add the fakeFile
          setFormData({ [id]: [fakeFile] });
        }

        // setFormData((prevFiles) => [...prevFiles, { [id]: fakeFile }]);
      }
    } else {
      setApplicationAdd((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleSave = async () => {
    //   if (pagetype === "Add") {
    const formdata = new FormData();
    formdata.append("fields", JSON.stringify(applicationAdd));
    formdata.append("from_country", JSON.stringify(data.data.from_country._id));
    formdata.append("to_country", JSON.stringify(data.data.to_country._id));
    formdata.append("visa_type", JSON.stringify(data.data.visa_type._id));
   
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const fileArray = formData[key];
        fileArray?.forEach((file, index) => {
          formdata.append("image", file);
        });
      }
    }

    try {
      let res = await application_submit_api(formdata);
      if (res.data.status) {
        // navigate("/application");
        // notificationHandler({ type: "success", msg: res.data.message });
      } else {
        // notificationHandler({ type: "success", msg: res.data.message });
      }
    } catch (error) {
      //   notificationHandler({ type: "danger", msg: error.message });
      console.log(error);
    }
    //   }
    //   if (pagetype === "Edit") {
    //     const fd = {
    //       id: id,
    //       from_country: application.fromCountry,
    //       to_country: application.toCountry,
    //       visa_type: application.visatype,
    //       visa_details: { ...visaDetails },
    //       fields,
    //     };
    //     try {
    //       let res = await application_update_api(fd);
    //       if (res.data.status) {
    //         navigate("/application");
    //         notificationHandler({ type: "success", msg: res.data.message });
    //       } else {
    //         notificationHandler({ type: "success", msg: res.data.message });
    //       }
    //     } catch (error) {
    //       notificationHandler({ type: "danger", msg: error.message });
    //       console.log(error);
    //     }
    //   }

     setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Container style={{ padding: "40px" }}>
        <Row className="d-flex justify-content-between">
          <Col md={5}>
            <Form>
              {application.length > 0
                ? application.map((elem, i) =>
                    elem.fields.map((curElem) => (
                      <React.Fragment key={curElem._id}>
                        {curElem.type === "text" ||
                        curElem.type === "date" ||
                        curElem.type === "email" ||
                        curElem.type === "number" ||
                        curElem.type === "file" ? (
                          <Form.Group className="mb-3">
                            <Form.Label>{curElem.value}</Form.Label>
                            <Form.Control
                              className="form-input-control"
                              type={curElem.type}
                              placeholder={curElem.placeholder}
                              id={curElem._id}
                              value={Form.value}
                              onChange={handleApplicationAdd}
                            />
                          </Form.Group>
                        ) : curElem.type === "select" ? (
                          <React.Fragment>
                            <label
                              className="form-select-label"
                              htmlFor={curElem._id}
                            >
                              {curElem.value}
                            </label>
                            <Form.Select
                              className="form-input-control"
                              onChange={handleApplicationAdd}
                              id={curElem._id}
                              aria-label="Default select example"
                            >
                              <option>Select one option</option>
                              {curElem.sub_fields.map((option) => (
                                <>
                                  <option
                                    key={option.value}
                                    name={option.name}
                                    value={option.value}
                                  >
                                    {option.name}
                                  </option>
                                </>
                              ))}
                            </Form.Select>
                          </React.Fragment>
                        ) : curElem.type === "radio" ? (
                          <Form.Group>
                            <Form.Label>{curElem.value}</Form.Label>
                            {curElem.sub_fields.map((option) => (
                              <div key={option.value}>
                                <Form.Check
                                  className="form-input-radio"
                                  type="radio"
                                  id={curElem._id}
                                  name={`radioGroup_${curElem._id}`}
                                  value={option.name}
                                  label={option.name}
                                  onChange={handleApplicationAdd}
                                />
                              </div>
                            ))}
                          </Form.Group>
                        ) : null}
                      </React.Fragment>
                    ))
                  )
                : ""}
            </Form>
          </Col>
          <Col md={5}>
            <Form>
              {application.map((elem) => (
                <React.Fragment key={elem._id}>
                  {/* Other form elements for each application */}
                  <Form.Label>Visa Duration</Form.Label>
                  <Form.Select
                    className="form-input-control"
                    id="Visa Duration"
                    onChange={handleApplicationAdd}
                    aria-label="Default select example"
                  >
                    {elem.visa_details.sub_type.length > 0
                      ? elem.visa_details.sub_type.map((subElem, id) => (
                          <>
                            <option>Select one option</option>
                            <option
                              key={id}
                              id={subElem.value}
                              value={subElem.value}
                            >
                              {subElem.label}
                            </option>
                          </>
                        ))
                      : ""}
                  </Form.Select>
                </React.Fragment>
              ))}
            </Form>
            <Form>
              {application.map((elem) => (
                <React.Fragment key={elem._id}>
                  {/* Other form elements for each application */}
                  <Form.Label>Visa Mode</Form.Label>
                  <Form.Select
                    className="form-input-control"
                    id="Visa Mode"
                    onChange={handleApplicationAdd}
                    aria-label="Default select example"
                  >
                    {elem.visa_details.visa_mode.length > 0
                      ? elem.visa_details.visa_mode.map((subElem, id) => (
                          <>
                            <option>Select one option</option>
                            <option
                              key={id}
                              id={subElem.value}
                              value={subElem.value}
                            >
                              {subElem.label}
                            </option>
                          </>
                        ))
                      : ""}
                  </Form.Select>
                </React.Fragment>
              ))}
            </Form>
          </Col>
          <Col md={3} style={{ textAlign: "center" }}>
            <button className="save-btn" onClick={handleBack}>
              Back
            </button>
          </Col>
          <Col md={3} style={{ textAlign: "center" }}>
            <button className="save-btn" onClick={handleSave}>
              Save and Continue
            </button>
          </Col>
        </Row>
        <Loder loading={isLoading} />
      </Container>
    </>
  );
};

export default VisaFormDetails;
