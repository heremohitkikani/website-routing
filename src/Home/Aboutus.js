import '../App.css';
import '../media.css';
import about2 from '../image/about2.png';
import about from '../image/about.jpeg';
import { IoMdMenu, IoMdArrowForward, IoMdCall, IoIosMailUnread } from "react-icons/io";
import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';


function Aboutus() {
    return (
        <>
            <Container>
                <Row className='spacery about'>
                    <Col xs={12} md={5} lg={6} className='px-auto text-center'><img src={about} className='about1'></img></Col>
                    <Col className='text-center text-md-start'><h3 className='forte '>A Few Words About Our Farm</h3>
                        <h1 className='mt-4'>ABOUT US</h1>
                        <p className='mt-5 pe-5 '>Farm is made up of two certified organic properties, where our farmers are constantly growing organic vegetables, crops, and fruits of the highest quality in the US.</p>
                        <Row className='mt-5'>
                            <Col className='d-flex'>
                                <div className='fs-2 about-icon'>
                                    <a href=''> <i>
                                    </i></a>
                                    <button><a href=''><span><IoMdArrowForward ></IoMdArrowForward></span></a></button>
                                </div>
                                <div className='ms-3'>
                                    <h5>SAM WILLIAMS</h5>
                                    <p style={{ color: '#4C8208', fontWeight: 'bolder', fontStyle: 'italic' }}>Farm Founder</p>
                                </div>

                            </Col>
                            <Col className='ps-5'>
                                <img src={about2}></img>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container></>
    );
}
export default Aboutus;