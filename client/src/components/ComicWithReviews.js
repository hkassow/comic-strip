import React from "react";
import { Card, Container, Header } from "semantic-ui-react";
import ReviewCard from "./ReviewCard.js"

function ComicWithReviews( { comic, user, handleUserReview } ){
    let reviews
    function reviewCards() {
        reviews = comic.reviews.map((review) => {
        return <ReviewCard review={review} />}
        )
    }
    reviewCards()
    return (
        <>
        <Header as='h1'>Reviews for {comic.name}</Header>
        <Container>
            <Card.Group itemsPerRow={1}>
               { reviews }
            </Card.Group>
        </Container>
        </>
    )
}

export default ComicWithReviews