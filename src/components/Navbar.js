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
      console.log('clear');
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
        <Navbar.Brand href="#">OneStop  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/index">Home</Nav.Link>
            <Nav.Link href="/card">Card</Nav.Link>
            <Nav.Link href="#action2">Sell</Nav.Link>
            <NavDropdown title="My Onestop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Recently Viewed</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                My Onestop Summary
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Purchase History
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop by category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Electronics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Clothes and Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Sports
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Toys
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Health & Beauty
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="/card">
              <FaShoppingCart />
              <Badge bg="danger">{num}</Badge>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
})

export default NavScrollExample;