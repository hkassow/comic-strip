import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, GridColumn, GridRow, Menu, MenuItem, Button } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import { useState } from "react"

function NavBar ({onLogin, handleClick, user}) {
    const logout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogin(null));
    }
    return (
        <Grid size={'massive'} padding={100} columns='equal'>
            <GridRow>
            <Grid.Column>
            </Grid.Column>
            <GridColumn width={8}>
                <Menu  widths={3}inverted>
                    <MenuItem as={NavLink} to='/'>Home</MenuItem>
                    <MenuItem as={NavLink} to='/comics'>Comics</MenuItem>
                    <MenuItem as={NavLink} to='/members'>Members</MenuItem>
                </Menu>
            </GridColumn>
            <GridColumn >
                {user? 
                <Menu inverted fluid widths={1} backgroundcolor='white'>
                    <MenuItem onClick={logout}>logout</MenuItem>
                </Menu>:
                <LoginForm onLogin={onLogin} handleClick={handleClick}/>
                }
            </GridColumn>
            </GridRow>
        </Grid>
    )  
}
export default NavBar