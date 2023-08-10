import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {FaUser} from "react-icons/fa"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginPopup from './AccountPage/LoginPopup'
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarPage=()=> {
  const [show,setShow] = useState(false)

  const handleClick=()=>{
    setShow(true)
  }

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="p-0" data-bs-theme="dark">
          <Container className='navbarPage' fluid>
            <Navbar.Brand href="#"><h3>GOVISA</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1"><h4>Home</h4></Nav.Link>
                  <Nav.Link href="#action2"><h4>About us</h4></Nav.Link>
                  <Nav.Link href="#action2"><h4>Contact us</h4></Nav.Link>
                  <Nav.Link onClick={handleClick}><h4>Login</h4></Nav.Link>
                  <Nav.Link ><FaUser style={{color:"#000",fontSize:"22px"}}/></Nav.Link>
                  
                  
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
 <LoginPopup setShow={setShow} show={show}/>
    </>
  );
}

export default NavbarPage;