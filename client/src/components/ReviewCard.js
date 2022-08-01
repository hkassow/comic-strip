import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

function ReviewCard( { review }) {


    function stars() {
        const star = <Icon name="star outline" />
        return review.star * star
    }

    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{review.user.username}</Card.Header>
                <div className='stars in a row'>
                    {stars}
                </div>
                <Card.Description>
                    {review.comment}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default ReviewCard