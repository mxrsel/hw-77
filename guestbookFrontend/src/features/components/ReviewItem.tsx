import React from 'react';
import {GuestBook} from "../../types";
import {apiUrl} from "../../globalConstants";

interface ReviewItemProps {
    review: GuestBook
}

const ReviewItem: React.FC<ReviewItemProps> = ({review}) => {

if(review.image) {
    return apiUrl + '/' + review.image
}

    return (
        <div>
            <div className='card'>
                <div className='card-header'>
                    <img className='card-img' src={review.image}
                    alt='review image'
                    />
                    <div className='card-title'>
                        {review.name}
                    </div>
                    <div className='card-text'>
                        {review.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;