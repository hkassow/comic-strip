import React, { useEffect, useState } from "react";
import { Segment, Card, Container, Grid, Header, Image, GridRow, GridColumn } from "semantic-ui-react";
import MemberListStyle from "./MemberListStyle";

function Members({user}){
    const [watchList, setWatchList] = useState(null)
    return (
    <Grid >
        <GridRow style={{marginTop: "0px",}}>
            <GridColumn>
                
                <Image src='/DC_Characters.webp' centered/>
            </GridColumn>
        </GridRow>
        <GridRow>
            <GridColumn>
                {watchList?<h1>hi</h1>:<Header textAlign="center">NO COMICS CURRENTLY IN YOUR READ LIST</Header>}
            </GridColumn>
        </GridRow>
    </Grid>
    )
}

export default Members