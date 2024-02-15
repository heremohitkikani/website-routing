import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import t1 from '../image/t1.png';
import t2 from '../image/t2.png';
import t3 from '../image/t3.png';
import t4 from '../image/t4.png';
function Thirdsec() {
    return (
        <>
            <div className='third-sec'>
                <Container>
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

            </div></>
    );
}
export default Thirdsec;