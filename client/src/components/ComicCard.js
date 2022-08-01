import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

function ComicCard( { comic }) {

    function stars() {
        const star = <Icon name="star outline" />
        return comic.average_rating * star
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
                    {comic.synopsis}
                </Card.Description>
                <div className='stars in a row'>
                    {stars}
                </div>
            </Card.Content>
            <Button >Read Reviews</Button>
            <Button >Write Review</Button>
        </Card>
    )
}

export default ComicCard