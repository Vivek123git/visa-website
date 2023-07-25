import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import './Testimonials.css'; // Create this CSS file to style the testimonials component

const TestimonialsPage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
  };

  const testimonials = [
    {
      id: 1,
      quote: "I'm very happy with this product!",
      author: 'Angelina jolie',
      avatar: 'https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?size=626&ext=jpg&ga=GA1.1.1287514297.1687952197&semt=ais',
      additionalParagraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dapibus felis, eget suscipit dui. Ut consequat ligula quis nunc lacinia, eget pharetra purus tempus.',
    },
    {
        id: 1,
        quote: "I'm very happy with this product!",
        author: 'Talyor swift',
        avatar: 'https://img.freepik.com/free-photo/portrait-proud-brunette-woman-posing-studio_176420-29718.jpg?size=626&ext=jpg&ga=GA1.1.1287514297.1687952197&semt=ais',
        additionalParagraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dapibus felis, eget suscipit dui. Ut consequat ligula quis nunc lacinia, eget pharetra purus tempus.',
      },
      {
        id: 1,
        quote: "I'm very happy with this product!",
        author: 'Selena Gomej',
        avatar: 'https://img.freepik.com/free-photo/happy-teenager-with-fringe-pointing_1149-964.jpg?size=626&ext=jpg&ga=GA1.1.1287514297.1687952197&semt=ais',
        additionalParagraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dapibus felis, eget suscipit dui. Ut consequat ligula quis nunc lacinia, eget pharetra purus tempus.',
      },
    // Add more testimonials objects here...
  ];

  return (
    <Container className="testimonials-container">
      <h3 className="text-center testimonials-heading">What Our Customers Says</h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="testimonials-carousel"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={8} lg={5} className="text-center text-md-right">
                <Image src={testimonial.avatar} alt={testimonial.author} roundedCircle className="avatar" />
              </Col>
              <Col xs={12} sm={12} md={7} lg={7}>
                <p className="quote">{testimonial.quote}</p>
                <h4 className="author">{testimonial.author}</h4>
                <p className="additional-paragraph">{testimonial.additionalParagraph}</p>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialsPage;
