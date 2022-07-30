import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem } from "semantic-ui-react";
import Login_form from "./Login_form";
import { useState } from "react"

function NavBar ({onLogin}) {
    const [loginToggle, changeLoginToggle] = useState(false)
    const handleClick = (e) => {
        
    }
    return (
        <Menu inverted widths='equal' size='massive'>
            <Menu.Menu width ={3} position="left"  style={{'padding-left': 100}}>
                <MenuItem as={NavLink} exact to='/' activeStyle={{color: "red"}}>Home</MenuItem>
                <MenuItem as={NavLink} to='/comics' activeStyle={{color: "red"}}>Comics</MenuItem>
                <MenuItem as={NavLink} to='/members' activeStyle={{color: "red"}}>Members</MenuItem>
            </Menu.Menu>
            <Menu.Menu fluid position="right" style={{'padding-right': 100}}>
                {!loginToggle?<MenuItem onClick={changeLoginToggle}>Login</MenuItem> :
                <MenuItem fluid as={Login_form} onLogin={onLogin}> </MenuItem>}
            </Menu.Menu>
        </Menu>
    )  
}
export default NavBar