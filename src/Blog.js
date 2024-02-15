import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

import blog1 from '../image-blog/blog1.jpeg';
import blog2 from '../image-blog/blog2.jpeg';
import blog3 from '../image-blog/blog3.jpeg';
import blog4 from '../image-blog/blog4.jpeg';
import blog5 from '../image-blog/blog5.jpeg';
import blog6 from '.        ./image-blog/blog6.jpeg';


import Footer from "./Footer";
import Header from "./Header";

// import React from 'react';
function Blog() {
    return (
        <>
            <Header></Header>
            <div className="image-blog ">
                <h1 className="text-center">GRID BLOG</h1>
            </div>
            <Container>
                <Row className='image-blog2'>
                    <Col sm={6} lg={4}>
                        <div className='image-blog3'>
                            <img src={blog1}></img>
                        </div>
                        <div className='p-5 p-sm-1 p-md-3 p-lg-4 image-blog4'>
                            <p className='pt-2'>August 9, 2023</p>
                            <h5 className='py-2'><a href='' style={{color:'black'}}>Top 5 Easy and Cheap Organic Breakfast Recipes</a></h5>
                            <p>Est velox nuptia, cesaris. Est dexter turpis, cesaris. Cum nixus persuadere, omnes fluctuies promissio flavum</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='image-blog3'>
                            <img src={blog2}></img>
                        </div>
                        <div className='p-5 p-sm-1 p-md-3 p-lg-4 image-blog4'>
                            <p className='pt-2'>August 9, 2023</p>
                            <h5 className='py-2'><a href='' style={{color:'black'}}>Everyday Dinner Choices for a Healthier, Happier You</a></h5>
                            <p>Sensorems peregrinatione in rugensis civitas! Ubi est bi-color byssus? Velox, teres ollas recte aperto de castus</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='image-blog3'>
                            <img src={blog3}></img>
                        </div>
                        <div className='p-5 p-sm-1 p-md-3 p-lg-4 image-blog4'>
                            <p className='pt-2'>August 9, 2023</p>
                            <h5 className='py-2'><a href='' style={{color:'black'}}>Standardizing the Organic Industry in the USA</a></h5>
                            <p>Talis tus acceleratrix contactuss lixa est. Pol, a bene equiso. Cum nuptia peregrinatione, omnes adgiumes visum</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='image-blog3'>
                            <img src={blog4}></img>
                        </div>
                        <div className='p-5 p-sm-1 p-md-3 p-lg-4 image-blog4'>
                            <p className='pt-2'>August 9, 2023</p>
                            <h5 className='py-2'><a href='' style={{color:'black'}}>Making Your Food Organic in a Few Simple Steps</a></h5>
                            <p>Cum zeta experimentum, omnes scutumes fallere domesticus, salvus lapsuses. Neuter, teres calcarias unus</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='image-blog3'>
                            <img src={blog5}></img>
                        </div>
                        <div className='p-5 p-sm-1 p-md-3 p-lg-4 image-blog4'>
                            <p className='pt-2'>August 9, 2023</p>
                            <h5 className='py-2'><a href='' style={{color:'black'}}>Why Organic Farming Keeps Getting Globally Popular</a></h5>
                            <p>Orgia, nixus, et zirbus. Vortexs volare in hafnia! Domesticus, dexter pess inciviliter desiderium de fortis</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={4}>
                        <div className='image-blog3'>
                            <img src={blog6}></img>
                        </div>
                        <div className='p-5 p-sm-1 p-md-3 p-lg-4 image-blog4'>
                            <p className='pt-2'>August 9, 2023</p>
                            <h5 className='py-2'><a href='' style={{color:'black'}}>How to Make Your Breakfast Easy and Yummy</a></h5>
                            <p>Cur contencio studere? Finis mirabilis buxum est. Ferox lumen grauiter resuscitabos hydra est. Magnum byssus</p>
                        </div>
                    </Col>
          
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
}
export default Blog;