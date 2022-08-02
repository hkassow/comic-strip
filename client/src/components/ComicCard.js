import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

function ComicCard( { comic }) {

    function stars() {
        const array = []
        for ( let i = 0; i < comic.average_rating; i++) {
            array.push(<Icon name="star outline" />)
        }
        return array
    }

    return (
        <Card>
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
            <Button >Read Reviews</Button>
            <Button >Write Review</Button>
        </Card>
    )
}

export default ComicCard