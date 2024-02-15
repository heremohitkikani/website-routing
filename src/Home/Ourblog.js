
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import sli41 from '../image/sli41.jpeg';
import sli42 from '../image/sli42.jpeg';
import sli43 from '../image/sli43.jpeg';
import sli44 from '../image/sli44.jpeg';

const slider4 = {
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false,
      },
      600: {
        items: 2,
        dots: true,
        nav: false,
      },
      1000: {
        items: 3,
      }
    }
  }

function Ourblog() {
    return (
        <>
            <div className='spacery our-blog text-center'>
                <h3 className='forte'>Latest News</h3>
                <h1>OUR BLOG</h1>

                <OwlCarousel className='owl-theme slider4 text-center' autoplay autoplayTimeout={2000} {...slider4} dots={false} loop margin={30} navText={['prew', 'next']} nav>
                    <div class='item4'>
                        <a href=''><img src={sli41}></img></a>
                        <a href=''><p className='mt-4' style={{ fontWeight: 'bold', color: 'black' }}>  ina Few Simple StepsAugust 9, 2023Top 5 Easy and Chea Organic Breakfast Recipes</p></a>
                        <p>August 9, 2023</p>
                    </div>
                    <div class='item4'>
                        <a href=''><img src={sli42}></img></a>
                        <a href=''><p className='mt-4' style={{ fontWeight: 'bold', color: 'black' }}>   9, 2023Top 5 Easy and Chea Organic Breakfast  StepsAugust Recipes</p></a>
                        <p>August 9, 2023</p>
                    </div>
                    <div class='item4'>
                        <a href=''><img src={sli43}></img></a>
                        <a href=''><p className='mt-4' style={{ fontWeight: 'bold', color: 'black' }}>  Simple StepsAugust 9, 2023Top 5 Easy and Chea Organic   ina Few Breakfast Recipes</p></a>
                        <p>August 9, 2023</p>
                    </div>
                    <div class='item4'>
                        <a href=''><img src={sli44}></img></a>
                        <a href=''><p className='mt-4' style={{ fontWeight: 'bold', color: 'black' }}>  StepsAugust 9, 2023Top 5 Easy and Chea Organic Breakfast Recipes</p></a>
                        <p>August 9, 2023</p>
                    </div>

                </OwlCarousel>

            </div>
        </>
    )
}
export default Ourblog;