import React from "react";
import { Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VisaPayment = ({ step, setStep }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    setStep(step - 1);
  };
  const handleGo = (e) => {
    e.preventDefault();
    // navigate('/')
    proceeds();
  };

  const proceeds = async () => {
    const amount = 30;
    if (amount !== "") {
      var options = {
        key: "rzp_test_B4a9UFfrNHM7PW",
        amount: "100",
        currency: "INR",
        name: "Go Visa",
        description: "Transaction",
        first: "Transaction",
        image:
          "https://astroyaro.com/static/media/Astroyarologo.f965aa0eb4f9ff946091.png",
        order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          // onsuccess(response.razorpay_payment_id);
          console.log(response.razorpay_payment_id);
          console.log(response.razorpay_order_id);
          console.log(response.razorpay_signature);
          // setstatus(true);
          // alert(response.data.response.signatureIsValid);
          console.log(response);
        },
        prefill: {
          name: "jatin",
          email: "",
          contact: "",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#ce202f",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        // setTimeout(() => {
        //   setpaymentsuccess(false);
        //   navigate("/add_wallet");
        // }, 3000);
        //   SendpaymentData("Payment Not Successfull");
        // alert(response.error.code);
        // setstatus(false);
        // setpaymentsuccess(true);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);

        console.log(response);
      });
      rzp1.open();
    } else {
      alert("Enter Valid Amount");
    }
  };

  return (
    <Container style={{ padding: "40px" }}>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card rounded-3">
                <div className="card-body mx-1 my-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="fab fa-cc-visa fa-4x text-black pe-3" />
                    </div>
                    <div>
                      <p className="d-flex flex-column mb-0">
                        <b>Payment Now</b>
                        {/* <span className="small text-muted"></span> */}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="d-flex flex-row pb-3">
                      <div
                        className="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                        style={{ backgroundColor: "rgba(18, 101, 241, 0.07)" }}
                      >
                        <div className="d-flex align-items-center pe-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabelX"
                            id="radioNoLabel11"
                            defaultValue=""
                            aria-label="..."
                            defaultChecked=""
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <p className="mb-1 small text-primary">
                            Government Fees
                          </p>
                          <h6 className="mb-0 text-primary">$1000</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="rounded border d-flex w-100 px-3 py-2 align-items-center">
                        <div className="d-flex align-items-center pe-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabelX"
                            id="radioNoLabel22"
                            defaultValue=""
                            aria-label="..."
                          />
                        </div>
                        <div className="d-flex flex-column py-1">
                          <p className="mb-1 small text-primary">
                           Service Charge
                          </p>
                          <div className="d-flex flex-row align-items-center">
                            <h6 className="mb-0 text-primary pe-1">$</h6>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="numberExample"
                              style={{ width: 55 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pb-1">
                  <Col md={4} style={{ textAlign: "center" }}>
                      <button className="save-btn" onClick={handleBack}>
                        Back
                      </button>
                    </Col>
                    <Col md={4} style={{ textAlign: "center" }}>
                      <button className="save-btn" onClick={handleGo}>
                        Pay Now
                      </button>
                    </Col>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default VisaPayment;
