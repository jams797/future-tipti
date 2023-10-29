import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1999}>
        <img
          className="d-block w-100"
          src={require("../images/firstimgcar.png")}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require("../images/secondimgcar.png")}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval ={2000}>
        <img
          className="d-block w-100"
          src={require("../images/thirdimgcar.png")}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;