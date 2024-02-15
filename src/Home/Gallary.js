import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { FaArrowsAltH } from "react-icons/fa";

import { Link } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import img1 from '../image-gallary/img1.jpeg';
import img2 from '../image-gallary/img2.jpeg';
import img3 from '../image-gallary/img3.jpeg';
import img4 from '../image-gallary/img4.jpeg';
import img5 from '../image-gallary/img5.jpeg';
import img6 from '../image-gallary/img6.jpeg';


function Gallary() {
    return (
        <>
            <Header></Header>


            <div className="image-gallary ">

                <h1 className="text-center">GRID GALLARY</h1></div>
            {/* <div className='d-flex justify-content-center'>
                <Link to='/'>HOME<FaArrowsAltH></FaArrowsAltH> </Link>
                <Link to='/Gallary'>GALLARY<FaArrowsAltH></FaArrowsAltH></Link>
                <p>GRID GALLARY</p>
            </div> */}
            {/* <ul className='d-flex justify-content-center'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Gallary">Gallary</Link></li>
                <li><Link to="">Grid Gallary</Link></li>
                <li>sSA</li>
            </ul> */}
            <Container>
                <Row className='grid-img  ' style={{ paddingBottom: '70px' }}>
                    <Col sm={6} lg={4}>
                        <div className='grid-div'>
                            <img src={img1}></img>
                            <div className='grid-div2 text-center py-auto'>
                                <a href=''>SUMMER FRUIT MIX</a>
                                <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-4'>$13.00</p>
                                <div className='grid-icon'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='grid-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>

                            </div>
                            <div className='grid-div3'></div>
                        </div>
                        <div className='text-center grid-div4 d-block d-lg-none'>
                            <a href=''>SUMMER FRUIT MIX</a>
                            <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-2'>$13.00</p>
                            <div className=''>
                                <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                <button className=' ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                            </div>
                        </div>

                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='grid-div'>
                            <img src={img2}></img>
                            <div className='grid-div2 text-center py-auto d-none d-lg-block'>
                                <a href=''>APPLE & MINT SMOTHEE</a>
                                <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-4'>$11.00</p>
                                <div className='grid-icon'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='grid-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                            <div className='grid-div3' d-none d-lg-block></div>

                        </div>
                        <div className='text-center grid-div4 d-block d-lg-none'>
                            <a href=''>APPLE & MINT SMOTHEE</a>
                            <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-2'>$11.00</p>
                            <div className=''>
                                <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                <button className=' ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                            </div>
                        </div>

                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='grid-div'>
                            <img src={img3}></img>
                            <div className='grid-div2 text-center py-auto d-none d-lg-block'>
                                <a href=''>AVOCADO ICE-CREAME</a>
                                <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-4'>$13.99</p>
                                <div className='grid-icon'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='grid-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                            <div className='grid-div3 d-none d-lg-block'></div>

                        </div>
                        <div className='text-center grid-div4 d-block d-lg-none'>
                            <a href=''>AVOCADO ICE-CREAME</a>
                            <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-2'>$13.99</p>
                            <div className=''>
                                <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                <button className=' ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                            </div>
                        </div>

                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='grid-div'>
                            <img src={img4}></img>
                            <div className='grid-div2 text-center py-auto d-none d-lg-block'>
                                <a href=''>GRAPEFRUITE & LEMON MIX</a>
                                <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-4'>$10.00</p>
                                <div className='grid-icon'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='grid-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                            <div className='grid-div3 d-none d-lg-block'></div>

                        </div>
                        <div className='text-center grid-div4 d-block d-lg-none'>
                            <a href=''>GRAPEFRUITE & LEMON MIX</a>
                            <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-2'>$10.00</p>
                            <div className=''>
                                <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                <button className=' ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                            </div>
                        </div>

                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='grid-div'>
                            <img src={img5}></img>
                            <div className='grid-div2 text-center py-auto d-none d-lg-block'>
                                <a href=''>CHERRY TAMETOES</a>
                                <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-4'>$15.00</p>
                                <div className='grid-icon'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='grid-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                            <div className='grid-div3 d-none d-lg-block'></div>

                        </div>
                        <div className='text-center grid-div4 d-block d-lg-none'>
                            <a href=''>CHERRY TAMETOES</a>
                            <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-2'>$15.00</p>
                            <div className=''>
                                <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                <button className=' ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                            </div>
                        </div>

                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='grid-div'>
                            <img src={img6}></img>
                            <div className='grid-div2 text-center py-auto d-none d-lg-block'>
                                <a href=''>VEGETABLE MIX</a>
                                <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-4'>$12.99</p>
                                <div className='grid-icon'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='grid-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                            <div className='grid-div3 d-none d-lg-block'></div>

                        </div>
                        <div className='text-center grid-div4 d-block d-lg-none'>
                            <a href=''>VEGETABLE MIX</a>
                            <p style={{ color: 'green', fontWeight: 'bolder' }} className='pt-2'>$13.00</p>
                            <div className=''>
                                <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                <button className=' ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                            </div>
                        </div>

                    </Col>


                </Row>
            </Container>

            <Footer></Footer>
        </>
    )
}
export default Gallary;