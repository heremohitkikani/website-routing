import Footer from "./Footer";
import Header from "./Header";

import imgicon1 from '../imageicon/imgicon1.svg';
import imgicon2 from '../imageicon/imgicon2.svg';
import imgicon3 from '../imageicon/imgicon3.svg';
import t2 from '../image/t2.png';
import t3 from '../image/t3.png';
import t4 from '../image/t4.png';
import t1 from '../image/t1.png';

import { CiLocationOn,CiHeart  } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";

import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';


function Iconlist() {
    return (
        <>
            <Header></Header>
            <div className="icon-list ">
                <h1 className="text-center">ICON LISTS</h1>
            </div>
            {/* =========================================================  # 1 start============================================= */}
            <div className='third-sec icon-list2'>
                <Container>
                    <h1 className="text-center iconh1 my-5">#1</h1>
                    <Row className='third-sec2'>
                        <Col md={6} lg={3} className='text-center text-lg-start'>
                            <Row>
                                <Col className='mb-2'><h1>01</h1></Col>
                                <Col><img src={t1}></img></Col>
                            </Row>
                            <h2><a href=''>ALWAYS FRESH </a></h2>
                            <p>Thanks to innovative organic technologies, our products are always fresh and don’t need any treatment.</p>
                        </Col>
                        <Col md={6} lg={3} className='text-center text-lg-start'>
                            <Row>
                                <Col className='mb-2'><h1>02</h1></Col>
                                <Col><img src={t2}></img></Col>
                            </Row>
                            <h2><a href=''>100% ORGANIC</a></h2>
                            <p>We adhere to our organic philosophy, which implies avoiding pesticides and non-organic fertilizers.</p>
                        </Col>
                        <Col md={6} lg={3} className='text-center text-lg-start'>
                            <Row>
                                <Col className='mb-2'><h1>03</h1></Col>
                                <Col><img src={t3}></img></Col>
                            </Row>
                            <h2><a href=''>NO ADDITIVES </a></h2>
                            <p>We avoid any artificial additives after harvesting the crops to offer you the best organic products.</p>
                        </Col>
                        <Col md={6} lg={3} className='text-center text-lg-start'>
                            <Row>
                                <Col className='mb-2'><h1>04</h1></Col>
                                <Col><img src={t4}></img></Col>
                            </Row>
                            <h2><a href=''>MODERN FARM </a></h2>
                            <p>Though we rely on traditional organic farming a lot, we also use the latest farming innovations.</p>
                        </Col>

                    </Row>
                </Container>

            </div>
            {/* =========================================================  # 1 end============================================= */}
            {/* =========================================================  # 2 start============================================= */}
            <Container>
                <h1 className="text-center iconh2 my-5">#2</h1>
                <Row className="iconlist-second">
                    
                    <Col xs={12} sm={6} lg={4} >
                       <div style={{border:'1px solid #d2d2d2'}} className=" p-4">
                       <div className="d-xl-flex text-center text-md-start">
                            <div  className=" col-lg-2 "><i><CiLocationOn></CiLocationOn></i></div>
                            <div className=""><a href=""><h5>FREE DELIVERY</h5></a>
                                <p>Enjoy our fast & free delivery</p>
                            </div>
                        </div>
                       </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4} >
                       <div style={{border:'1px solid #d2d2d2'}} className=" p-4">
                       <div className="d-xl-flex text-center text-md-start">
                            <div  className=" col-lg-2 "><i><TiMessages></TiMessages></i></div>
                            <div className=""><a href=""><h5>CUSTOMER CARE</h5></a>
                                <p>Always ready to help you</p>
                            </div>
                        </div>
                       </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4} >
                       <div style={{border:'1px solid #d2d2d2'}} className=" p-4">
                       <div className="d-xl-flex text-center text-md-start">
                            <div  className=" col-lg-2 "><i><CiHeart></CiHeart></i></div>
                            <div className=""><a href=""><h5>HEALTHY & ENERGETIC</h5></a>
                                <p>Our drinks are very nutritious</p>
                            </div>
                        </div>
                       </div>
                    </Col>
                </Row>
            </Container>
            {/* =========================================================  # 2 end============================================= */}

            {/* =========================================================  # 3 start============================================= */}
            <Container>
                <h1 className="text-center iconh3 my-5">#3</h1>
                <Row className="iconlist-second " style={{paddingBottom:'90px'}}>
                    
                    <Col xs={12} sm={6} lg={4} >
                       <div style={{border:'1px solid #d2d2d2'}} className=" p-4">
                       <div className="d-xl-flex text-center text-md-start">
                            <div  className=" col-lg-2 mt-3 "><img src={imgicon1}></img></div>
                            <div className="ms-xl-5 mt-3 mt-xl-0"><a href=""><h3>100% ORGANIC</h3></a>
                                <p>Cur tantas regiones barbarorum peat dibus obiit, tregiones barbarorum peat dibus obiit</p>
                            </div>
                        </div>
                       </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4} >
                       <div style={{border:'1px solid #d2d2d2'}} className=" p-4">
                       <div className="d-xl-flex text-center text-md-start">
                            <div  className=" col-lg-2 mt-3 "><img src={imgicon2}></img></div>
                            <div className="ms-xl-5 mt-3 mt-xl-0"><a href=""><h3>NO ADDITIVES</h3></a>
                                <p>Magnum frondators ducunt ad fiscina. Noster, camerarius nomens rare pugna de grandis, albus nix.</p>
                            </div>
                        </div>
                       </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4} >
                       <div style={{border:'1px solid #d2d2d2'}} className=" p-4">
                       <div className="d-xl-flex text-center text-md-start">
                            <div  className=" col-lg-2 mt-3 "><img src={imgicon3}></img></div>
                            <div className="ms-xl-5 mt-3 mt-xl-0"><a href=""><h3>MODERN FARM</h3></a>
                                <p>Noster axona una dignuss eleates est. Cum galatae credere, omnes bursaes carpseris brevis, albus.</p>
                            </div>
                        </div>
                       </div>
                    </Col>
                </Row>
            </Container>
            {/* =========================================================  # 3 end============================================= */}

           



            <Footer></Footer>
        </>
    )
}
export default Iconlist;