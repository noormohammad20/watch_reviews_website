import React from 'react'
import useReview from '../../hooks/useReview'
import ReviewsDetails from '../ReviewsDetails/ReviewsDetails'
import './Reviews.css'
const Reviews = () => {
    const [reviews] = useReview()
    return (
        <div>
            {
                reviews.map(review =>
                    <ReviewsDetails
                        key={review.id}
                        review={review}
                    ></ReviewsDetails>
                )
            }
        </div>
    )
}

export default Reviews