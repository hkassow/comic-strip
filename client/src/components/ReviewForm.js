import React from 'react'
import { Button, Form, Radio } from 'semantic-ui-react'
import { useState } from "react"

function ReviewForm( { comic, user, handleUserReview } )  {
    const [star, setStar] = useState("");
    const [comment, setComment] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const review = {
            comic_id: comic.id,
            user_id: user.id,
            star: star,
            comment: comment
        }
    
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(review),
        })
        .then((r) => r.json())
        .then((review) => handleUserReview(review));
    }

    return (
      <Form  style={{"z-index": "0"}}inverted onSubmit={handleSubmit}>
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
                checked={star === '1'}
                onChange={(e) => setStar('1')}
            />
            <Form.Field 
                control={Radio}
                label='Two Stars'
                value='2'
                checked={star === '2'}
                onChange={(e) => setStar('2')}
            />
            <Form.Field 
                control={Radio}
                label='Three Stars'
                value='3'
                checked={star === '3'}
                onChange={(e) => setStar('3')}
            />
            <Form.Field 
                control={Radio}
                label='Four Stars'
                value='4'
                checked={star === '4'}
                onChange={(e) => setStar('4')}
            />
            <Form.Field 
                control={Radio}
                label='Five Stars'
                value='5'
                checked={star === '5'}
                onChange={(e) => setStar('5')}
            />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    )
}



export default ReviewForm