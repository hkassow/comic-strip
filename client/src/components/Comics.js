import React from "react";
import { Segment, Card, Container } from "semantic-ui-react";
import ComicCard from "./ComicCard";

function Comics(){
    return (
        <>
        <Segment style={{padding: 100}} textAlign='center' size='massive'>filter or title of section</Segment>
        <Container>
            <Card.Group itemsPerRow={4}>
            </Card.Group>
        </Container>
        </>
    )
}

export default Comics