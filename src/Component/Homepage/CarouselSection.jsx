import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3  ,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    }
  };

  const items = [
    {
      description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
      headline: "Malasiya",
      image: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?size=626&ext=jpg&ga=GA1.1.1287514297.1687952197&semt=ais"
    },
    {
        description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        headline: "The TajMahal",
        image: "https://img.freepik.com/free-photo/mesmerizing-shot-famous-historic-taj-mahal-agra-india_181624-16028.jpg?size=626&ext=jpg&ga=GA1.1.1287514297.1687952197&semt=ais"
      },
      {
        description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        headline: "Indonesia",
        image: "https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?size=626&ext=jpg&ga=GA1.1.1287514297.1687952197&semt=ais"
      },
      {
        description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        headline: "London",
        image: "https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?size=626&ext=jpg&ga=GA1.1.1287514297.1687952197&semt=ais"
      },
      {
        description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        headline: "Paris",
        image: "https://img.freepik.com/free-photo/full-shot-friends-running-together_23-2149241869.jpg?size=626&ext=jpg&ga=GA1.2.1287514297.1687952197&semt=ais"
      },
    // Add other items here...
  ];

  return (
   <> 
   <Container className='carousel-container'> 
     <h2 className='p-0'>Dream Your Next Trip</h2>
   <Carousel
   additionalTransfrom={0}
   arrows
   autoPlay
   autoPlaySpeed={2000}
   centerMode={false}
   className=""
   containerClass="container-with-dots"
   dotListClass=""
   draggable={true}
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
   {items.map((item, index) => (
     <WithStyles key={index} description={item.description} headline={item.headline} image={item.image} />
   ))}
 </Carousel>
 </Container>

 </>
  );
};

// Dummy component to represent the WithStyles component.
const WithStyles = ({ description, headline, image }) => (
  
    <div>
    <img width={"95%"} src={image} alt={headline} />
    <h4>{headline}</h4>
    {/* <p>{description}</p> */}
  </div>
);

export default CarouselSection;
