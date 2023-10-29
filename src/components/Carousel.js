import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  const listBanner = [
    '1.png',
    '2.png',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.gif',
  ];

  return (
    <Carousel>
      {
        listBanner.map((element, index) => {
          console.log(index);
          return <Carousel.Item interval={2000}>
            <img
              key={index}
              className="d-block w-100"
              src={require('../images/tipti-banner/' + element)}
            />
            
          </Carousel.Item>
        })
      }
      {/* <Carousel.Item interval={1999}>
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
        
      </Carousel.Item> */}
    </Carousel>
  );
}

export default IndividualIntervalsExample;