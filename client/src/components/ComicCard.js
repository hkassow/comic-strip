import React from 'react'
import { Button, Card, CardContent, Icon, Image } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

function ComicCard( { comic, id }) {

    function stars() {
        const array = []
        if (comic.average_rating !== 'undefined') {
            for ( let i = 0; i < comic.average_rating; i++) {
                array.push(<Icon name="star outline" />)
            }
            return array
        }
        else {
            console.log("no reviews")
        }
    }
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate(`/comics/${id}`,  { replace: true })
        console.log(id)
    }

    return (
        <Card id={id} onClick={handleClick}>
            <Image src={comic.cover_illustration} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{comic.name}</Card.Header>
                <Card.Meta>
                    <span>Author: {comic.author}</span>
                    <span>Illustrator: {comic.illustrator}</span>
                </Card.Meta>
                <Card.Description>
                    {comic.synopsis.slice(0, 99) + "..."}
                </Card.Description>
                <div className='stars in a row'>
                    {stars()}
                </div>
            </Card.Content>
        </Card>
    )
}

export default ComicCard