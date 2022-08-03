import React, { useState } from "react";
import { Container,
    Grid,
    GridColumn, 
    GridRow, 
    Header, 
    Image, 
    Input, 
    Segment, 
    Button } 
    from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import ComicWithReviews from "./ComicWithReviews";

const ComicPage = ({user}) => {
    const [userReview, setUserReview] = useState(null)
    const comic = useLocation().state

    const handleUserReview = (review) => {
        setUserReview(review)
    }
    const testFunciton = () => {
        fetch(`/reviews?comic_id=${comic.id}&user_id=${user.id}`)
        .then(r => r.json())
        .then(d => console.log(d))
    }
    console.log(comic)
    console.log(user)
    return (
        <>
        <Grid celled columns={3} stretched style={{"padding": "50px", "textAlign":"center"}}>
            
            <GridRow >
                <GridColumn>
                    <Container>
                        <Image src={comic.cover_illustration} fluid/>
                    </Container>
                </GridColumn>
                <GridColumn>
                    {/* <Header>TITLE OF COMIC</Header> */}
                    <Segment inverted compact>
                    {/* <Header>Synopsis</Header> */}
                    <Header textAlign="center" inverted size="huge">{comic.name}</Header>
                        {comic.synopsis}
                    </Segment>
                </GridColumn>
                <GridColumn>
                    <Segment inverted compact>
                    {!userReview? 
                    <>
                        <Input fluid placeholder='USER REVIEW'></Input>
                        <Button onClick={() => testFunciton()} style={{"padding":'105px'}}>click to edit</Button>
                    </>
                    :<ReviewForm comic={comic} user={user}/>}
                    </Segment>
                </GridColumn>
            </GridRow>
            <GridRow centered>
                <GridColumn style={{"textAlign":"center"}}>
                    <ComicWithReviews comic={comic} user={user} handleUserReview={handleUserReview}/>
                </GridColumn>
            </GridRow>

        </Grid>
        </>
    )
}
export default ComicPage