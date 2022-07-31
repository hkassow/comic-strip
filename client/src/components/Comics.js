import React from "react";
import { Segment, Card, Container } from "semantic-ui-react";

function Comics(){
    return (
        <>
        <Segment style={{padding: 100}} textAlign='center' size='massive'>filter or title of section</Segment>
        <Container>
            <Card.Group itemsPerRow={4}>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
            </Card.Group>
        </Container>
        </>
    )
}

export default Comics