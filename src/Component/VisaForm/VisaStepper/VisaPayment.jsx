import React from "react";
import { Col ,Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const VisaPayment = ({ step, setStep }) => {
  const navigate = useNavigate()
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleGo=()=>{
    navigate('/')
  }
  return (
    <Container style={{ padding: "40px" }}>
      <section className="gradient-custom">
        <div className="container ">
          <div className="row d-flex justify-content-center py-5">
            <div className="col-md-7 col-lg-5 col-xl-4">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-4">
                  <form>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="typeText">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="typeText"
                          className="form-control form-control-lg"
                          siez={17}
                          placeholder="1234 5678 9012 3457"
                          minLength={19}
                          maxLength={19}
                        />
                      </div>
                      <img
                      className="mt-5"
                        src="https://img.icons8.com/color/48/000000/visa.png"
                        alt="visa"
                        width="80px"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="typeName">
                          Cardholder's Name
                        </label>
                        <input
                          type="text"
                          id="typeName"
                          className="form-control form-control-lg"
                          siez={17}
                          placeholder="Cardholder's Name"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="typeExp">
                          Expiration
                        </label>
                        <input
                          type="text"
                          id="typeExp"
                          className="form-control form-control-lg"
                          placeholder="MM/YYYY"
                          size={7}
                          minLength={7}
                          maxLength={7}
                        />
                      </div>
                      <div className="form-outline">
                        <label className="form-label" htmlFor="typeText2">
                          Cvv
                        </label>
                        <input
                          type="password"
                          id="typeText2"
                          className="form-control form-control-lg"
                          placeholder="●●●"
                          size={1}
                          minLength={3}
                          maxLength={3}
                        />
                      </div>

                    </div>
                      <Col md={4} style={{ textAlign: "center" }}>
                        <button className="save-btn " onClick={handleGo}>
                          Go
                        </button>
                      </Col>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Col md={3} style={{ textAlign: "center" }}>
        <button className="save-btn" onClick={handleBack}>
          Back
        </button>
      </Col>
    </Container>
  );
};

export default VisaPayment;
