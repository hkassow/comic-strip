import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useState } from "react"

function ReviewForm( { comic, user } )  {
    const [star, setStar] = useState("");
    const [comment, setComment] = useState("");
    const [userId, setUserId] = useState("")
    const [comicId, setComicId] = useState("")
    const [review, setReview] = useState({})

    function handleSubmit(e) {
        e.preventDefault();
        setComicId(comic.id)
        setUserId(user.id)
        setReview({
            user_id: userId,
            comic_id: comicId,
            star: star,
            comment: comment
        })
        fetch("http://localhost:4000/reviews", {
            method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
        })
        .then((r) => r.json())
        .then((review) => console.log(review));
    }

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field onChange={(e) => setComment(e.target.value)}>
            <label>Review</label>
            <input placeholder='Write Your Review Here' />
        </Form.Field>
        <Form.Group inline>
            <label>Rating</label>
            <Form.Field 
                control={Radio}
                label='One Star'
                value='1'
                checked={value === '1'}
                onChange={(e) => setStar('1')}
            />
            <Form.Field 
                control={Radio}
                label='Two Stars'
                value='2'
                checked={value === '2'}
                onChange={(e) => setStar('2')}
            />
            <Form.Field 
                control={Radio}
                label='Three Stars'
                value='3'
                checked={value === '3'}
                onChange={(e) => setStar('3')}
            />
            <Form.Field 
                control={Radio}
                label='Four Stars'
                value='4'
                checked={value === '4'}
                onChange={(e) => setStar('4')}
            />
            <Form.Field 
                control={Radio}
                label='Five Stars'
                value='5'
                checked={value === '5'}
                onChange={(e) => setStar('5')}
            />
        </Form.Group>
        <Button type='submit'>Submit</Button>
        <Button onClick={handleToggle}>x</Button>
      </Form>
    )
}



export default ReviewForm