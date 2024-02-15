import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';


import Footer from "./Footer";
import Header from "./Header";

import about from '../aboutus/about-img.jpeg';


function Aboutpage() {
    return (
        <>
            <Header></Header>
            <div className="page-about ">

                <h1 className="text-center">ABOUT US</h1>
                <p className="text-center mt-3" style={{ color: 'white', fontSize: '20px' }}>We are industry-leading organic farm delivering the best products<br></br>
                    that boost your daily life energy and potential.</p></div>
                    <Container>
                    <Row>
                        <Col lg={6}>ddd</Col>
                        <Col lg={6}>ddd</Col>
                    </Row>
                    </Container>
            <Footer></Footer>
        </>
    )
}

export default Aboutpage;