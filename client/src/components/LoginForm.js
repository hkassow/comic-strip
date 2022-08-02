import React from 'react'
import { Button, Form, Segment, Menu,MenuItem } from 'semantic-ui-react'
import { useState } from "react"

const LoginForm =({onLogin, handleClick }) => {
    const [loginToggle, changeLoginToggle] = useState(false)
    const [loginError,setLoginError] = useState(null)
    const [user, setUser] = useState({
      username: null,
      password: null
    })
    const handleToggle = () => {
      changeLoginToggle(!loginToggle)
    }
    const handleChange = (e) => {
      const {placeholder, value} = e.target
      setUser({...user, [placeholder]:value})
      if (loginError) {
        setTimeout(() => {  setLoginError(false) }, 3000);
    }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const {username, password} = user
        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then(user => onLogin(user))
            handleToggle()
          } else {
            setLoginError(true)
            r.json().then(error => console.log(error))
          }
        })
    }
    if (!loginToggle) {
      return (
        <Menu inverted widths={2}>
          <MenuItem onClick={handleToggle}>Login</MenuItem>
          <MenuItem onClick={handleClick}>Create account</MenuItem>
        </Menu>
      )
    }

    return (
        <Segment inverted>
          <Form inverted onSubmit={handleSubmit}>
            <Form.Group  widths='equal'>
              <Form.Input error={loginError} fluid label='Username' placeholder='username' onChange={handleChange}/>
              <Form.Input error={loginError} fluid label='Password' type="password" placeholder='password' onChange={handleChange}/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
            <Button style={{float: "right"}} onClick={handleToggle}>x</Button>
          </Form>
        </Segment>
    )
}

export default LoginForm