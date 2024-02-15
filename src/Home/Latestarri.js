import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import lat1 from '../image/lat1.png';
import lat2 from '../image/lat2.png';
import lat3 from '../image/lat3.png';
import lat4 from '../image/lat4.png';
import lat5 from '../image/lat5.png';
import lat6 from '../image/lat6.png';
import lat7 from '../image/lat7.png';
import lat8 from '../image/lat8.png';
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

function Latestarri() {
    return (
        <>
            <Container>
                <div className='spacery text-center containerr'>
                    <h2 className='forte '> Latest Arrivals</h2>
                    <h1 className='mt-4'> NEW PRODUCTS</h1>
                    <Row className='mt-5'>

                        <Col xxs sm={6} md={4} lg={3} className=''>
                            <div className='mt-4 lat-ari2 position-relative'><img src={lat2} ></img>
                                <h5 style={{ color: 'black' }} className='mt-4 mb-3'>POTATOES</h5>
                                <h5>$13.00</h5>
                                <span className='position-absolute span'>SALE</span>
                                <div className='latest-icon pt-1 position-absolute d-none d-lg-block'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                                <div className='latest-icon3 pt-1 d-block d-lg-none'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                                
                                
                            </div>
                        </Col>
                        <Col xxs sm={6} md={4} lg={3} className=''>
                            <div className='mt-4 lat-ari2 position-relative'><img src={lat1} ></img>
                                <h5 style={{ color: 'black' }} className='mt-4 '>CUCUMBERS</h5>
                                <h5><strike style={{ color: 'grey' }} className='me-2'>$32.00</strike> $22.00</h5>
                                <span className='position-absolute span' style={{ backgroundColor: 'grey' }}>NEW</span>
                                <div className='latest-icon pt-1 position-absolute d-none d-lg-block'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                                <div className='latest-icon3 pt-1 d-block d-lg-none'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                        </Col>
                        <Col xxs sm={6} md={4} lg={3} className=''>
                            <div className='mt-4 lat-ari2 position-relative'><img src={lat3} ></img>
                                <h5 style={{ color: 'black' }} className='mt-4 '>CARROTS</h5>
                                <h5>$17.00</h5>
                                <div className='latest-icon pt-1 position-absolute d-none d-lg-block'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                                <div className='latest-icon3 pt-1 d-block d-lg-none'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                        </Col>
                        <Col xxs sm={6} md={4} lg={3} className=''>
                            <div className='mt-4 lat-ari2 position-relative'><img src={lat4} ></img>
                                <h5 style={{ color: 'black' }} className='mt-4 '>SWEET PEPPERS</h5>
                                <h5>$17.00</h5>
                                <span className='position-absolute span' style={{ backgroundColor: 'grey' }}>NEW</span>
                                <div className='latest-icon pt-1 position-absolute d-none d-lg-block'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                                <div className='latest-icon3 pt-1 d-block d-lg-none'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                        </Col>
                        <Col xxs sm={6} md={4} lg={3} className=''>
                            <div className='mt-4 lat-ari2 position-relative'><img src={lat6} ></img>
                                <h5 style={{ color: 'black' }} className='mt-4 '>BREAD</h5>
                                <h5>$11.00</h5>
                                <span className='position-absolute span' style={{ backgroundColor: 'grey' }}>NEW</span>
                                <div className='latest-icon pt-1 position-absolute d-none d-lg-block'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                                <div className='latest-icon3 pt-1 d-block d-lg-none'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                        </Col>
                        <Col xxs sm={6} md={4} lg={3} className=''>
                            <div className='mt-4 lat-ari2 position-relative'><img src={lat7} ></img>
                                <h5 style={{ color: 'black' }} className='mt-4 '>STRAWBERRIES</h5>
                                <h5>$15.00</h5>
                                <div className='latest-icon pt-1 position-absolute d-none d-lg-block'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                                <div className='latest-icon3 pt-1 d-block d-lg-none'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                        </Col>
                        <Col xxs sm={6} md={4} lg={3} className=''>
                            <div className='mt-4 lat-ari2 position-relative'><img src={lat5} ></img>
                                <h5 style={{ color: 'black' }} className='mt-4 mb-3'>BAGELS</h5>
                                <h5>$10.00</h5>
                                <span className='position-absolute span'>SALE</span>
                                <div className='latest-icon pt-1 position-absolute d-none d-lg-block'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                                <div className='latest-icon3 pt-1 d-block d-lg-none'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                        </Col>
                        <Col xxs sm={6} md={4} lg={3} className=''>
                            <div className='mt-4 lat-ari2 position-relative'><img src={lat8} ></img>
                                <h5 style={{ color: 'black' }} className='mt-4 '>STRAWBERRIES</h5>
                                <h5>$15.00</h5>
                                <div className='latest-icon pt-1 position-absolute d-none d-lg-block'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                                <div className='latest-icon3 pt-1 d-block d-lg-none'>
                                    <button className='me-2'><a href=''><span><CiSearch ></CiSearch></span></a></button>
                                    <button className='latest-icon2 ms-2'><a href=''><span><CiShoppingCart ></CiShoppingCart></span></a></button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
        </>
    )
}
export default Latestarri;