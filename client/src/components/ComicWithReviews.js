import React from "react";
import { Card, Container, Header } from "semantic-ui-react";
import ReviewCard from "./ReviewCard.js"

function ComicWithReviews( { comic } ){

    function reviewCards() {
        comic.reviews.map((review) => <ReviewCard review={review} />)
    }
    console.log(comic)
    return (
        <>
        <Header as='h1'>Reviews for {comic.name}</Header>
        <Container>
            <Card.Group itemsPerRow={1}>
               { reviewCards }
            </Card.Group>
        </Container>
        </>
    )
}

export default ComicWithReviews