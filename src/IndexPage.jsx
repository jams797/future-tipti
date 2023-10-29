import React, {useRef} from 'react'
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { HomeScene } from './scenes/HomeScene';

const Wrapper = styled.div`
position: relative;
//background: #1f1144;
height: auto;
font-family: Verdana;





canvas{
    background-color: #f5f5f5;
    height: 400px;

    @media (max-width: 768px) {
    background-color: transparent;
  }
}

canvas:hover {
  background-color: #dfdfdf;
  
  @media (max-width: 768px) {
    background-color: transparent;
  }
}

`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
 



`;

const Title = styled.h1`
color:black;
font-style: normal;
font-weight: bold;
font-size: 20px;
`;

const Description = styled.p`
  max-width: 240px;
  color: black;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 130%;
  margin: 0 auto;
`;

const Body = styled.div`

position: relative;






`;

const CatagoryContainer = styled.div`
position: relative;
display:flex;
width:100%;
justify-content: space-around;
margin-bottom: 20px;

@media (max-width: 768px) {
    display: none;
  }


`;


const CatagoryItem = styled.div`
position: relative;
width: 10%;
display: grid;
height: 120px;

border-radius: 50%;

overflow: hidden;

img{
   width: 100%;
   height: 100%;
   object-fit: cover;
}

:hover {
  border: 1px solid black;
}



`;




const ProductContainer = styled.div`

position: relative;
display:flex;

width:100%;


@media (max-width: 768px) {
    display: grid;
    
    justify-content: center;
  }


`;



const Catatory = styled.div`
position: relative;
padding: 20px 20px 20px;


`;

const Advertisment = styled.div`
margin-top:40px;
padding: 20px 20px 20px;
background: #FFD1DD;
width: 100%;



h1{
  color: #680326;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
}



p{
  color: #680326;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
 
}

#div1{
  
  width: 50%;
}
 



@media (max-width: 768px) {
    display: grid;
    
    justify-content: center;
  
    #div1{
      width: 100%;
    }

   
  
  }


`;



const ProductDesc = styled.div`

position: relative;
text-align: center;
display: grid;


`;

const Product = styled.div`

position: relative;
width: 24%;
display: grid;
height: 500px;
padding: 0.5% 0.5% 2% 0.5%;
@media (max-width: 768px) {
    width: 380px
  }


`;

export const IndexPage = () => {
    const ChildRef = useRef();

  return (
      <Wrapper>
          <Navbar ref={ChildRef} />
          <HomeScene />
      </Wrapper>
  );
}
