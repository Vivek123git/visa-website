import React from "react";
import {Container , Row,Col} from 'react-bootstrap'

const AboutSection = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg="6" className="px-0">
            <div className="about-img-box">
              <img
                src="https://html.design/demo/viseas/images/about-img.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col lg="6" className="px-0 about-box">
            <div className="detail-box">
              <div className="services">
                <h3>WHO ARE WE?</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus suscipit provident, repellendus cumque unde porro architecto nam commodi quisquam, 
                modi cum rerum possimus delectus alias odit illum! Enim, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquam ducimus nobis, ipsa ullam porro. Reiciendis, adipisci quos sunt eveniet quo facilis qui esse quas sequi officiis unde, inventore est.</p>
              <div className="btn d-flex justify-content-center"> <buttion className="main-btn">Read More</buttion> </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
