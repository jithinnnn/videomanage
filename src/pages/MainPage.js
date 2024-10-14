import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'



function MainPage() {

    //state for stat lifting
    const [addUpdate, setAddUpdate]=useState("")
    return (
        <div style={{ backgroundColor: '#101113', width: '100%' }}>
            <Row style={{ width: '100%' }}>
                <Col lg={7}><h1 className='text-light container w-100 p-4' style={{ fontFamily: 'Teko' }}>Start uploading your videos for <span style={{ color: '#7f0cce' }}>free!</span></h1>
                    <Link to={'/history'}><a style={{ textDecoration: 'none', fontFamily: 'Teko' }} className='text-center text-light container p-4 fs-4' href="">View Watch History</a></Link>
                    <p style={{ fontFamily: 'Teko' }} className=' text-light container p-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dicta repudiandae, ipsum voluptatum neque qui dolorem at quos alias, provident eaque sapiente! Quia minima quidem molestiae amet suscipit nulla sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rerum pariatur. Quo id fugit perferendis eaque, ut odit molestias autem ipsa? Perferendis id ut eum quam ad accusantium, facilis vero.</p><Add updateData={setAddUpdate}></Add></Col>
                <Col lg={5}><img className='container w-75 p-2 m-2' src="https://i.postimg.cc/V6ZXQWhH/4affc215fcc7abe946bbc6cbdfe08f4f.jpg" alt="" /></Col>
            </Row>
            <br /><br />
            <Row style={{width:'100%'}}>
            <Col lg={6}>
            <Videos data={addUpdate}></Videos><br /><br /><br /><br />
            </Col>
            <Col lg={6}>
            <Categories></Categories>
            <br />
                </Col>
        </Row>

        </div>
    )
}

export default MainPage