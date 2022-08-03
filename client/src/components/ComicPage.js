import React from "react";
import { Container, Grid, GridColumn, GridRow, Header, Image, Segment } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import ComicWithReviews from "./ComicWithReviews";

const ComicPage = ({user}) => {
    const comic = useLocation().state
    console.log(comic)
    console.log(user)
    return (
        <Grid columns={3} stretched style={{"padding": "50px", "textAlign":"center"}}>
            <GridRow celled>
                <GridColumn>
                    <Container>
                        <Image src={comic.cover_illustration} fluid/>
                    </Container>
                </GridColumn>
                <GridColumn>
                    {/* <Header>TITLE OF COMIC</Header> */}
                    <Segment inverted compact>
                    {/* <Header>Synopsis</Header> */}
                        {comic.synopsis}
                    </Segment>
                </GridColumn>
                <GridColumn>{user? <ReviewForm comic={comic} user={user}/> : <Header>login to create a review overlaying the content with slightly grey box</Header>}</GridColumn>
            </GridRow>
            <GridRow centered>
                <GridColumn style={{"textAlign":"center"}}>
                    <ComicWithReviews comic={comic}/>
                </GridColumn>
            </GridRow>

        </Grid>
    )
}
export default ComicPage