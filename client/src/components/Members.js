import React from "react";
import { Segment, Card, Container, Grid, Divider, Image } from "semantic-ui-react";
import Member_List_Style from "./Member_List_Style";

function Members(){
    return (
    <>
        <Segment>
            <Image src='/DC_Characters.webp' centered/>
        </Segment>
        <Container>
            <Card.Group itemsPerRow={4}>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
                <Card color='red'>Card</Card>
            </Card.Group>
            <Divider textalign='center' style={{padding: 50,"textAlign": "center"}}>
                filter area?
            </Divider>
            <Grid  columns={6}>
                <Member_List_Style/>
                <Member_List_Style/>
                <Member_List_Style/>
                <Member_List_Style/>
            </Grid>
        </Container>
    </>
    )
}

export default Members