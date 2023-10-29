import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, forwardRef, useImperativeHandle, useEffect} from 'react'
import Badge from 'react-bootstrap/Badge';

import { FaShoppingCart } from 'react-icons/fa';

const NavScrollExample = forwardRef((props, ref) => {

  const [num, setNum] = useState(0);

  const [listCard, setListCard] = useState([]);

  useImperativeHandle(ref, ()=>({
    clearCard () {
      setListCard([]);
      setNum(0);
      localStorage.setItem('listData', JSON.stringify([]));
      localStorage.setItem('cantListData', 0);
    },

    addToCart (idProd = 1){
      //this.clearCard();

      console.log(listCard);

      const sum = num + 1;

      setNum(sum);
      //
      const position = listCard.findIndex(obj => obj.id === idProd);

      const tmpList = listCard;

      let listMod;

      if (position !== -1) {
        tmpList[position].cant += 1;
        listMod = tmpList;
      } else {
        const newList = [...listCard, {
          id: idProd,
          cant: 1,
        }];
        listMod = newList;
        console.log(newList);
      }

      setListCard(listMod);
      localStorage.setItem('listData', JSON.stringify(listCard));
      localStorage.setItem('cantListData', sum);
    }
  }) )


  useEffect(() => {
    console.log('hola');
    //ChildRef.current.clearCard();
    const numCant = localStorage.getItem('cantListData');
    const listData = localStorage.getItem('listData');

    console.log('listData', listData);

    // if (numCant) {
    //   setNum(0);
    //   setListCard([]);
    //   localStorage.setItem('listData', JSON.stringify([]));
    //   localStorage.setItem('cantListData', 0);
    // }
    if (numCant) {
      setNum(parseInt(numCant));
      setListCard(JSON.parse(listData));
    }
  }, []);



  // const addToCart =()=>{
  //   setNum(num + 1)
  // }
 


  return (
    <>
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#"><img style={{width: '50px',}} src={require('../../src/images/logo_tipti.png')} />  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/product">Productos</Nav.Link>
            
            <Nav.Link href="/card">
              <FaShoppingCart />
              <Badge bg="danger">{num}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
})

export default NavScrollExample;