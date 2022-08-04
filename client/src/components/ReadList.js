import React, { useEffect, useState } from "react";
import { Card, Grid, Header, Image, GridRow, GridColumn } from "semantic-ui-react";
import ComicCard from "./ComicCard";

function ReadList({user}){
    const [watchList, setWatchList] = useState(null)
    useEffect(() => {
        if (user) {
            fetch(`/watchlists?$user_id=${user.id}`)
            .then(r => r.json())
            .then(d => setWatchList(d))
        }
    },[user])
    const handleDeleteWatch = (id) => {
        fetch(`watchlists/${id}`,{
            method: "DELETE"
        })
    }
    return (
    <Grid >
        <GridRow style={{marginTop: "0px",}}>
            <GridColumn>
                
                <Image src='/DC_Characters.webp' centered/>
            </GridColumn>
        </GridRow>
        <GridRow>
            <GridColumn>
                    {watchList?<Card.Group itemsPerRow={4}> {watchList.map(watch => (<ComicCard key = {watch.comic_id} comic = {watch.comic} handleDeleteWatch={handleDeleteWatch} watchID = {watch.id}/>))}</Card.Group> :<Header textAlign="center">NO COMICS CURRENTLY IN YOUR READ LIST</Header>}
            </GridColumn>
        </GridRow>
    </Grid>
    )
}

export default ReadList