import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

function ComicCard( { comic }) {


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
                {/* Fix, a number of star Icons in a row for the the total of {comic.average_rating} */}
                {/* <Icon name="star outline" /> */}
            </Card.Content>
            <Button >Read Reviews</Button>
            <Button >Write Review</Button>
        </Card>
    )
}