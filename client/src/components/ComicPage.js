import React, { useEffect, useState } from "react";
import { Container,
    Grid,
    GridColumn, 
    GridRow, 
    Header, 
    Image, 
    Input, 
    Segment, 
    Button,
    Icon } 
    from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import ComicWithReviews from "./ComicWithReviews";
import CreateAccountForm from "./CreateAccountForm";

const ComicPage = ({user, editReviewInComic}) => {
    const [userReview, setUserReview] = useState(false)
    const [editReview, setEditReview] = useState(false)
    const [starAmount, setStarAmount] = useState(null)
    const [editComment, setEditComment] = useState('')
    const comic = useLocation().state
    const handleUserReview = (review) => {
        setUserReview(review)
    }


    const handleEditReview = (e) => {
        setEditReview(false)
        console.log(starAmount)
        fetch(`/reviews/${userReview.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment: editComment, star: starAmount})
        }).then(res => {
            if (res.ok) {
                res.json().then(data => editReviewInComic(data, "update"))
            } else {
                res.json().then(data => console.log(data))
            }
        })
    }
    // useEffect(() => {
    //     if (user) {
    //         fetch(`/reviews?user_id=${user.id}&comic=${comic}`)
    //         .then(r => r.json())
    //         .then(d => setUserReview(d))
    //     }
    // }, [])

    const handleDeleteReview = (id) => {
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        }).then(() => {
            console.log('hi')
            setUserReview(null)
            editReviewInComic(comic, "delete")
        });
    }

    const handleStarClick = (e) => {
        if (editReview) {
            const stars = e.target.parentNode.childNodes
            let num = e.target.id.split('r')[1]
            setStarAmount(num)
            for (let i = num; i < stars.length; i++) {
                stars[i].className = 'star outline icon'
            }
            for (let i = num - 1; 0 <= i; i--) {
                stars[i].className = 'star icon'
            }
        }
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
                    <Segment inverted compact>
                    <Header textAlign="center" inverted size="huge">{comic.name}</Header>
                        {comic.synopsis}
                    </Segment>
                </GridColumn>
                <GridColumn>
                <Segment style={{"zIndex":10}} position='absolute' compact>
                    <Segment inverted compact>
                    {userReview? 
                    <>
                        <Input fluid disabled={!editReview} placeholder={userReview.comment} onChange={(e) => setEditComment(e.target.value)}></Input>
                        <Segment disabled={!editReview}>
                            <Icon onClick={(e) => handleStarClick(e)} id='star1' name={`star ${(1 <= starAmount)? null:"outline" }`}></Icon>
                            <Icon onClick={(e) => handleStarClick(e)} id='star2' name={`star ${(2 <= starAmount)? null:"outline" }`}></Icon>
                            <Icon onClick={(e) => handleStarClick(e)} id='star3' name={`star ${(3 <= starAmount)? null:"outline" }`}></Icon>
                            <Icon onClick={(e) => handleStarClick(e)} id='star4' name={`star ${(4 <= starAmount)? null:"outline" }`}></Icon>
                            <Icon onClick={(e) => handleStarClick(e)} id='star5' name={`star ${(5 <= starAmount)? null:"outline" }`}></Icon>
                        </Segment>
                        
                        <Button floated='left' style={{"margin-top":'5px'}} onClick={() => setEditReview(!editReview)}>click to edit</Button>
                        <Button style={{"margin-top":'5px'}} onClick={handleDeleteReview}>delete review</Button>
                        <Button floated='right' style={{"margin-top":'5px'}} onClick={(e) => handleEditReview(e)}>submit</Button>
                    </>
                    :<ReviewForm comic={comic} user={user}/>}
                    </Segment>
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