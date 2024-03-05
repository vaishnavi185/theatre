import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from "./ExampleCarouselImage"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img  style={{width:"1480px",height:"700px"}}  src='.\Screenshot 2024-03-01 203401.png'></img>
        <Carousel.Caption>
          <h3 style={{fontFamily:"monospace",fontWeight:"bold"}}>Marvel</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img  style={{width:"1480px",height:"700px"}}  src='.\Screenshot 2024-03-02 093124.png'></img>
        <Carousel.Caption>
          <h3 style={{fontFamily:"monospace",fontWeight:"bold"}}>Coco Studio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img  style={{width:"1480px",height:"700px"}} src=".\Screenshot 2024-03-02 094641.png"></img>
        <Carousel.Caption>
          <h3 style={{fontFamily:"monospace",fontWeight:"bold"}}>Marvel</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
