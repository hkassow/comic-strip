import React from "react";
import { Segment, Card, Container, Grid, GridRow, GridColumn } from "semantic-ui-react";

function Members(){
    return (
        <>
        <Segment style={{padding: 100}} textAlign='center' verticalalign='bottom' size='massive'>Comic members</Segment>
        <Container>
            <Card.Group itemsPerRow={4}>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
            </Card.Group>
        </Container>
        <Grid style={{padding: 100}} columns={4}>
            <GridRow style={{borderTop: "2px solid black", borderBottom:"2px solid black", color:'white'}} >
                <GridColumn >member name</GridColumn>
                <GridColumn>reviews</GridColumn>
                <GridColumn>lists</GridColumn>
                <GridColumn>favorites</GridColumn>
            </GridRow>
        </Grid>
        </>
    )
}

export default Members