import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, GridColumn, GridRow, Menu, MenuItem, Button, MenuMenu, Container } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import { useState } from "react"

function NavBar ({onLogin, handleClick, user}) {
    const [loginToggle, changeLoginToggle] = useState(false)
    const handleToggle = () => {
        changeLoginToggle(!loginToggle)
      }
    const logout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogin(null));
    }
    return (
        <Grid padding={100} columns='equal'>
            <GridRow>
                <Grid.Column>
                </Grid.Column>
                <GridColumn >
                    <Menu widths="3" inverted>
                        <MenuItem as={NavLink} to='/'>Home</MenuItem>
                        <MenuItem as={NavLink} to='/comics'>Comics</MenuItem>
                        <MenuItem as={NavLink} to='/members'>Members</MenuItem>
                        </Menu>
                </GridColumn>
                <GridColumn >
                    {loginToggle?
                        <Menu style={{"position":'absolute'}} inverted widths={4}>
                            <LoginForm onLogin={onLogin} handleToggle={handleToggle}/>
                        </Menu>
                        :user?
                        <Menu inverted widths={1}>
                            <MenuItem onClick={logout}>logout</MenuItem>
                        </Menu>
                        :
                        <Menu inverted widths={2}>
                            <MenuItem onClick={handleToggle}>Login</MenuItem>
                            <MenuItem onClick={handleClick}>Create account</MenuItem>
                        </Menu>
                        }
                </GridColumn>
            </GridRow>
        </Grid>
    )  
}
export default NavBar

{/* <MenuItem> <LoginForm onLogin={onLogin} handleClick={handleToggle}/>
                    </MenuItem> */}