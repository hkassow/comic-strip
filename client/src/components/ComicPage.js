import React from "react";
import { Container, Grid, GridColumn, GridRow } from "semantic-ui-react";


const ComicPage = () => {
    return (
        <Grid columns={3} stretched style={{"padding": "50px", "text-align":"center"}}>
            <GridRow celled>
                <GridColumn>
                    <Container>
                        image
                    </Container>
                </GridColumn>
                <GridColumn>synopsis</GridColumn>
                <GridColumn>add review/add to list</GridColumn>
            </GridRow>
            <GridRow centered>
                <GridColumn style={{"text-align":"center"}}>reviews</GridColumn>
            </GridRow>

        </Grid>
    )
}
export default ComicPage