import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

function ComicCard( { comic }) {

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
        navigate(`/comics/${comic.id}`,  { replace: true, state: comic})
    }

    return (
        <Card id={comic.id} onClick={handleClick}>

            <Card.Content textAlign='center'>{comic.name}</Card.Content>
            <Image src={comic.cover_illustration} wrapped ui={false} />
            <Card.Content>
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
                {/* <Button size='small' floated='right'>x</Button> */}
            </Card.Content>
        </Card>
    )
}

export default ComicCard