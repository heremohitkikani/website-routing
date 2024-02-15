import '../App.css';
import '../media.css';
import slider11 from '../image/slider11.jpeg';
import slider12 from '../image/slider12.jpeg';
import slider13 from '../image/slider13.jpeg';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const slider1 = {
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: false,
    },
    700: {
      dots: false,
      nav: true,
    },
    1000: {

    }
  }
}
function Slider1(){
    return(
        <>
          <OwlCarousel className='owl-theme slider1'{...slider1} navText={['PREW', 'NEXT']} dots={false} items={1} loop margin={0} nav >
        <div class='item1'>
          <img src={slider11}></img>
          <div className='slider-div  '>
            <h3 className='fort' >High-Quality Organic Products</h3>
            <p>VEGETABLES</p>
            <h1>WITHOUT HARMFUL ADDITIVES</h1>
            <button><a href=''><span>SHOP NOW</span></a></button>
          </div>
        </div>
        <div class='item1'>
          <img src={slider12}></img>
          <div className='slider-div'>
            <h3 className='fort' >Welcome to Our Farm</h3>
            <p>PRODUCTS</p>
            <h1>WITHOUT HARMFUL ADDITIVES</h1>
            <button><a href=''><span>SHOP NOW</span></a></button>
          </div>

        </div>
        <div class='item1'>
          <img src={slider13}></img>
          <div className='slider-div '>
            <h3 className='fort' >Fresh Organic Produce</h3>
            <p>FRUITES</p>
            <h1>WITH LOTS OF VITAMINS</h1>
            <button><a href=''><span>SHOP NOW</span></a></button>
          </div>

        </div>


      </OwlCarousel></>
    );
}
export default Slider1;