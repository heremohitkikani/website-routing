import cli1 from '../image/cli1.png';
import cli2 from '../image/cli2.png';
import cli3 from '../image/cli3.jpeg';
import sli21 from '../image/sli21.jpeg';
import sli22 from '../image/sli22.jpeg';
import sli23 from '../image/sli23.jpeg';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { LuArrowBigRightDash } from "react-icons/lu";

const slider2 = {
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false,
        },
        600: {
            dots: true,
            nav: false,
        },
        1000: {

        }
    }
}
function Ourclient() {
    return (
        <>
            <div className='our-clients position-relative text-center'>
                <img src={cli1} className='cli-img1 position-absolute'></img>
                <img src={cli2} className='cli-img2 position-absolute'></img>
                <div>
                    <h2 className='forte'>Latest Testimonials</h2>
                    <h1>OUR CLIENTS</h1>
                </div>
                <div className='backsli position-absolute'></div>

                <OwlCarousel className='owl-theme slider2 ' {...slider2} navText={['prew', 'next']} items={1} dots={false} loop margin={10} nav>
                    <div class='item2'>
                        <div className='backsli2'>
                            <i><BiSolidQuoteAltLeft></BiSolidQuoteAltLeft></i>
                            <p>
                                ClientI wanted to tell you how amazing it was to see the farm and how much we love the food. Your apples and carrots are just wonderful and their taste is spectacular.
                            </p>
                            <div className='d-flex sli2-div'>
                                <img src={sli21}></img>
                                <div className='ms-3'>
                                    <h6 className=''>BILL MCALLON</h6>
                                    <font style={{ color: '#4C8208', fontWeight: 'bolder', fontStyle: 'italic' }} className=''>Farm Founder</font>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class='item2'>
                        <div className='backsli2'>
                            <i><BiSolidQuoteAltLeft></BiSolidQuoteAltLeft></i>
                            <p>
                                ClientI wanted to tell you how amazing it was to see the farm and how much we love the food. Your apples and carrots are just wonderful and their taste is spectacular.
                            </p>
                            <div className='d-flex sli2-div'>
                                <img src={sli22}></img>
                                <div className='ms-3'>
                                    <h6 className=''>BILL MCALLON</h6>
                                    <font style={{ color: '#4C8208', fontWeight: 'bolder', fontStyle: 'italic' }} className=''>Farm Founder</font>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class='item2'>
                        <div className='backsli2'>
                            <i><BiSolidQuoteAltLeft></BiSolidQuoteAltLeft></i>
                            <p>
                                I picked up a head of your lettuce at a local grocery store today. What an amazing and beautiful lettuce it is! I’ve never seen another so full and green and tempting.
                            </p>
                            <div className='d-flex sli2-div'>
                                <img src={sli23}></img>
                                <div className='ms-3'>
                                    <h6 className=''>BILL MCALLON</h6>
                                    <font style={{ color: '#4C8208', fontWeight: 'bolder', fontStyle: 'italic' }} className=''>Farm Founder</font>
                                </div>

                            </div>
                        </div>
                    </div>

                </OwlCarousel>

            </div></>
    );
}
export default Ourclient;