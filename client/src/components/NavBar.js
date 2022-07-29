import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";

function NavBar () {
    return (
        <Menu fluid widths={3} size='massive'>
            <MenuItem as={NavLink} exact to='/' activeStyle={{color: "red"}}>Home</MenuItem>
            <MenuItem as={NavLink} to='/comics' activeStyle={{color: "red"}}>Comics</MenuItem>
            <MenuItem as={NavLink} to='/members' activeStyle={{color: "red"}}>Members</MenuItem>
        </Menu>
    )
}
export default NavBar