import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div style={{ backgroundColor: '#101113',}}><Row style={{width:'100%'}}>
      <Col lg={6} clas><h1 style={{ fontFamily: 'Teko' }} className='text-light container text-center'>VIDEO <span style={{ color: '#7f0cce' }}>STACK</span></h1>
        <p style={{ fontFamily: 'Teko' }} className='text-light text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repellendus recusandae sunt explicabo? Ad unde consequatur sint eligendi explicabo nostrum quaerat modi quos repellendus dolore mollitia pariatur quam, deserunt hic! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde at eos nisi ab, pariatur cum ipsam facere quisquam sit provident harum temporibus officia error ratione exercitationem porro? Assumenda, est eum.</p>
        <div style={{ textAlign: 'center' }}><Link to={'./main'}><button style={{ fontFamily: 'Teko' }} className='btn btn-light container w-25  '>Get Started</button></Link></div></Col>
      <Col style={{ textAlign: 'center', overflowX:'hidden'}} lg={6} md={12}><img className='container w-75' src="https://i.postimg.cc/RFxd7jD1/premieres.gif" alt="" /></Col>
    </Row>
      <h1 style={{ fontFamily: 'Teko' }} className='text-center text-light'>Features</h1>
      <div className='container w-100'>
        <Row>
          <Col lg={4} md={12}><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/0QvZw8Sg/a36f624c1a112a5ab50d831d633d4073.gif" />
            <Card.Body style={{ height: '215px' }}>
              <Card.Title><h3 style={{ fontFamily: 'Teko' }}>Managing Videos</h3></Card.Title>
              <Card.Text>
                <p style={{ fontFamily: 'Teko' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque iste aliquam saepe eos praesentium doloremque sequi! Nemo obcaecati atque, consequatur consequuntur ullam nostrum id laudantium, inventore itaque saepe facilis tenetur.</p>
              </Card.Text>
            </Card.Body>
          </Card><br /></Col>
          <Col lg={4} md={12}><Card style={{width:'18rem' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/jSms6jtF/aesthetic-gif-7.gif" style={{ height: '215px' }} />
            <Card.Body style={{ height: '215px' }}>
              <Card.Title><h3 style={{ fontFamily: 'Teko' }} >Categorise Videos</h3></Card.Title>
              <Card.Text>
                <p style={{ fontFamily: 'Teko' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque delectus iusto, eum eos, dignissimos ducimus sunt nesciunt maxime at perferendis velit inventore unde explicabo. Delectus aut quisquam deserunt fugit tenetur.</p>
              </Card.Text>
            </Card.Body>
          </Card><br /></Col>
          <Col lg={4} md={12}><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/QCJQ5P7f/aesthetic-purple.gif" style={{ height: '215px' }} />
            <Card.Body style={{ height: '215px' }}>
              <Card.Title><h3 style={{ fontFamily: 'Teko' }}>Watch History</h3></Card.Title>
              <Card.Text>
                <p style={{ fontFamily: 'Teko' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit omnis molestias laudantium facilis blanditiis incidunt placeat, illo ipsam nostrum corporis hic voluptate et porro! Ex numquam cum quis eligendi!Ex numquam cum</p>
              </Card.Text>
            </Card.Body>
          </Card></Col>
        </Row>
      </div>
    </div>
  )
}

export default Home