import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';

import last1 from '../image/last1.png';
import last2 from '../image/last2.png';
import last3 from '../image/last3.png';

import logo from '../image/logo.png';

import { FaLocationDot } from "react-icons/fa6";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaCarrot, FaFacebookF, FaTwitter, FaCameraRetro, FaGooglePlusG } from "react-icons/fa";
import { IoMdMenu, IoMdArrowForward, IoMdCall, IoIosMailUnread } from "react-icons/io";


function Footer() {
    return (
        <>
        <hr></hr>
            <Container>
                <div className='spacery footer text-center text-sm-start'>
                    <Row>
                        <Col xs={12} sm={6} lg={4} className='footer-left mt-4 mt-sm-0'>
                            <img src={logo}></img>
                            <p className='my-5'>Weekdays : <font className='ms-4 ms-sm-0 ms-lg-4'>08 : 00am - 08 : 00pm</font></p>
                            <p className='my-2'>Weekends : <font className='ms-4 ms-sm-0 ms-lg-4'>10 : 00am - 06 : 00pm</font></p>
                            <hr width='70%' className='my-4 mx-auto mx-md-0'></hr>
                            <Row className='footer-icon justify-content-between'>
                                <Col><p className='d-none d-md-block'>Get Social</p></Col>
                                <Col>
                                    <div className='d-flex'>
                                        <a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a>
                                        <a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a>
                                        <a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a>
                                        <a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a>
                                    </div>
                                </Col>
                            </Row>


                        </Col>
                        <Col xs={12} sm={6} lg={4} className='footer-center mt-4 mt-sm-0'>
                            <h4>CONTACTS</h4>
                            <div className='d-flex mt-5'>
                                <i className='me-3'><FaLocationDot></FaLocationDot></i>
                                <a href=''>523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</a>
                            </div>
                            <div className='d-flex mt-3'>
                                <i className='me-3'><IoMdCall></IoMdCall></i>
                                <a href=''>+1 (844) 123 456 78</a>
                            </div>
                            <div className='d-flex mt-3'>
                                <i className='me-3'><IoIosMailUnread></IoIosMailUnread></i>
                                <a href=''>info@demolink.org</a>
                            </div>
                        </Col>
                        <Col xs={12} lg={4} className='footer-right mt-4 mt-lg-0'>
                            <h4 className='text-sm-center pt-5 pt-lg-0 text-lg-start'>NEWSLETTER</h4>
                            <p className='mt-5'>Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts.</p>
                            <div className='d-flex mt-5'>
                                <input type='text' placeholder='Enter your e-mail' className='me-3'></input>
                                <button><a href=''><span><PiTelegramLogoLight  ></PiTelegramLogoLight ></span></a></button>

                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className='last-div pt-5 pb-4' style={{ backgroundColor: '#E8EAED' }}>
                <Container>
                    <Row className='text-center'>
                        <Col xs={12} sm={4}>
                            <p>© 2023 Farm.  All rights reserved.</p>
                        </Col>
                        <Col xs={12} sm={4} className='text-center'>
                            <div className='d-flex last-div2'>
                                <img src={last1}></img>
                                <img src={last2} className='ms-3'></img>
                                <img src={last3} className='ms-3'></img>
                            </div></Col>
                        <Col xs={12} sm={4}>
                            <p>Privacy Policy</p></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
 export default Footer;