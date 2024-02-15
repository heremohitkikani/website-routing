import Footer from "./Footer";
import Header from "./Header";

import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { RiDoubleQuotesL } from "react-icons/ri";




function Typography() {
    return (
        <>
            <Header></Header>
            <div className="typo-image ">
                <h1 className="text-center">TYPOGRAPHY</h1>
            </div>
            <Container>
                <div style={{marginTop:'100px'}}>
                    <Row>
                        <Col lg={8} className="pe-lg-5 text-center text-md-start headings">
                            <h1 className="heading1">H1 HEADING</h1>
                            <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                            <h1 className="heading2">H2 HEADING</h1>
                            <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                            <h1 className="heading3">H3 HEADING</h1>
                            <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                            <h1 className="heading4">H4 HEADING</h1>
                            <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                            <h1 className="heading5">H5 HEADING</h1>
                            <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                            <h1 className="heading6">H6 HEADING</h1>
                            <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                        </Col>
                        <Col sm={12}lg={4} className="">
                            <Row>
                                <Col sm={6} lg={12} className="text-center mt-5 text-md-start typo-right-top ps-lg-4 ">
                                    <p style={{fontSize:'20px',color:'grey',letterSpacing:'2px'}}>GOOGLE FONTS</p>
                                    <h1 className="typo-poppins">Poppins</h1>
                                    <h2 className="typo-lato">Lato</h2>
                                    <h2 style={{ fontFamily: 'Forte' }}>Kalam</h2>
                                </Col>
                                <Col sm={6} lg={12} className="text-center mt-5 text-lg-start typo-right-bottom ps-lg-4">
                                <p style={{fontSize:'20px',color:'grey',letterSpacing:'2px'}}>USED COLORS</p>
                                    <div className="typo-div">
                                        <div className="d-flex typo-div1 justify-content-center justify-content-lg-start">
                                            <div className="typo-div11"></div>
                                            <div className="typo-div12"></div>
                                            <div className="typo-div13"></div>
                                            <div className="typo-div14"></div>
                                        </div>
                                        <div className="d-flex typo-div2 justify-content-center justify-content-lg-start ">
                                            <div className="typo-div21"></div>
                                            <div className="typo-div22"></div>
                                        </div>
                                        <div className="d-flex typo-div3 justify-content-center justify-content-lg-start">
                                            <div className="typo-div31"></div>
                                        </div>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h1 className="mt-5 mb-3 text-center text-md-start html-text">HTML TEXT ELEMENTS</h1>
                    <p className="mt-4">Welcome to our wonderful world. This is a bold text This is a highlighted textWe sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new loginTooltipswidgets, you will definitely have a great experience of using our web page.<strike>This is a strikethrough text</strike><u>This is an underlined</u> text.LinkHover linkPress link</p>
                </div>

                    <h1 className="mt-5 mb-3 typo-ordered text-center text-md-start">ORDERED & UNORDERED LISTS</h1>
                    <div className="d-flex typo-ul col-12 col-md-10 col-lg-6 flex-wrap flex-md-nowrap  justify-content-center">
                        <ul style={{listStyleType:'disc ',color:'grey'}} className="ms-4 mt-4 col-6 col-sm-6">
                            <li>Consulting</li>
                            <li>Customer Service</li>
                            <li>Innovations</li>
                            <li>Management</li>
                            <li>Ethics</li>
                        </ul>
                        <ul style={{listStyleType:'number ',color:'grey'}} className="ms-4 mt-4 col-6 col-sm-6">
                            <li>Consulting</li>
                            <li>Customer Service</li>
                            <li>Innovations</li>
                            <li>Management</li>
                            <li>Ethics</li>
                        </ul>
                    </div>
                    <div className="col-lg-10 col-xl-6 mt-5 blockqout text-center text-md-start">
                        <h1 >BLOCKQUOTE</h1>
                        <p className="mt-4"><i style={{fontSize:'40px',height:'30px',margin:'0 10px' ,color:'#76AA6F'}}><RiDoubleQuotesL></RiDoubleQuotesL></i>Welcome to our wonderful world. We sincerely hope that you will enjoy visiting our website.</p>
                        <hr className="my-4"></hr>
                    </div>
                    <h5 style={{color:'green',paddingBottom:'70px'}} className="text-center text-md-start">PATRICK GOODMAN</h5>

            </Container>
            <Footer></Footer>
        </>
    )
}
export default Typography;