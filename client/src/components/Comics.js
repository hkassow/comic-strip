import React, { useEffect, useState } from "react";
import { Segment, Card, Container } from "semantic-ui-react";
import ComicCard from "./ComicCard";

function Comics(){
    const [comics, setComics] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/comics")
          .then((response) => response.json())
          .then((data) => setComics(data));
    }, []);

    function displayComics() {
        const slicedComics = comics.slice(0, 12)
        return slicedComics.map((comic) => <ComicCard comic={comic} />)
    }


    return (
        <>
        <Segment style={{padding: 100}} textAlign='center' size='massive'>filter or title of section</Segment>
        <Container>
            <Card.Group itemsPerRow={4}>
                {displayComics()}
            </Card.Group>
        </Container>
        </>
    )
}

export default Comics