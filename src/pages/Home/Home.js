import React from 'react';
import './Home.css';
import Image2 from '../../assets/images/lady.png';
import Image3 from '../../assets/images/landing-3.png';
import Image4 from '../../assets/images/male-5.png';
import Image5 from '../../assets/images/landing-5.png';
import Image6 from '../../assets/images/male-4.png';
import search from '../../assets/images/search.svg';
import {Carousel,Input} from 'antd';

export default function Home() {
  return(
      <div className='home'>
        <div className='header'> 
         <div className='message'>
            <h1>Quality is Assured</h1>
            <p>Get in touch with FM Designs and enjoy the quality of services</p>
            <div className='btns'>
                <div className='primary'>Contact us</div>
                <div className='secondary'>Learn More</div>
            </div>
         </div>
         <Carousel className='image' effect='fade' autoplay autoplaySpeed={2000} dots={false}>
            <img src={Image3} alt="3"/>
            <img src={Image6} alt="6"/>
            <img src={Image4} alt="4"/>
            <img src={Image2} alt="2"/>
            <img src={Image5} alt="5"/>
          </Carousel>
        </div>
        <div className='hero'>
            <div className='search'>
                <Input placeholder='Search'/>
                <img src={search} alt='search'/>
                <div className='primary' style={{height:50,width:200}}>Search</div>
            </div>
        </div>
      </div>
  )
}
