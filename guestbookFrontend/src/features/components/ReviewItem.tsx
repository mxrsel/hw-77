import React from 'react';
import {GuestBook} from "../../types";
import {Card} from "react-bootstrap";
import {apiUrl} from "../../globalConstants.ts";

interface ReviewItemProps {
    review: GuestBook
}

const ReviewItem: React.FC<ReviewItemProps> = ({review}) => {
    return (
        <Card style={{ width: '18rem', marginRight: '10px'}}>
            {review.image && <Card.Img variant="top" style={{height: '200px'}} src={`${apiUrl}/${review.image}`} />}
            <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>
                    {review.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ReviewItem;