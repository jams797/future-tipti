import React, {Suspense} from 'react'

import TextSection from './components/textSection';
import {Canvas} from '@react-three/fiber';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useRef} from 'react'
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import Navbar from './components/Navbar';
import Tv from './components/Tv';
import Carousel from './components/Carousel';
import Chat from './components/Chat';
import Monitor from './components/Monitor';
import Iphone13 from './components/Iphone13';
import Pooltable from './components/Pooltable';
import Guitar from './components/Guitar';
import Shoes from './components/Shoes';
import Smarttv from './components/Smarttv';
import Laptop from './components/Laptop';


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





function Proj() {

  const ChildRef = useRef();

 

  
  return (
    <Wrapper> 
     
        <Navbar ref={ChildRef}/>
      <Carousel/>
        <TextSection/>

        <Catatory>
        <Title>Shop by Catagory  →</Title>
        </Catatory>
      <CatagoryContainer>
        <CatagoryItem>
        <img src={require('../src/images/Appliances.png')} alt="Appliance" />
       
        </CatagoryItem>
        <CatagoryItem>
        <img src={require('../src/images/Alcohol.png')} alt="Alcohol" />
        </CatagoryItem>
        <CatagoryItem>
        <img src={require('../src/images/Ellipse 1.png')} alt="Dress" />
        </CatagoryItem>
        <CatagoryItem>
        <img src={require('../src/images/Baby.png')} alt="Dress" />
        </CatagoryItem>
        <CatagoryItem>
        <img src={require('../src/images/Headphone.png')} alt="Dress" />
        </CatagoryItem>
        <CatagoryItem>
        <img src={require('../src/images/Shoes.png')} alt="Dress" />
        </CatagoryItem>
        <CatagoryItem>
        <img src={require('../src/images/Ball.png')} alt="Dress" />
        </CatagoryItem>

     

      </CatagoryContainer>
      
      <Catatory>
        <Title>Electronics  → </Title>
        </Catatory>
        <Body>
      
        <ProductContainer>
          <Product>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={2}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Tv/>
        
            </Suspense>
           </Canvas>   
           <ProductDesc>
            <Title>Oldschool Nintendo </Title>
            <Description>$140</Description>
            <Button
            onClick={()=>ChildRef.current.addToCart(1)}
            >
              Add to Cart
              </Button>
            </ProductDesc> 
            
           
            </Product>

            <Product>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={2}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Iphone13/>

            </Suspense>
           </Canvas> 

           <ProductDesc>
            <Title>iPhone 13 Pro</Title>
            <Description>$700</Description>
            <Button
           onClick={()=>ChildRef.current.addToCart()}
            >
              Add to Cart
              </Button>
            </ProductDesc> 
            
           </Product>


            <Product>
            <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={3}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Monitor/>
            
            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>Kogan Curved Monitor</Title>
            <Description>$400</Description>
            <Button
           onClick={()=>ChildRef.current.addToCart()}
            >
              Add to Cart
              </Button>
            </ProductDesc> 
            
           </Product>

           <Product>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={3}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Smarttv/>

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>Samsung 85 smart</Title>
            <Description>$3000</Description>
            <Button
             onClick={()=>ChildRef.current.addToCart()}
            >
              Add to Cart
              </Button>
            </ProductDesc> 
            
           </Product>

           </ProductContainer>


           

           <Advertisment>
            <div id="div1">
           <h1>Enjoy 20% off* storewide from Lenovo</h1>
            <p>Save on tech thats right for you   |   *Ltd time only.Max disc $1000. T&Cs apply.</p>
            <p>Shop Now →</p>
           </div>
          
           </Advertisment>

           <Catatory >
        <Title> Used Items  →</Title>
        </Catatory>

           <ProductContainer>

           <Product>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Shoes/>

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>Nike Airmax Monster</Title>
            <Description>$200</Description>
            <Button
             onClick={()=>ChildRef.current.addToCart()}
            >
              Add to Cart
              </Button>
            </ProductDesc> 
            
           </Product>

           <Product>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={3}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Laptop/>

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>Alien Predetor</Title>
            <Description>$3299</Description>
            <Button
            onClick={()=>ChildRef.current.addToCart()}
            >
              Add to Cart
              </Button>
            </ProductDesc> 
            
           </Product>

           <Product>
          
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Pooltable/>

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>Pool Table</Title>
            <Description>$400</Description>
            <Button
           onClick={()=>ChildRef.current.addToCart()}
            >
              Add to Cart
              </Button>
            </ProductDesc> 
           </Product>

           <Product>
          
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

          <Guitar/>

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>1969 Stratocaster</Title>
            <Description>$4000</Description>
            <Button
             onClick={()=>ChildRef.current.addToCart()}
            >
              Add to Cart
              </Button>
            </ProductDesc> 
           </Product>
            

           </ProductContainer>

           
           </Body>

          <Chat/>
    </Wrapper>

  );
}

export default Proj