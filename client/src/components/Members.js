import React from "react";
import { Segment, Card, Container, Grid, Header, Image, GridRow, GridColumn } from "semantic-ui-react";
import MemberListStyle from "./MemberListStyle";

function Members(){
    return (
    <Grid >
        <GridRow style={{marginTop: "0px",}}>
            <GridColumn>
                <Header floated='left'>COMIC WATCH LIST</Header>
                <Image src='/DC_Characters.webp' floated="right"/>
            </GridColumn>
        </GridRow>
        <GridRow>
            <GridColumn>
                <Card.Group itemsPerRow={4}>
                    <Card color='red'>Card</Card>
                    <Card color='red'>Card</Card>
                    <Card color='red'>Card</Card>
                    <Card color='red'>Card</Card>
                </Card.Group>
            </GridColumn>
        </GridRow>
    </Grid>
    )
}

export default Members