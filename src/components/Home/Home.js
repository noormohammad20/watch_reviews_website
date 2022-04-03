import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className='watch-container'>
            <div className="watch-details">
                <h1 className='headline'>Best Premium Watch!</h1>
                <p className='product-details'> <span>This Watch Has All The Awesome Features. And This Watch Reveals Your Personality. So Buy It And Give It A Review.</span> </p>
                <button className='watch-btn'>Live Demo</button>
            </div>
            <div >
                <img className="watch-img" src="https://i0.wp.com/www.wristwatchreview.com/wp-content/uploads/2022/04/aquastar-deepstar-chrono-hero-grey.jpg?w=864&ssl=1" alt="" />
            </div>
        </div>
    )
}

export default Home