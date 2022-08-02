import React from "react";
import { GridColumn, GridRow } from "semantic-ui-react";
import { FaHeart, FaList, FaEye } from "react-icons/fa";

const MemberListStyle = () => {
    return (
        <GridRow columns='equal' style={{borderTop: "2px solid black", borderBottom:"2px solid black", color:'white'}} >
            <GridColumn width={8}>
                <h3>Member Name</h3>
            </GridColumn>
            <GridColumn>
                <FaEye />
                <h3 style={{display:'inline',"paddingLeft": "5px"}}>500</h3>
            </GridColumn>
            <GridColumn>
                <FaList/>
                <h3 style={{display:'inline',"paddingLeft": "5px"}}>7</h3>
            </GridColumn>
            <GridColumn> 
                <FaHeart/>
                <h3 style={{display:'inline',"paddingLeft": "5px"}}>100</h3>
            </GridColumn>
        </GridRow>
    )
}

export default MemberListStyle