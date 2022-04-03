import React from 'react'
import { Link } from 'react-router-dom'
import useReview from '../../hooks/useReview'
import Review from '../Review/Review'
import './Home.css'
const Home = () => {
    const [reviews] = useReview()

    return (

        <section>
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
            <h2 className='reviews-headline'>Our Customers Reviews</h2>
            <div className='reviews-container'>

                {
                    reviews.map(review => <Review key={review.id} singleReview={review}></Review>)
                }
            </div>
            <Link to='/reviews'>
                <button className='review-all-btn'>See All Reviews</button>
            </Link>
        </section>
    )
}

export default Home