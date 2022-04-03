import React from 'react'
import './Review.css'
const Review = ({ singleReview }) => {
    const { name, review, picture, ratings } = singleReview
    return (
        <div className='review-container'>
            <div>
                <img className="review-img" src={picture} alt="" />
            </div>
            <div className="review-info">
                <h4>Name: {name}</h4>
                <p>Review: {review}</p>
                <p><small>Ratings: {ratings} Stars</small></p>
            </div>


        </div>
    )
}

export default Review