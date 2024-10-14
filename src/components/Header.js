import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <div> <Navbar  style={{backgroundColor:'#270e43'}}  >
    <Container>
      <Navbar.Brand href="#home" >
        <img
          alt=""
          src="https://i.postimg.cc/zGhqDr1Z/istockphoto-1413873845-480x480-removebg-preview.png"
          width="50"
          height="30"
          className="d-inline-block align-middle"
        />{''}
       <span className='text-light fs-2' style={{fontFamily:'Teko'}}>Video Stack</span>
      </Navbar.Brand>
    </Container>
  </Navbar></div></div>
  )
}

export default Header