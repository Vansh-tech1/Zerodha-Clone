import "./hero.css"
import React from 'react';
function Hero() {
    return (
        <div className='container p-5 text-center'>
            <div className='row'>
                <img src='media/images/homeHero.png' alt='hero section' className='mb-5 home-hero-img' />

                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks,serivatives,mutual funds and more</p>
                <button className='p-2 btn  btn-primary fs-5 mb-5' style={{width:"20%", margin:"auto", borderRadius:"5px",backgroundColor:"#387ed1"}}>Signup Now</button>


            </div>

        </div> 
     );
}

export default Hero;