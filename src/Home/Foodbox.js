import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';

import fbox1 from '../image/fbox1.jpeg';
import fbox2 from '../image/fbox2.jpeg';
import fbox3 from '../image/fbox3.jpeg';

function Foodbox() {
    return (
        <>
            <Container className='spacery containerr '>
                <Row className='text-center'>
                    <Col sm={7} className='position-relative'>
                        <a href=''><img src={fbox1} className='fimg1'></img></a>
                    </Col>
                    <Col sm={5}>
                        <a href=''> <img src={fbox2} className='fimg2'></img></a>
                        <a href=''> <img src={fbox3} className='mt-4 fimg3'></img></a>

                    </Col>
                </Row>
            </Container></>
    )
}

export default Foodbox;