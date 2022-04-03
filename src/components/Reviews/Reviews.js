import React from 'react'
import useReview from '../../hooks/useReview'
import './Reviews.css'
const Reviews = () => {
    const [reviews] = useReview()
    return (
        <div>
            {
                reviews.map(review =>
                    <div className='review-container'>
                        <div>

                            <p> key={review.id}</p>
                            <img className="review-img" src={review.picture} alt="" />
                        </div>
                        <div className="review-info">
                            <h4>Name: {review.name}</h4>
                            <p>Review: {review.review}</p>
                            <p><small>Ratings: {review.ratings} Stars</small></p>
                        </div>


                    </div>
                )
            }
        </div>
    )
}

export default Reviews