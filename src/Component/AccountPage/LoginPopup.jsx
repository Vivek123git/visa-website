import { useState } from 'react';
import {Button,Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const LoginPopup=({setShow,show})=> {


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleLogin=()=>{

}

  return (
    <> 
      <Modal show={show} centered onHide={handleClose} animation={false} style={{padding:"0px 20px"}}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Login</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{padding:"0px 20px"}}>
          <Form>
            <Form.Group controlId="formName" className='p-2'>
              <Form.Label className='m-0'><h4>Name</h4></Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className='p-2'>
              <Form.Label className='m-0'><h4>Email</h4></Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formPassword" className='p-2'>
              <Form.Label className='m-0'><h4>Password</h4></Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>Create an account ?</p>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginPopup;