
import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import sli31 from '../image/sli31.png';
import sli32 from '../image/sli32.png';
import sli33 from '../image/sli33.png';
import sli34 from '../image/sli34.png';

import { FaCarrot, FaFacebookF, FaTwitter, FaCameraRetro, FaGooglePlusG } from "react-icons/fa";


const slider3 = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
  
      },
      1000: {
        items: 3,
      }
    }
  }
function Ourteam() {
    return (
        <>  <div className='best-farmer text-center'>
            <h3 className='forte'>We are Experienced Farmers</h3>
            <h1 className='pt-3 pb-5'>OUR TEAM</h1>

            <OwlCarousel className='owl-theme slider3 text-center' {...slider3} dots={false} navText={['prew', 'next']} loop margin={10} nav>
                <div class='item3 text-center'>
                    <img src={sli31}></img>
                    <div className='item3-div position-absolute d-none d-lg-block'>
                        <h4 className='fort'>Hi! I’m</h4>
                        <a href='' style={{ color: 'black' }}><h5>KATE MCMILLAN</h5></a>
                        <p className='pb-2' style={{ color: '#85B37E', fontWeight: 'bolder' }}>SALES MANAGER</p>
                        <Row className='text-center '>
                            <Col><a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a></Col>

                        </Row>
                        <div className='skew position-absolute'></div>
                    </div>
                    <div className='item3-div2 d-block d-lg-none position-absolute'>
                        <a href='' style={{ color: 'black' }}><h5>KATE MCMILLAN</h5></a>
                        <p className='' style={{ color: 'green', fontWeight: 'bolder' }}>SALES MANAGER</p>
                        <Row className='text-center '>
                            <Col><a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a></Col>

                        </Row>
                    </div>
                </div>
                <div class='item3'>
                    <img src={sli34}></img>
                    <div className='item3-div position-absolute d-none d-lg-block'>
                        <h4 className='fort'>Hi! I’m</h4>
                        <a href='' style={{ color: 'black' }}><h5>RICK SIMMONS</h5></a>
                        <p className='pb-2' style={{ color: '#85B37E', fontWeight: 'bolder' }}>OWNER</p>
                        <Row className='text-center '>
                            <Col><a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a></Col>

                        </Row>
                        <div className='skew position-absolute'></div>
                    </div>
                    <div className='item3-div2 d-block d-lg-none position-absolute'>
                        <a href='' style={{ color: 'black' }}><h5>RICK SIMMONS</h5></a>
                        <p className='' style={{ color: 'green', fontWeight: 'bolder' }}>OWNER</p>
                        <Row className='text-center '>
                            <Col><a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a></Col>

                        </Row>
                    </div>
                </div>
                <div class='item3'>
                    <img src={sli33}></img>
                    <div className='item3-div position-absolute d-none d-lg-block'>
                        <h4 className='fort'>Hi! I’m</h4>
                        <a href='' style={{ color: 'black' }}><h5>JANE PETERSON</h5></a>
                        <p className='pb-2' style={{ color: '#85B37E', fontWeight: 'bolder' }}>FARM MANAGER</p>
                        <Row className='text-center '>
                            <Col><a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a></Col>

                        </Row>
                        <div className='skew position-absolute'></div>
                    </div>
                    <div className='item3-div2 d-block d-lg-none position-absolute'>
                        <a href='' style={{ color: 'black' }}><h5>JANE PETERSON</h5></a>
                        <p className='' style={{ color: 'green', fontWeight: 'bolder' }}>FARM MANAGER</p>
                        <Row className='text-center '>
                            <Col><a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a></Col>

                        </Row>
                    </div>
                </div>
                <div class='item3'>
                    <img src={sli32}></img>
                    <div className='item3-div position-absolute d-none d-lg-block'>
                        <h4 className='fort'>Hi! I’m</h4>
                        <a href='' style={{ color: 'black' }}><h5>SAM WILLIAMS</h5></a>
                        <p className='pb-2' style={{ color: '#85B37E', fontWeight: 'bolder' }}>FARMER</p>
                        <Row className='text-center '>
                            <Col><a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a></Col>

                        </Row>
                        <div className='skew position-absolute'></div>
                    </div>
                    <div className='item3-div2 d-block d-lg-none position-absolute'>
                        <a href='' style={{ color: 'black' }}><h5>SAM WILLIAMS</h5></a>
                        <p className='' style={{ color: 'green', fontWeight: 'bolder' }}>FARMER</p>
                        <Row className='text-center '>
                            <Col><a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a></Col>
                            <Col><a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a></Col>

                        </Row>
                    </div>
                </div>

            </OwlCarousel>
        </div></>
    )
}
export default Ourteam;