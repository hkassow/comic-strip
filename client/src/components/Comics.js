import React, { useEffect, useState } from "react";
import { Segment, Card, Container, Sticky } from "semantic-ui-react";
import ComicCard from "./ComicCard";
import SearchBar from "./SearchBar";

function Comics(){
    const [comics, setComics] = useState([])
    const [comicDisplay, setComicDisplay] = useState([])
    useEffect(() => {
        fetch("/comics")
          .then((response) => response.json())
          .then((data) => setComics(data));
    }, []);

    return (
        <>
        <Sticky>
        <Segment textAlign='center' size='massive'>
            <SearchBar comics = {comics} setComicDisplay = {setComicDisplay}/>
        </Segment>
        </Sticky>
        <Container>
            <Card.Group itemsPerRow={4}>
                {comicDisplay.length === 0  ? 
                comics.filter(comic => comic.average_rating !== null).reverse().slice(0, 12).sort((a, b) => a.name.localeCompare(b.name)).map(comic => <ComicCard key = {comic.id} comic = {comic} />) 
                : comicDisplay.map(comic => <ComicCard key = {comic.id} comic = {comic} />)}
            </Card.Group>
        </Container>
        </>
    )
}

export default Comics