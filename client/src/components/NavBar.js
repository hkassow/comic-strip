import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, GridColumn, GridRow, Menu, MenuItem } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import { useState } from "react"

function NavBar ({onLogin, handleClick}) {
    const [loginToggle, changeLoginToggle] = useState(false)
    const handleToggle = () => {
        changeLoginToggle(!loginToggle)
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
            <GridColumn  >
                {!loginToggle?
                <Menu inverted widths={2}>
                    <MenuItem onClick={handleToggle}>Login</MenuItem>
                    <MenuItem onClick={handleClick}>Create account</MenuItem>
                </Menu>:
                <LoginForm handleToggle={handleToggle} onLogin={onLogin}/>}
                {/* <Menu width={1} inverted>
                    {!loginToggle?<MenuItem onClick={handleToggle}>Login</MenuItem> :
                    <MenuItem fluid as={Login_form} handleToggle={handleToggle} onLogin={onLogin}> </MenuItem>}
                </Menu> */}
            </GridColumn>
            </GridRow>
        </Grid>
    )  
}
export default NavBar