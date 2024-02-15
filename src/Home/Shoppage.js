import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

import lat1 from '../image/lat1.png';
import lat2 from '../image/lat2.png';
import lat3 from '../image/lat3.png';
import lat4 from '../image/lat4.png';
import lat5 from '../image/lat5.png';
import lat6 from '../image/lat6.png';
import lat7 from '../image/lat7.png';
import lat8 from '../image/lat8.png';
import lat9 from '../image/lat9.png';
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

import pageleft1 from '../image/pageleft1.png';
import pageleft2 from '../image/pageleft2.png';
import pageleft3 from '../image/pageleft3.png';


function Shoppage() {
    return (
        <>
            <Header></Header>
            <div className="shop-page">
                <h1 className="text-center">GRID SHOP</h1>
            </div>
            <Container>
                <Row className='mt-5 shop-page2' style={{marginBottom:'90px',marginTop:'80px'}}>
                    <Col lg={4} className='p-4'>
                        <div className='text-center text-lg-start'>
                            <h5>FILTER BY PRICE</h5>
                            <hr></hr>
                            <div className='page-line my-5'>
                                <div className='page-line1'></div>
                                <div className='page-line2'></div>
                                <div className='page-line3'></div>
                            </div>
                            <div className='d-flex item-center justify-content-between'>
                                <button className='page-filter'><a href=''><span>FILTER</span></a></button>
                                <p>Price: $ 66 $ 635</p>
                            </div>
                        </div>

                        <Row>
                            <Col sm={6} lg={12} className='p-4'>
                                <div className=' mt-5'>
                                    <h5 className='text-center text-lg-start'>CATEGORIES</h5>
                                    <hr></hr>
                                    <div className=' my-5 check-box'>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <div className='d-flex'>
                                                <input type='checkbox'></input>
                                                <a href=''> <p>ALL</p></a>
                                            </div>
                                            <p>( 18 )</p>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <div className='d-flex'>
                                                <input type='checkbox'></input>
                                                <a href=''><p>Organic Food</p></a>
                                            </div>
                                            <p>( 9 )</p>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <div className='d-flex'>
                                                <input type='checkbox'></input>
                                                <a href=''><p>Health</p></a>
                                            </div>
                                            <p>( 5 )</p>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <div className='d-flex'>
                                                <input type='checkbox'></input>
                                                <a href=''><p>Smoothies</p></a>
                                            </div>
                                            <p>( 8 )</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between searchbar item-center'>
                                        <input type='text' placeholder='Search the shop ...' className='texttt'></input>
                                        <CiSearch style={{ fontSize: '40px' }} className='ms-3'></CiSearch>

                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} lg={12} className=' page-left p-4'>
                                <div className=' mt-5'>
                                    <h5 className='text-center text-lg-start'>POPULAR PRODUCTS</h5>
                                    <hr></hr>
                                    <div className='d-flex item-center'>
                                        <img src={pageleft1}></img>
                                        <div className='ms-5'>
                                            <p><a href=''>Galia Melons</a></p>
                                            <p style={{ color: ' #76aa6f' }} className='mb-0'>$25.00</p>
                                        </div>
                                    </div>
                                    <div className='d-flex item-center'>
                                        <img src={pageleft2}></img>
                                        <div className='ms-5'>
                                            <p><a href=''>Pineapples</a></p>
                                            <p style={{ color: ' #76aa6f' }} className='mb-0'>$30.00</p>
                                        </div>
                                    </div>
                                    <div className='d-flex item-center'>
                                        <img src={pageleft3}></img>
                                        <div className='ms-5'>
                                            <p><a href=''>Oranges</a></p>
                                            <p style={{ color: ' #76aa6f' }} className='mb-0'>$20.00</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={8}>
                        <div className='d-flex justify-content-between'>
                            <p>Showing 1–12 of 28 results</p>
                            <div><a href='' style={{color:'black'}}>sort by newsness...</a></div>
                        </div>

                        <Row>
                            <Col xxs sm={6} md={4} lg={6} xl={4} className=''>
                                <div className='mt-4 lat-ari2 position-relative text-center'><img src={lat2} ></img>
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
                            <Col xxs sm={6} md={4} lg={6} xl={4} className=''>
                                <div className='mt-4 lat-ari2 position-relative text-center'><img src={lat1} ></img>
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
                            <Col xxs sm={6} md={4} lg={6} xl={4} className=''>
                                <div className='mt-4 lat-ari2 position-relative text-center'><img src={lat3} ></img>
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
                            <Col xxs sm={6} md={4} lg={6} xl={4} className=''>
                                <div className='mt-4 lat-ari2 position-relative text-center'><img src={lat4} ></img>
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
                            <Col xxs sm={6} md={4} lg={6} xl={4} className=''>
                                <div className='mt-4 lat-ari2 position-relative text-center'><img src={lat6} ></img>
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
                            <Col xxs sm={6} md={4} lg={6} xl={4}  className=''>
                                <div className='mt-4 lat-ari2 position-relative text-center'><img src={lat7} ></img>
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
                            <Col xxs sm={6} md={4} lg={6} xl={4}  className=''>
                                <div className='mt-4 lat-ari2 position-relative text-center'><img src={lat5} ></img>
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
                            <Col xxs sm={6} md={4} lg={6} xl={4}  className=''>
                                <div className='mt-4 lat-ari2 position-relative text-center'><img src={lat8} ></img>
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
                            <Col xxs sm={6} md={4} lg={6} xl={4}  className=''>
                                <div className='mt-4 lat-ari2 position-relative text-center'><img src={lat9} ></img>
                                    <h5 style={{ color: 'black' }} className='mt-4 '>GALIA MELONES</h5>
                                    <h5>$18.00</h5>
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
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    )
}
export default Shoppage;