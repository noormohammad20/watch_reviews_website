import React from 'react'
import './ReviewsDetails.css'
const ReviewsDetails = ({ review }) => {
    return (
        <div>
            <div className='review-container'>
                <div>
                    <img className="review-img" src={review.picture} alt="" />
                </div>
                <div className="review-info">
                    <h4>Name: {review.name}</h4>
                    <p>Review: {review.review}</p>
                    <p><small>Ratings: {review.ratings} Stars</small></p>
                </div>


            </div>
        </div>
    )
}

export default ReviewsDetails