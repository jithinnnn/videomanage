import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div  style={{ backgroundColor: '#3c1467' }}>
      <div className='container'>
        <Row>
          <Col lg={3}><h2>
            <img
              alt=""
              src="https://i.postimg.cc/zGhqDr1Z/istockphoto-1413873845-480x480-removebg-preview.png"
              width="70"
              height="45"
              className="d-inline-block align-top"
            />{''}
            <strong style={{fontFamily:'Teko', color:'white'}}>VIDEO STACK</strong>
        </h2><p style={{fontFamily:'Teko'}} className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae earum reiciendis officiis dolorem nemo, ducimus odit distinctio iure adipisci vel repellat inventore corporis aperiam in ipsa saepe debitis porro?</p></Col>
          <Col lg={3}><h3 style={{fontFamily:'Teko'}} className='text-light p-2'>Links</h3>
          <h5 className='text-light' >Landing Page</h5><h5 className='text-light'>Home</h5><h5 className='text-light '>Watch History</h5></Col>
          <Col lg={3}><h3 style={{fontFamily:'Teko'}} className='text-light p-2'>Guides</h3>
          <h5 className='text-light' >React</h5><h5 className='text-light '>React Bootstrap</h5><h5 className='text-light'>Routing</h5></Col><br />
          <Col lg={3}><h2 style={{fontFamily:'Teko'}} className='text-light w-50'>Contact Us</h2><form action=""><input type="text" className='form-control w-75' placeholder='Enter Email' /></form><br />
          <button style={{fontFamily:'Teko'}}  className='btn btn-info w-50 p-0 fs-4'>Send</button></Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer