import React, { Suspense } from 'react'

import TextSection from './components/textSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import Navbar from './components/Navbar';

import { MdAttachMoney } from 'react-icons/md';

import './CardPage.css';

import { ProductsParam } from './ProductsParam';

import backgroundImage from './images/options-paid.gif';

import 'https://pay.payphonetodoesposible.com/api/button/js?appId=S78P75HilUKfMaBJPwcMA';


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





export const Card = () => {

  const uuidv4 = () => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  const loadPayPhone = (tot = null) => {
    window.payphone.Button({

      //token obtenido desde la consola de developer
      // token: "gyqiVsoY7OBDN-eif8FyT2kkebXy0xqp6D4Yp3wGGCnxdxt0GE5WGRHGA0R7GvLnjdJ0SqF-JYPbc0NeXj9XD4whFmeo8OpLtqAoaaRxRaEOxY8QuFf5igDq1SsFwO6ZnBE0th2e8mSSwmzpBxC1pPOu9g3n2DEmkExMU9z0mjYa5ZrM67mCh7jGeauqjk50H1cHfPllVVEpAkycPkANyWKVSMS3p82Jr2bqpNjyJ7-NE7Cn4flTTSow-lOIil8UFPvGJj2P0FOkbXVdaclU9e9TftABLPMxNVl9yhqozbWTfBgobegC5rc8wc-4cKRgNDYt9w",
      token: "asS0dANx4bzd0JhpwfjBQbiPP2Lo6t3QLYlLlFDe5vCqcXEcuLUxz2eyGXeHlIT0z5GCJ2lOV0apbIJ_WmsN2iDqNZvFJWC89NxlSkdaF0xWxVlH_kjRE-bXy8DCDks5ILzYNBaa-dMpkT3JJjGhARkk39NNeLTpUupcWKAFSZCr2gmSoV4DLVs0R8tAcTAxwOwqikGFwLwP3vk3444aSA96Dx7JnosSGW3u1sNNvjV9A7jD5juA4znzJZ07z4NKCw4gRg9X85NGagvyuO_A9TkNcNmAzrWzY9MGxBsL_XUoeoqG2JjsD0giXkcOApuiqCLVEQ",

      //PARÁMETROS DE CONFIGURACIÓN
      btnHorizontal: true,
      btnCard: true,

      createOrder: function (actions) {
        //Se ingresan los datos de la transaccion ej. monto, impuestos, etc

        const totSend = parseInt((tot == null ? totalShow : tot) + '00');

        console.log('totalShow',totSend);

        return actions.prepare({

            amount: totSend,
            amountWithoutTax: totSend,
            currency: "USD",
            clientTransactionId: uuidv4(),//"22222",
            lang: "es"

        }).then(function (paramlog) {
          console.log("THEN");
          console.log(paramlog);
          return paramlog;
        }).catch(function (paramlog2) {
            console.log("CATCH");
            console.log(paramlog2);
            return paramlog2;
        });
      },

      onComplete: function (model, actions) {
        console.log("Modelo:");
        console.log(model);
      }
    }).render("#pp-button");
  }

  const ChildRef = useRef();

  const [listCard, setListCard] = useState([]);

  const [totalShow, setTotalShow] = useState(0.0);

  const loadData = () => {
    const listData = localStorage.getItem('listData');
    const jsonData = JSON.parse(listData);
    setListCard(jsonData);

    let sumT = 0;

    jsonData.forEach((element, index) => {
      const obj = ProductsParam.find(e => e.id === element.id);
      const sum = obj.value * element.cant;
      sumT += sum;
      setTotalShow(sumT);
    });

    loadPayPhone(sumT);
    console.log('payphone', window.payphone);
  }

  useEffect(() => {
    loadData();
  }, []);

  const estiloDeFondo = {
    // backgroundImage: `url(${backgroundImage})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'right center',
    background: `url(${backgroundImage}) right center no-repeat, #f1f1f1`,
    backgroundSize: 'contain',
    padding: '10px',
  };


  return (
    <Wrapper>
      <Navbar ref={ChildRef} />

      <Catatory>
        <Title>Card</Title>
      </Catatory>
      <Body>
        <div id="cardElements">
          {
            listCard.map((element, index) => {
              const obj = ProductsParam.find(e => e.id === element.id);
              return <div className='itemCard' key={index}>
                <table>
                  <tbody>
                    <tr>
                      <td className='subItemCardPrincipal'>
                        <h3>{obj.name}</h3>
                      </td>
                      <td className="subItemCard">
                        <MdAttachMoney /> {obj.value}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            })
          }
          <div id="TotalShow">
            <center><h3>Total: {totalShow}</h3></center>
            <br />
            <div style={estiloDeFondo}>
              <div id="pp-button"></div>
            </div>
          </div>
        </div>
      </Body>
    </Wrapper>

  );
}