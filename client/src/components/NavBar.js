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
                    <Menu class="ui top fixed menu" style={{"background-color": "red"}} widths="3" inverted>
                        <MenuItem class="item" as={NavLink} to='/'>Home</MenuItem>
                        <MenuItem class="item" as={NavLink} to='/comics'>Comics</MenuItem>
                        <MenuItem class="item" as={NavLink} to='/members'>Members</MenuItem>
                        </Menu>
                </GridColumn>
                <GridColumn >
                    {loginToggle?
                        <Menu class="ui bottom fixed menu" style={{"position":'absolute', "background-color": "red"}} inverted widths={4}>
                            <LoginForm onLogin={onLogin} handleToggle={handleToggle}/>
                        </Menu>
                        :user?
                        <Menu inverted widths={1}>
                            <MenuItem onClick={logout}>logout</MenuItem>
                        </Menu>
                        :
                        <Menu class="ui bottom fixed menu" style={{"background-color": "red"}} inverted widths={2}>
                            <MenuItem onClick={handleToggle}>Login</MenuItem>
                            <MenuItem onClick={handleClick}>Create Account</MenuItem>
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