
import '../App.css';
import '../media.css';

import { Link } from "react-router-dom";

import { Container, Row, Col, Button, Offcanvas, Accordion } from 'react-bootstrap';
// ====================================files===================================
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// ====================================icon===================================

import { IoMdMenu, IoMdArrowForward, IoMdCall, IoIosMailUnread } from "react-icons/io";
import { MdOutlineMenuOpen } from "react-icons/md";
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { BsStack } from "react-icons/bs";
import { FaCarrot, FaFacebookF, FaTwitter, FaCameraRetro, FaGooglePlusG } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
// ====================================image===================================

import logo from '../image/logo.png';
import mega from '../image/mega.jpeg';
import off1 from '../image/off1.jpeg';
import off2 from '../image/off2.jpeg';
import off3 from '../image/off3.jpeg';
import { useState } from 'react';

const offcan = {
    responsive: {

        items: 1,

    }
}

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <>
            <div className='header py-sm-3 py-lg-0'>
                <Container>
                    <Row className='top-info justify-content-between align-items-center '>
                        <Col xs={6} md='auto'>

                            <Button onClick={handleShow1} className=' d-lg-none top-inside'>
                                <FiMenu></FiMenu>
                            </Button>

                            <Offcanvas show={show1} onHide={handleClose1} placement={'start'} className>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title className='text-center'> <img src={logo} className='' width='100px'></img></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header ><Link to="/" className='p-2' style={{color:'#4b7945',fontWeight:'bold',letterSpacing:'2px'}}>HOME</Link></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='accor-a'>
                                                    <li><a href=''>SMOOTH SHOP</a></li>
                                                    <li><a href=''>FARM</a></li>
                                                    <li><a href=''>FRUIT TEAM</a></li>
                                                    <li><a href=''>POULTRY FARM</a></li>
                                                    <li><a href=''>WINERY</a></li>
                                                    <li><a href=''>DAIRY FARM</a></li>
                                                </ul>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header ><Link to="/" className='p-2' style={{color:'#4b7945',fontWeight:'bold',letterSpacing:'2px'}}>PAGES</Link></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='accor-a'>
                                                    <li><Link to="/Aboutpage">ABOUT US</Link></li>
                                                    <li><a href=''>FARM</a></li>
                                                    <li><a href=''>FRUIT TEAM</a></li>
                                                    <li><a href=''>POULTRY FARM</a></li>
                                                    <li><a href=''>WINERY</a></li>
                                                    <li><a href=''>DAIRY FARM</a></li>
                                                </ul>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header ><Link to="/Blog" className='p-2' style={{color:'#4b7945',fontWeight:'bold',letterSpacing:'2px'}}>BLOG</Link></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='accor-a'>
                                                    <li><a href=''>GRID BLOG</a></li>
                                                    <li><a href=''>BLOG LIST</a></li>
                                                    <li><a href=''>BLOG POST</a></li>
                                                </ul>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header ><Link to="/Gallary" className='p-2' style={{color:'#4b7945',fontWeight:'bold',letterSpacing:'2px'}}>GALLARY</Link></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='accor-a'>
                                                    <li><a href=''>GRID GALLARY</a></li>
                                                    <li><a href=''>GRID FULLWIDTH GALLARY</a></li>
                                                    <li><a href=''>MASONRY GALLARY</a></li>
                                                    <li><a href=''>MASONRY FULLWIDTH GALLARY </a></li>
                                                </ul>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header ><Link to="" className='p-2' style={{color:'#4b7945',fontWeight:'bold',letterSpacing:'2px'}}>ELEMENTES</Link></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='accor-a'>
                                                    <li><a href=''><Link to="/Typography">TYPOGRAPHY</Link></a></li>
                                                    <li><a href=''><Link to="/Iconlist">ICON LIST</Link></a></li>
                                                    <li><a href=''>PROGRESS BARS</a></li>
                                                    <li><a href=''>CALL TO ACTION</a></li>
                                                    <li><a href=''>BUTTONS</a></li>
                                                    <li><a href=''>TABLES</a></li>
                                                    <li><a href=''>FORMS</a></li>
                                                    <li><a href=''>COUNTERS</a></li>
                                                    <li><a href=''>GRID SYSTEM</a></li>
                                                    <li><a href=''>404 PAGE</a></li>
                                                    <li><a href=''>COMING SOON</a></li>
                                                    <li><a href=''>CONTACT US</a></li>
                                                    <li><a href=''>TERMS OF USE</a></li>
                                                    <li><a href=''>SEARCH RESULTS</a></li>

                                                </ul>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header ><Link to="/Shoppage" className='p-2' style={{color:'#4b7945',fontWeight:'bold',letterSpacing:'2px'}}>SHOP</Link></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='accor-a'>
                                                    <li><a href=''>ECVID SHOP</a></li>
                                                    <li><a href=''>GRID SHOP</a></li>
                                                    <li><a href=''>SHOP LIST</a></li>
                                                    <li><a href=''>SINGLE PRODUCT</a></li>
                                                    <li><a href=''>CART PAGE</a></li>
                                                    <li><a href=''>CHECKOUT</a></li>
                                                </ul>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        

                                    </Accordion>
                                </Offcanvas.Body>
                            </Offcanvas>
                            <img src={logo} className='ms-1 ms-sm-4 ms-lg-0'></img>
                        </Col>
                        <Col md='auto' className='d-sm-none d-lg-block top-none'>
                            <ul className='d-flex main-menu ' style={{ letterSpacing: '1px' }}>
                                <li><Link to="/">HOME</Link>
                                    <ul className='sub-menu'>
                                        <li><a href=''>SMOOTHIE SHOP</a></li>
                                        <li><a href=''>FARM</a></li>
                                        <li><a href=''>FRUIT FARM</a></li>
                                        <li><a href=''>POULTRY FARM</a></li>
                                        <li><a href=''>WINERY</a></li>
                                        <li><a href=''>DAIRY FARM</a></li>
                                    </ul>
                                </li>
                                <li><a href=''>PAGES</a>.
                                    <ul className='sub-menu'>
                                        <li><Link to="/Aboutpage">ABOUT US</Link></li>
                                        <li><a href=''>WHAT WE OFFER</a></li>
                                        <li><a href=''>OUR TEAM</a></li>
                                        <li><a href=''>TESTIMONIALS</a></li>
                                        <li><a href=''>PRICING LIST</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/Blog">BLOG</Link>

                                    <ul className='sub-menu'>
                                        <li><a href=''>GRID BLOG</a></li>
                                        <li><a href=''>BLOG LIST</a></li>
                                        <li><a href=''>BLOG POST</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/Gallary">GALLARY</Link>
                                    <ul className='sub-menu'>
                                        <li><a href=''>GRID GALLERY</a></li>
                                        <li><a href=''>GRID FULLWIDTH GALLERY</a></li>
                                        <li><a href=''>MASONRY GALLERY</a></li>
                                        <li><a href=''>MASONRY FULLWIDTH GALLERY</a></li>
                                    </ul>
                                </li>
                                <li className='megaa'><a href=''>ELEMENTES</a>
                                    <div className='mega-menu'>
                                        <div className='mega d-flex space-between'>
                                            <div className='w-50 ps-5'>

                                                <p className='fs-6' style={{ letterSpacing: '2px', color: '#76aa6f', fontWeight: 'bold' }}><i className='me-2 fs-2 mega-left'><MdOutlineMenuOpen></MdOutlineMenuOpen></i>ELEMENTS</p>
                                                <hr width='80%'></hr>
                                                <div className='d-flex'>
                                                    <ul style={{ letterSpacing: '2px' }}>
                                                        <li><Link to="/Typography">TYPOGRAPHY</Link></li>
                                                        <li><Link to="/Iconlist">ICON LIST</Link></li>
                                                        <li><a href=''>PROGRESS BARS</a></li>
                                                        <li><a href=''>CALLS TO ACTION</a></li>
                                                        <li><a href=''>TABS & ACCORDIONS</a></li>
                                                    </ul>
                                                    <ul style={{ letterSpacing: '2px' }}>
                                                        <li><a href=''>BUTTONS</a></li>
                                                        <li><a href=''>TABLES</a></li>
                                                        <li><a href=''>FORMS</a></li>
                                                        <li><a href=''>COUNTERS</a></li>
                                                        <li><a href=''>GRID SYSTEM</a></li>

                                                    </ul>

                                                </div>
                                            </div>
                                            <div className='w-30'>
                                                <p className='fs-6' style={{ letterSpacing: '2px', color: '#76aa6f', fontWeight: 'bold' }}><i className='me-2 fs-3 mega-left'><BsStack></BsStack></i>ADDITIONAL PAGES</p>
                                                <hr width='80%'></hr>
                                                <ul style={{ letterSpacing: '2px' }}>
                                                    <li><a href=''>404 PAGE</a></li>
                                                    <li><a href=''>COMING SOON</a></li>
                                                    <li><a href=''>CONTACT US</a></li>
                                                    <li><a href=''>TERMS OF USE</a></li>
                                                    <li><a href=''>SEARCH RESULTS</a></li>
                                                </ul>
                                            </div>
                                            <div className='w-30'>
                                                <p className='fs-6' style={{ letterSpacing: '2px', color: '#76aa6f', fontWeight: 'bold' }}><i className='me-2 fs-3 mega-left'><FaCarrot></FaCarrot></i>WELCOME TO OUR STORE</p>
                                                <hr width='90%'></hr>
                                                <img src={mega}></img>
                                            </div>
                                        </div>
                                    </div></li>

                                <li><Link to="/Shoppage">SHOP</Link>
                                    <ul className='sub-menu'>
                                        <li><a href=''>ECWID SHOP</a></li>
                                        <li><a href=''>GRID SHOP</a></li>
                                        <li><a href=''>SHOP LIST</a></li>
                                        <li><a href=''>SINGLE PRODUCT</a></li>
                                        <li><a href=''>CART PAGE</a></li>
                                        <li><a href=''>CHECKOUT</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </Col>
                        <Col xs={6} md='auto top-info-right'>
                            <ul className='d-flex justify-content-end'>
                                <li><a href=''><CiSearch></CiSearch></a></li>
                                <li className='px-4'><a href=''><CiShoppingCart></CiShoppingCart></a></li>
                                <li className='d-none d-lg-block'><a href=''><CiMenuBurger></CiMenuBurger></a></li>

                                <Button onClick={handleShow} className=' d-lg-none top-inside'>
                                    <TbDotsVertical></TbDotsVertical>
                                </Button>

                                <Offcanvas show={show} onHide={handleClose} placement={'end'} className>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title className='text-center'>OUR CONTACTS</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <OwlCarousel className='owl-theme slider-offcan header-slider' autoplay autoplayTimeout={1000} margin={40}{...offcan} items={1} nav={false} loop  >
                                            <div class='item'>
                                                <img src={off1}></img>
                                            </div>
                                            <div class='item'>
                                                <img src={off2}></img>

                                            </div>
                                            <div class='item'>
                                                <img src={off3}></img>

                                            </div>

                                        </OwlCarousel>
                                        <p className='text-center px-5 pt-5'>523 Sylvan Ave, 5th Floor
                                            Mountain View, CA 94041 USA</p>
                                        <hr width='40%' className='mx-auto my-4'></hr>
                                        <p className='text-center'>+1 (844) 123 456 78</p>
                                        <div className='d-flex mt-4 justify-content-evenly'>
                                            <a href='' style={{ color: 'black' }}><FaFacebookF></FaFacebookF></a>
                                            <a href='' style={{ color: 'black' }}><FaTwitter></FaTwitter></a>
                                            <a href='' style={{ color: 'black' }}><FaCameraRetro></FaCameraRetro></a>
                                            <a href='' style={{ color: 'black' }}><FaGooglePlusG></FaGooglePlusG></a>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>

                            </ul>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
}
export default Header;
